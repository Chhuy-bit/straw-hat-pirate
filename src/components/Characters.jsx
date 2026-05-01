import React from "react";
import CharatersCard from "./CharatersCard";
import CharacterTile from "./CharactersTile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Characters() {

  return (
    <div
      id="characters"
      className="min-h-screen  w-screen overflow-hidden bg-black pb-40 px-20"
    >
      <div className="relative h-full w-full">
        <div id = "title2" className="absolute top-35 font-circular-web text-blue-50 space-y-1">
          <p className="font-circular-web text-lg text-blue-50">
            Info the Charaters
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            The Legendary Warriors of the Great Sea.
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Clicked card to read the story of charaters
          </p>
        </div>
      </div>
      <div className="mt-90">
        <div className="flex flex-col gap-8">
          <div id = 'luffyAnimate'>
            <CharacterTile>
              <CharatersCard
              character={{
                id: 1,
                name: "Luffy",
                video: "videos/info-1.mp4",
              }}
              containerClass="h-100"
            />
            </CharacterTile>
            
          </div>
          <div className="flex flex-wrap gap-7">
            <div>
              <CharacterTile><CharatersCard
              character={{
                id: 2,
                name: "zoro",
                video: "videos/info-2.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
              
            </div>
            <div>
              <CharacterTile><CharatersCard
              character={{
                id: 3,
                name: "nami",
                video: "videos/info-3.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
            <div>
              <CharacterTile><CharatersCard
              character={{
                id: 4,
                name: "Ussop",
                video: "videos/info-4.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
            <div>
             <CharacterTile><CharatersCard
              character={{
                id: 5,
                name: "sanji",
                video: "videos/info-5.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
          </div>
          <div className="flex flex-wrap gap-7">
            <div>
              <CharacterTile><CharatersCard
              character={{
                id: 6,
                name: "chhoper",
                video: "videos/info-6.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
            <div>
             <CharacterTile><CharatersCard
              character={{
                id: 7,
                name: "robin",
                video: "videos/info-7.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
            <div>
              <CharacterTile><CharatersCard
              character={{
                id: 8,
                name: "franky",
                video: "videos/info-8.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
            <div>
              <CharacterTile><CharatersCard
              character={{
                id: 9,
                name: "brook",
                video: "videos/info-9.mp4",
              }}
              containerClass="h-100 !w-70"
            /></CharacterTile>
            </div>
          </div>
          <div>
            <CharacterTile><CharatersCard
              character={{
                id: 10,
                name: "jinbei",
                video: "videos/info-10.mp4",
              }}
              containerClass="h-100 "
            /></CharacterTile>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characters;
