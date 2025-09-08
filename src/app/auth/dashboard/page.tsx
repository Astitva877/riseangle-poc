"use client";

import { useLogout } from "@/features/auth/viewmodels/useLogout";

export default function DashboardPage() {
  const logout = useLogout();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Hello World - Dashboard</h1>
      <button
        onClick={logout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
