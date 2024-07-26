"use client";
import { getMe } from "@/store/slices/actions";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getMe(localStorage.getItem("JWT"))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Welcome To Puzzle Games</h1>
    </main>
  );
}
