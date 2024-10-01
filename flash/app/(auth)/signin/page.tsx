"use client"

import AuthForm from "@/components/AuthForm";
import AuthFormWithZod from "@/components/AuthFormWithZod";
import InputPass from "@/components/inputs/inputPass";
import Logo from "@/components/logo";
import Image from "next/image";
import React from "react";

const Signin = () => {
  return (
   <>
    <AuthFormWithZod type="sign-in"/>
   </>
  );
};

export default Signin;
