import Image from "next/image";
import React from "react";
import AboutSVG from "../icons/about";
import ThinkerCard from "../common/card";
import { about } from "@/lib/constants";

const About = () => {
  return (
    <section className="relative flex pt-20 items-center flex-col">
      <Image
        src={"/plant.png"}
        alt="hero-img"
        width={500}
        height={500}
        className="absolute left-0"
      />
      <div className="pt-20">
        <AboutSVG />
      </div>
      <div className="px-28">
        <ThinkerCard data={about} />
      </div>
    </section>
  );
};

export default About;
