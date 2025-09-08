"use client";

import { useMutation } from "@tanstack/react-query";
import { authApi } from "../models/authApi";
import { LoginRequest, LoginResponse } from "../models/authTypes";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Save token to cookies
      Cookies.set("token", data.token, { secure: true });
      // Redirect to dashboard
      router.push("/auth/dashboard");
    },
  });
}
