"use client";

import Cookies from "js-cookie";

export function useLogout() {
  return () => {
    Cookies.remove("token");
    window.location.href = "/auth/login";
  };
}
