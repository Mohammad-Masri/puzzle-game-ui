"use client";
import { useAppDispatch } from "@/store/hooks";
import {
  getAvailableGames,
  getDifficultiesGames,
} from "@/store/slices/actions";
import { setAvailableGames, setDifficulties } from "@/store/slices/game";
import React, { useEffect } from "react";
import StartGameForm from "./components/start-game-form";

export default function GameInitPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getAvailableGames(localStorage.getItem("JWT") + "").then((result) => {
      dispatch(setAvailableGames(result.data));
    });

    getDifficultiesGames(localStorage.getItem("JWT") + "").then((result) => {
      dispatch(setDifficulties(result.data));
    });
  }, []);

  return (
    <div className="flex flex-col p-24">
      <StartGameForm />
    </div>
  );
}
