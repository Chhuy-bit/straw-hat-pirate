import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef();
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.from("#title", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from("#para1", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
   
    gsap.from("#para2", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#about",
        start: "top 20%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  const mainTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip",
    start: "center center",
    end: "+=1500 center",
    scrub: 0.5,
    pin: true,
  },
});
useGSAP(
  () => {
    const video = videoRef.current;
    if (!video) return;

    const setupTimeline = () => {
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=1500 center",
          scrub: 0.5,
          pin: true,
        },
      });
      mainTl.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 1,
      });
      mainTl.to(video, {
        currentTime: video.duration || 0,
        ease: "none",
        duration: 2,
      });
      mainTl.from(
        "#para3",
        {
          y: 100,
          opacity: 0,
        },
        "-=1.5"
      );

      mainTl.from(
        "#para4",
        {
          y: 100,
          opacity: 0,
        },
        "-=1.2"
      );
    };

    if (video.readyState >= 1) {
      setupTimeline();
    } else {
      video.onloadedmetadata = setupTimeline;
    }
  },
  { dependencies: [isMobile], scope: containerRef }
);

  return (
    <div
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-screen overflow-x-hidden bg-white"
    >
      <div className="relative mb-8 mt-15 flex flex-col items-center gap-5 px-10">
        <h2
          id="title"
          className="font-general lg:text-sm uppercase md:text-[10px] text-[8px]"
        >
          Welcome to Straw Hat Pirates
        </h2>
        <h3 id="para1" className="font-circular-web lg:text-6xl md:text-4xl text-2xl text-center">
          Unbreakable bonds, one ultimate <br /> dream: The One Piece.
        </h3>
        <div id="para2" className="about-subtext ">
          <p>
            United by fate, the Straw Hat crew defies the seas to turn
            impossible dreams into reality. From humble beginnings to <br />
            global legends, their journey is a testament to true freedom.
          </p>
        </div>
      </div>
      <div className="relative h-screen w-screen" id="clip">
        <div className="mask-clip-path about-image mx-auto lg:mb-10 md:mb-10 mb-5 overflow-hidden bg-blue-500">
          <video id='video'
            ref={videoRef}
            src="./videos/about.mp4"
            className="absolute left-0 top-0 size-full object-cover"
            muted
            playsInline
            preload="auto"
          />
          <div id = 'para3' className="absolute lg:top-10 lg:left-10 lg:w-90 lg:text-2xl  md:w-60 md:text-[16px] md:top-10 md:left-7 top-10 w-40 text-[12px] left-8   bg-gray-300/30 px-5 py-4 rounded-2xl backdrop-blur-sm">
            <h1>
              More than just a pirate crew, they are a family that has defied
              the World Government and stood against monsters alike. Their
              loyalty is their greatest strength, proved as they risk everything
              to protect a comrade in need, regardless of the consequences.
            </h1>
          </div>
          <div id = 'para4' className="absolute lg:top-25 lg:right-10 lg:w-90 lg:text-2xl md:w-60 md:text-[16px] md:top-25 md:right-7 top-25 w-40 text-[12px] right-8 bg-gray-300/30 px-5 py-4 rounded-2xl backdrop-blur-sm">
            <h1>
              As they sail the Thousand Sunny towards Laugh Tale, the crew
              continues to shake the foundations of the world. They represent
              the ultimate pursuit of freedom, leaving a trail of liberated
              nations as they search for the legendary One Piece.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
