"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./inputs/CustomInput";
import { formSchema } from "@/lib/utils";
import { Circle, LucideLoaderCircle } from "lucide-react";
import Link from "next/link";
import { signIn, signUp } from "@/lib/Actions/user.actions";
import { useRouter } from "next/navigation";


 

const AuthFormWithZod = ({ type }: { type: string }) => {
  const [user, setuser] = useState<null | undefined | object>(null);
  const [isloading, setIsloading] = useState<boolean>(false);
  const validationSchema = formSchema(type)
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    // defaultValues:{
    //   firstName:"",
    //   lastName:"",
    //   email:"",
    //   password:"",
    //   cni:"",
    //   address:"",
    //   state:""
    // }
  });

  // 2. Define a submit handler.
   async function submitHandler(values:z.infer<typeof validationSchema>) {
    
      if(type==="sign-in"){

        setIsloading(true);
        const loginInfo = {
          email:values.email,
          password:values.password
        }
        const identifiedUser = await signIn(loginInfo)
        if(identifiedUser) router.push("/")

      }


      if(type==="sign-up"){
        setIsloading(true);
        const signUpInfo = {
          email: values.email,
          password:values.password,
          firstName:values.firstName,
        lastName:values.lastName,
        address:values.address,
        state:values.state,
        postalCode:values.postalCode,
        dateOfBirth:values.dateOfBirth,
        cni:values.cni
        }
          const registeredUser = await signUp(signUpInfo)
          setuser(registeredUser)
        console.log(signUpInfo);
      }
  }
 const isValid = form.formState.isValid
 console.log(isValid);
 

  return (
    <section className="w-[80%] ml-[10%] mt-[5%] flex justify-between items-center">
      <div className="w-[40%] ml-[5%]">
        <Logo />

        <h1 className="text-xl mt-6 font-semibold mb-2">
          {user ? "Link account" : type === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>

        <p className="text mb-2">
          {user ? "Link Account" : "Please enter your details"}
        </p>
        <div>
          {user ? (
            <>include plaid link here</>
          ) : (
            <>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submitHandler)}
                  className="space-y-8"
                >
                  {
                    type==="sign-up" && 
                    <>
                       <CustomInput
                    name="firstName"
                    label="firstName"
                    placeholder="Enter First Name"
                    control={form.control}
                  />
                   <CustomInput
                    name="lastName"
                    label="lastName"
                    placeholder="ex:Doe"
                    control={form.control}
                  />
                   <CustomInput
                    name="address"
                    label="Address"
                    placeholder="Enter your specific address"
                    control={form.control}
                  />
                   <CustomInput
                    name="state"
                    label="state"
                    placeholder="ex:YDE"
                    control={form.control}
                  />
                   <CustomInput
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Ex:11003"
                    control={form.control}
                  />
                   <CustomInput
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeholder="yyyy-mm-dd"
                    control={form.control}
                  />
                   <CustomInput
                    name="cni"
                    label="CNI"
                    placeholder="ex:112367860"
                    control={form.control}
                  />
                    </>
                  }
                  <CustomInput
                    name="email"
                    label="email"
                    placeholder="Enter email"
                    control={form.control}
                  />
                   <CustomInput
                    name="password"
                    label="password"
                    placeholder="Enter password "
                    control={form.control}
                  />
                  <Button disabled={isloading===true || isValid===false} className="bg-blue-600 text-white text-xl" type="submit">
                    {isloading === true ? 
                      <span className="flex gap-4 items-center">
                        <LucideLoaderCircle className="animate-spin"/>
                        Loading...
                      </span> 

                      :
                      <>
                        {
                          type==="sign-in"?"Sign In":"Sign Up"
                        }
                      </>
                  }
                  </Button>
                  <div className="local">
                   {
                    type === "sign-in"? <p>
                    <Link href={"/signup"}>Sign Up</Link>
                  </p>: <p>
                      <Link href={"/signin"}>Sign In</Link>
                    </p>
                   }
                  </div>
                </form>
              </Form>
            </>
          )}
        </div>
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

export default AuthFormWithZod;
