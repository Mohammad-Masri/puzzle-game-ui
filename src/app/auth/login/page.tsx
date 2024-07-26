"use client";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/actions";
import { setLoggedUser } from "@/store/slices/user";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    login(username, password)
      .then((result) => {
        const { token, ...user } = result.data;
        localStorage.setItem("JWT", token);

        dispatch(setLoggedUser(user));

        router.push("/game");
      })
      .catch((error) => {
        console.error(error.response);
        setError(error.response.data.error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-between p-24 gap-5">
      <h1 className="text-4xl">Login</h1>
      <div className="w-2/3 flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <label id="username">Username</label>
          <input
            className="p-2 rounded-lg border-2 border-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>

        <div className="flex flex-row justify-between">
          <label id="password">Password</label>
          <input
            className="p-2 rounded-lg border-2 border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
          />
        </div>

        <button
          onClick={() => handleSubmit()}
          className="bg-sky-400 p-2 rounded-md hover:bg-sky-600"
        >
          Login
        </button>

        {error && <p className="bg-red-500 text-white p-2">{error}</p>}
      </div>
    </div>
  );
}
