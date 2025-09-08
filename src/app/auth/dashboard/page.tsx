"use client";

import { useLogout } from "@/features/auth/viewmodels/useLogout";

export default function DashboardPage() {
  const logout = useLogout();

  return (
    <div className="p-10">
      <div className="text-[var(--text-color)]">Hello</div>
      <button
        onClick={logout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
