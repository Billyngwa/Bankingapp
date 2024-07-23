"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthForm = ({ type }: { type: string }) => {
  return (
    <section className="flex justify-between items-center m-0">
      <div>
        {type === "sign-in" && (
          <form action="#">
            <div className="input">
              <label htmlFor="email" className="text-[16px] text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="block input-class"
              />
            </div>
            <div className="input">
              <label htmlFor="pass" className="text-[16px] text-gray-700">
                password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="block input-class "
              />
            </div>
            <div className=" mt-6 ">
              <button
                type="button"
                className="bg-blue-500 w-full border-2xl rounded p-2 text-white font-semibold text-center"
                onClick={() => {}}
              >
                Log in
              </button>
              <p className="create-account mt-4 text-center">
                Don't have an account? <Link href="signup">Sign up</Link>
              </p>
            </div>
          </form>
        )}
        {type === "sign-up" && (
          <form action="#" >
            <div className="flex items-center gap-3">
              <div className="input">
                <label htmlFor="first name" className="text-[16px] text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                   placeholder="John"
                  className="block input-class"
                />
              </div>
              <div className="input">
                <label htmlFor="first name" className="text-[16px] text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                    placeholder="ex:Doe"
                  className="block input-class"
                />
              </div>
            </div>
            <div className="input ">
              <label htmlFor="address" className="text-[16px] text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your specific address"
                className="block input-class w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="input">
                <label htmlFor="State" className="text-[16px] text-gray-700">
                  State
                </label>
                <input
                  type="text"
                   placeholder="ex:Buea"
                  className="block input-class"
                />
              </div>
              <div className="input">
                <label htmlFor="postal code" className="text-[16px] text-gray-700">
                postal code
                </label>
                <input
                  type="text"
                    placeholder="ex:8035"
                  className="block input-class"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="input">
                <label htmlFor="dob" className="text-[16px] text-gray-700">
                  Date of birth
                </label>
                <input
                  type="date"
                   placeholder="ex:Buea"
                  className="block input-class"
                />
              </div>
              <div className="input">
                <label htmlFor="id number" className="text-[16px] text-gray-700">
                    NIC/CNI
                </label>
                <input
                  type="text"
                    placeholder="ex:116792354"
                  className="block input-class"
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor="email" className="text-[16px] text-gray-700">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="block input-class  w-[100%]"
              />
            </div>
            <div className="input">
              <label htmlFor="pass" className="text-[16px] text-gray-700">
                password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="block input-class  w-full"
              />
            </div>
            <div className=" mt-6 ">
              <button
                type="button"
                className="bg-blue-500 w-full border-2xl rounded p-2 text-white font-semibold text-center"
                onClick={() => {}}
              >
                Sign Up
              </button>
              <p className="create-account mt-4 text-center">
                Already have an account? <Link href="signin">Login</Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
