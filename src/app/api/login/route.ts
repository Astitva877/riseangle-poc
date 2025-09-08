/**
 * This file is just example and will not be required in actual implementation, as we will be using real backend service.
 */

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "test@example.com" && password === "password") {
    return NextResponse.json({
      token: "fake-jwt-token",
      user: { id: "1", email, name: "Test User" },
    });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
