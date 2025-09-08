import { fetchClient } from "@/lib/fetchClient";
import { LoginRequest, LoginResponse } from "./authTypes";

export const authApi = {
  login: (data: LoginRequest) =>
    fetchClient<LoginResponse>("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
