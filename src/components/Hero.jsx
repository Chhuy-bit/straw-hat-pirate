import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const isLoading = loadedVideos === 0;

  const titleRef = useRef(null);
  const bottomButtonRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const backgroundVideoIndex = hasClicked
    ? currentIndex > 1
      ? currentIndex - 1
      : totalVideos
    : currentIndex;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", {
          visibility: "visible",
        });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power2.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true },
  );
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(10% 0, 91% 0, 100% 100%, 0% 100%)",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      borderRadius: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "lines" });
    gsap.from(titleSplit.lines, {
      yPercent: 80,
      duration: 1,
      scale: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
    });
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!bottomButtonRef.current) return;
      gsap.from(bottomButtonRef.current.children, {
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden bg-white">
      {isLoading && (
        <div className="flex-center absolute z-100 h-dvh w-screen overflow-clip bg-violet-50 text-blue-400"><div class="loader  "></div></div>
       
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64  overflow-hidden rounded-l-lg"></div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            id="next-video"
            className="absolute-center size-64 z-20 absolute object-cover object-center invisible"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(backgroundVideoIndex)}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>
      <div ref={titleRef} className="absolute left-0 top-0 z-40 size-full">
        <div className="ml-8 lg:mt-39 px-5 mt-30 sm:px-10">
          <h1 className="special-font hero-heading lg:text-8xl md:text-6xl text-5xl text-white">
            <b>Straw Hat</b> <br />
            <b>Pirates</b>
          </h1>
          <p className="mb-5 mt-3 ml-1 max-w-42 sm:max-w-56 md:max-w-[16rem] lg:max-w-64 text-[12px] sm:text-[13px] md:text-[14px] lg:text-sm font-robert-regular leading-0.5 text-black">
            An immersive experience into the world of the Straw Hat Pirates.
          </p>
          <Button
            id="Get Started"
            title="Get Started"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1 hover:bg-yellow-500/50 transition-colors duration-300 lg:text-xs text-[10px]"
          />
        </div>
      </div>
      <div
        ref={bottomButtonRef}
        className="flex flex-center gap-1 z-60 absolute bottom-5 right-5"
      >
        <Button
          onClick={handleMiniVideoClick}
          id="Next Video"
          title="Next Video"
          leftIcon={<TiLocationArrow className="rotate-45" />}
          containerClass="bg-gray-700 flex-center backdrop-blur-md bg-opacity-30 border border-gray-300/50 text-white hover:bg-gray-500/50 transition-colors duration-300 lg:text-[8px] text-[7px]"
        />
        <img
          src="https://freepngimg.com/thumb/one_piece/22969-5-one-piece-logo-photos-thumb.png"
          alt="logo"
          className="lg:w-33 w-27"
        />
      </div>
    </div>
  );
}

export default Hero;
