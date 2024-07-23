import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <section className="flex gap-4">
      <Image src={"/icons/logo.svg"} alt="Flash" width={34} height={34} />
      <h1 className="sidebar-logo">Flash</h1>
    </section>
  );
};

export default Logo;
