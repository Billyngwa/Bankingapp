import AuthForm from "@/components/AuthForm";
import Logo from "@/components/logo";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  return (
    <section className="w-[80%] ml-[10%] mt-[5%] flex justify-between items-center">
    <div className="w-[40%] ml-[5%]">
      <Logo />
      <h1 className="text-xl mt-6 font-semibold mb-2">Sign up</h1>
      <p className="text mb-2">Please enter your details</p>
      <AuthForm type="sign-up" />
    </div>
    <div className="right w-[40%] ml-[5%]">
      <Image
        src="icons/auth-image.svg"
        width={600}
        height={460}
        alt="aut image"
      />
    </div>
  </section>
  );
};

export default SignUp;
