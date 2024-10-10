"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appWrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signUp = async (signUpInfo: { email: string; password: string; firstName: string | undefined; lastName: string | undefined; address: string | undefined; state: string | undefined; postalCode: string | undefined; dateOfBirth: string | undefined; cni: string | number | undefined; }) => {
    const {email,password, firstName,lastName} = signUpInfo
    try {
        
  const { account } = await createAdminClient();

  const newAccount = await account.create(
    ID.unique(), 
    email, 
    password,
     `${firstName} ${lastName}`
);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appWrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newAccount);

    } catch (error) {
        console.error(error)
    }
}
export const signIn = async (loginInfo: { email: string; password: string }) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  