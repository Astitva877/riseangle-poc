"use client";

import { useState } from "react";
import { useLogin } from "../viewmodels/useLogin";

export default function LoginForm() {
  const login = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 border rounded-xl shadow-md space-y-4"
    >
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        disabled={login.isPending}
      >
        {login.isPending ? "Logging in..." : "Login"}
      </button>

      {login.isError && <p className="text-red-600">{login.error.message}</p>}
      {login.isSuccess && (
        <p className="text-green-600">Login successful! Redirecting...</p>
      )}
    </form>
  );
}
