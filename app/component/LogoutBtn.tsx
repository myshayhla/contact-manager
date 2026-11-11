"use client";

import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <button
      onClick={handleLogout}
      className="
        inline-flex items-center gap-2
        rounded-lg border border-gray-200
        bg-white px-4 py-2.5
        text-sm font-medium text-gray-600
        transition-all duration-200
        hover:border-red-200
        hover:bg-red-50
        hover:text-red-600
        active:scale-95
      "
    >
      <LogOut size={16} />
      <span>Logout</span>
    </button>
  );
}
