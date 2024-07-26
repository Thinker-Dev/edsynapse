import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Logo from "../icons/logo";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative flex items-center space-y-12 justify-center flex-col pt-5"
    >
      <Image src={"/hero.png"} alt="hero-img" width={1000} height={1000} />
      <Logo />
    </section>
  );
};

export default Hero;
