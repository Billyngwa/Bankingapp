"use client"
import AuthForm from "@/components/AuthForm";
import AuthFormWithZod from "@/components/AuthFormWithZod";
import Logo from "@/components/logo";
import { getLoggedInUser } from "@/lib/Actions/user.actions";
import Image from "next/image";
import React from "react";

const SignUp = async () => {

  
  return (
    <>
    <AuthFormWithZod type="sign-up"/>
   </>
  );
};

export default SignUp;
