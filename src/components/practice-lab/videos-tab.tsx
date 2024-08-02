import { vonique } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Graph from "../icons/graph";
import Dashboard from "../icons/dashboard";
import Complete from "../icons/complete";
import Learn from "../icons/learn";
import Fire from "../icons/fire";
import Video from "../icons/video";
import { useGetRecommendations } from "@/hooks/recommendations/useGetRecommendations";

const VideosTab = () => {
  const { recommendations } = useGetRecommendations();
  return (
    <section>
      <div className="space-y-2">
        <span className={`${vonique.className} uppercase text-xl `}>
          recommendations
        </span>
        <div className="space-x-2 flex w-full">
          {recommendations.map((item, index) => (
            // 
            //   <Image src={item.img} alt="videos" width={1000} height={1000} />
            // </Link>
            <Link href={`/course?c=${item.topic.course_id}&t=${item.topic_id}&v=${item.id}`} key={index}>

              <div className="thumbnail-container">
                <img src={`https://img.youtube.com/vi/${item.url}/hqdefault.jpg`} alt={item.name} width="250" height="250" />
              </div>

            </Link>

          ))}
        </div>
      </div>
      <div className="flex items-center relative">
        <div className="absolute top-28 left-14">
          <div className="flex space-x-12">
            <div className="flex flex-col items-center space-y-2">
              <Dashboard />
              <span className={`${vonique.className} uppercase text-sm `}>
                dashboard
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Learn />
              <span className={`${vonique.className} uppercase text-sm `}>
                learn
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Complete />
              <span className={`${vonique.className} uppercase text-sm `}>
                complete
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
              <Fire />
            </div>
          </div>
        </div>
        <Video />
        <div className="w-1/2 flex justify-center">
          <Graph />
        </div>
      </div>
    </section>
  );
};

export default VideosTab;
