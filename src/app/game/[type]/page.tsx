"use client";
import socket from "@/socket";
import { useAppSelector } from "@/store/hooks";
import { selectCurrentGame } from "@/store/slices/game";
import React from "react";

export default function GamePage() {
  const game = useAppSelector(selectCurrentGame);

  const board: number[][] = game?.board;

  const handleChangeCell = (i: number, j: number, value: number) => {
    console.log({ i, j, value });

    socket.emit("change-cell", {
      i,
      j,
      value,
      gameId: game?._id,
    });
  };

  return (
    <div className="flex flex-col p-24 items-center justify-center">
      <table className="w-full border-2 border-black p-2">
        <tbody>
          {board.map((r, i) => {
            return (
              <tr key={i}>
                {r.map((item, j) => {
                  const key = `${i}-${j}`;

                  const bgColor = i % 2 === 0 ? "bg-gray-100" : "bg-gray-200";

                  return (
                    <td key={key} className={" text-center " + bgColor}>
                      {item === 0 ? (
                        <input
                          className="max-w-9 text-center"
                          onChange={(e) => {
                            handleChangeCell(i, j, Number(e.target.value));
                          }}
                        />
                      ) : (
                        <p className="max-w-9">{item}</p>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
