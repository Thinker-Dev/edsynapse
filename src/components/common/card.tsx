import { roboto_mono } from "@/app/fonts";
import { Layers3 } from "lucide-react";
import React, { ReactNode } from "react";

interface Props {
  data: Card[];
  iconMap?: { [key: string]: ReactNode };
}

const ThinkerCard = ({ data, iconMap }: Props) => {
  return (
    <div className="grid grid-cols-3 text-justify gap-6 backdrop-blur-sm">
      {data.map((card, index) => (
        <div className="border rounded-lg p-5 relative" key={index}>
          <div className="dashed-lines-cards rounded-lg" />
          {iconMap ? (
            iconMap[card.title] && <div>{iconMap[card.title]}</div>
          ) : (
            <Layers3 color="#817FE1" />
          )}
          <div className="space-y-4 mt-4">
            <h1
              className={`font-semibold font text-xl ${roboto_mono.className}`}
            >
              {card.title}
            </h1>
            <p className={`font-normal text-neutral-300 text-left`}>
              {card.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThinkerCard;
