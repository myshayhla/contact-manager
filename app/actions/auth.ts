"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001/users";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let user: UserType | undefined;

  try {
    const response = await axios.get(API_URL, {
      params: {
        email,
        password,
      },
    });

    user = response.data[0];
  } catch (error) {
    console.error("LOGIN API ERROR:", error);
    throw new Error("Could not connect to the server");
  }

  if (!user) {
    throw new Error("Invalid email or password");
  }

  await setSession({
    name: user.name,
    email: user.email,
    id: user.id,
  });

  redirect("/contact");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
