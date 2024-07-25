import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-56px)] scroll-margin flex items-center space-y-12"
    >
      <div className="dashed-lines"></div>
      <div className="flex items-center justify-center flex-col space-y-10">
        <div className="relative z-10 space-y-5 flex items-center justify-center flex-col">
          <div className="text-6xl font-extrabold text-center w-[70%]">
            <h1 className="bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent">
              Lorem ipsum dolor, sit
            </h1>
            <h1 className="bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent">
              amet consectetur
            </h1>
          </div>
          <p className="text-paragraph w-[60%] text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cum
            voluptatibus nisi debitis voluptates sed dolore ipsa tenetur
            architecto, nulla tempore distinctio accusamus minus temporibus
            mollitia consequuntur? Quaerat, suscipit fugiat?
          </p>
          <Button
            variant={"default"}
            size={"lg"}
            onClick={() => router.push("#contact-us")}
          >
            Entre em contacto
          </Button>
        </div>
        <div className="z-10 space-y-5 flex justify-center flex-col items-center">
          {/* <span className="text-paragraph text-sm">{data?.comptitle}</span> */}
          <div className="flex">
            {/* <TooltipProvider>
              {data?.image.map((item, index) => (
                <div key={index} className="flex">
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Image
                        width={100}
                        height={100}
                        alt={item.alt}
                        className="w-10 h-10 grayscale hover:grayscale-0 duration-300 transition"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="capitalize">{item.alt}</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="mx-2" />
                </div>
              ))}
            </TooltipProvider> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
