import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimationTitle from "./AnimationTitle";

function Bounty() {
  const scrollRef2 = useRef(null);

  const posterSrc2 = [
    "/images/chopper-b.jpg",
    "/images/robin-b.jpg",
    "/images/franky-b.jpg",
    "/images/brook-b.jpg",
    "/images/jinbei-b.jpg",
  ];
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);
  const tweenRef2 = useRef(null);
  const posterSrc = [
    "/images/luffy-b.jpg",
    "/images/zoro-b.jpg",
    "/images/nami-b.jpg",
    "/images/ussop-b.jpg",
    "/images/sanji-b.jpg",
  ];

  useGSAP(
    () => {
      tweenRef.current = gsap.to(scrollRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
    },
    { scope: scrollRef },
  );
  useGSAP(
    () => {
      gsap.set(scrollRef2.current, { xPercent: -50 });
      tweenRef2.current = gsap.to(scrollRef2.current, {
        xPercent: 0,
        ease: "none",
        duration: 15,
        repeat: -1,
      });
    },
    { scope: scrollRef2 },
  );

  const handleMouseEnter = () => {
    tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current.play();
  };
  const handleMouseEnter2 = () => {
    tweenRef2.current.pause();
  };

  const handleMouseLeave2 = () => {
    tweenRef2.current.play();
  };

  return (
    <div
      id="bounty"
      className="min-h-screen bg-black px-20 w-full overflow-hidden mb-30"
    >
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full">
       
            <h1 className="hero-heading text-6xl relative top-30 z-30 text-center font-bold bg-clip-text text-transparent" style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-sea-landscape-with-water-nature_23-2151120353.jpg?semt=ais_hybrid')`,
                webkitTextStroke: "1px black",
              }}>Most Wanted Outlaws Across <br /> The Grand Line</h1>
          <img
            className="absolute lg:left-90 lg:w-120 lg:h-120 lg:top-40 md:h-90 md:left-35 md:w-100 md:top-60 top-70 z-20"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/239283ff-7706-49d0-a3f7-72dedc0aea94/d3cne9j-b9a268d3-8915-479c-a1a1-8fa518b8e977.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yMzkyODNmZi03NzA2LTQ5ZDAtYTNmNy03MmRlZGMwYWVhOTQvZDNjbmU5ai1iOWEyNjhkMy04OTE1LTQ3OWMtYTFhMS04ZmE1MThiOGU5NzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IocMe0Qbs7m-9sBlV2BnJCJAhGHHou53qlD7XnQZpQQ"
            alt="Franky"
          />
          <img
            className="w-full h-80 object-cover rounded-lg mt-30"
            src="https://img.freepik.com/free-photo/beautiful-sea-landscape-with-water-nature_23-2151120353.jpg?semt=ais_hybrid"
            alt="Sea Background"
          />
        </div>
        <div
          className="w-full overflow-hidden mt-10 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={scrollRef} className="flex w-max gap-10">
            {[...posterSrc, ...posterSrc].map((src, i) => (
              <div
                key={i}
                className="shrink-0 transition-transform duration-300 hover:scale-110 hover:z-50"
              >
                <img
                  className="w-60 h-80 rounded-md shadow-md"
                  src={src}
                  alt={`Bounty ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full overflow-hidden mt-10 cursor-pointer"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <div ref={scrollRef2} className="flex w-max gap-10">
            {[...posterSrc2, ...posterSrc2].map((src, i) => (
              <div
                key={i}
                className="shrink-0 transition-transform duration-300 hover:scale-110 hover:z-50"
              >
                <img
                  className="w-60 h-80 rounded-md shadow-md"
                  src={src}
                  alt={`Bounty ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bounty;
