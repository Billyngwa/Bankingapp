"use client"
import AuthForm from "@/components/AuthForm";
import AuthFormWithZod from "@/components/AuthFormWithZod";
import Logo from "@/components/logo";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <>
    <AuthFormWithZod type="sign-up"/>
   </>
  );
};

export default SignUp;
