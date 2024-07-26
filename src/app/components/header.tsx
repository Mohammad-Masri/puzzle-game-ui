"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUser, setLoggedUser } from "@/store/slices/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    dispatch(setLoggedUser(undefined));
    router.push("/");
  };

  return (
    <nav className="p-2 flex justify-between bg-slate-200 w-full text-blue-800">
      <p>Puzzle Games</p>

      <div className="flex gap-5 ">
        {user ? (
          <>
            <p>Welcome {user.name}</p>
            <button onClick={() => handleLogout()}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
}
