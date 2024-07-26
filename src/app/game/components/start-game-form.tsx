"use client";
import { IGame } from "@/dto/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { startGame } from "@/store/slices/actions";
import {
  selectAvailableGames,
  selectDifficulties,
  setCurrentGame,
} from "@/store/slices/game";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function StartGameForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const availableGames = useAppSelector(selectAvailableGames);
  const difficulties = useAppSelector(selectDifficulties);

  const [selectedGame, setSelectedGame] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [error, setError] = useState("");

  const handleStartGame = () => {
    if (!selectedGame) setError("please select a game");
    if (!selectedDifficulty) setError("please select a difficulty");

    startGame(
      localStorage.getItem("JWT") + "",
      selectedGame,
      selectedDifficulty
    )
      .then((result) => {
        const game: IGame = result.data;
        dispatch(setCurrentGame(game));
        router.push(`/game/${game.type}`);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1>Select a game</h1>
        <div className="grid grid-cols-4 gap-3">
          {availableGames.map((v) => (
            <div
              className={
                "p-2 border-2 border-black hover:border-blue-400 rounded-md"
              }
              style={{
                backgroundColor: v === selectedGame ? "blue" : "white",
              }}
              key={v}
              onClick={() => setSelectedGame(v)}
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1>Select a difficulty</h1>
        <div className="grid grid-cols-4 gap-3">
          {difficulties.map((v) => (
            <div
              className={
                "p-2 border-2 border-black hover:border-blue-400 rounded-md"
              }
              style={{
                backgroundColor: v === selectedDifficulty ? "blue" : "white",
              }}
              key={v}
              onClick={() => setSelectedDifficulty(v)}
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      <button
        className="bg-sky-500 p-2 rounded-md hover:bg-sky-800"
        onClick={() => handleStartGame()}
      >
        Start
      </button>
      {error && <p className="bg-red-500 text-white p-2">{error}</p>}
    </div>
  );
}
