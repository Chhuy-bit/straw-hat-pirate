import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useWindowScroll } from "react-use";
import { SplitText } from "gsap/all";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = ["Home", "About", "Characters", "Bounty", "Contact"];
  const navContainerRef = useRef(null);
  const { y: currentScrolled } = useWindowScroll();
  const navRef = useRef(null);
  const lastScrolledRef = useRef(0);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioElementRef = useRef(null);
  const audioBottomRef = useRef(null);

  const menuBottomRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!navRef.current) return;

    const navSplit = new SplitText(navRef.current, { type: "lines" });
    gsap.from(navSplit.lines, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    return () => navSplit.revert();
  }, []);
  useEffect(() => {
    if (!navContainerRef.current) return;

    const isNavbarShowUp =
      currentScrolled === 0 || currentScrolled < lastScrolledRef.current;

    if (currentScrolled === 0) {
      navContainerRef.current.classList.remove("floating-nav");
    } else if (isNavbarShowUp) {
      navContainerRef.current.classList.add("floating-nav");
    } else {
      navContainerRef.current.classList.remove("floating-nav");
    }

    gsap.to(navContainerRef.current, {
      y: isNavbarShowUp ? 0 : -100,
      opacity: isNavbarShowUp ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });

    lastScrolledRef.current = currentScrolled;
  }, [currentScrolled]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!audioBottomRef.current) return;

      gsap.from(audioBottomRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!menuBottomRef.current) return;

      gsap.from(menuBottomRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.play().catch(() => {
        setIsAudioPlaying(false);
      });
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);
  useEffect(() => {
    if (isMenuOpen) {
      gsap.from(".nav-hover-btn", {
        x: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 z-70 h-15 border-none mx-9"
    >
      <header
        ref={navRef}
        className={`absolute w-full top-1/2 transform -translate-y-1/2 rounded-4xl py-3 px-6 ${currentScrolled > 0 ? "bg-gray-500 " : ""} transition-all duration-300 ease-in-out rounded-4xl`}
      >
        <nav className="flex items-center justify-between me-12  ">
          <div className="flex ">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/03/Straw-Hat-Logo.png"
              alt="Logo"
              className="lg:w-17 w-10   "
            />
            <h1 className="  lg:text-2xl text-[17px] hero-heading  ml-2  mt-1 text-white ">
              Chhuyyy
            </h1>
          </div>

          <div className="flex items-center h-full">
            <div className="hidden lg:flex md:flex">
              {navItems.map((item) => (
               <div key={item}>
                <Link
                  to={`/#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </Link>
              </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <div className="absolute -translate-y-1/2 lg:right-7 md:right-7 right-16 top-1/2">
        <audio
          ref={audioElementRef}
          src="audio/loop.mp3"
          className="hidden"
          loop
        />
        <button
          ref={audioBottomRef}
          className="  flex cursor-pointer ml-10 items-center space-x-0.5 "
          onClick={toggleAudioIndicator}
        >
          {[1, 2, 3, 4, 5, 6].map((bar) => (
            <div
              key={bar}
              className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
              style={{ animationDelay: `${bar * 0.1}s` }}
            />
          ))}
        </button>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 mt-1">
        <button
          onClick={toggleMenu}
          ref={menuBottomRef}
          className="lg:hidden md:hidden cursor-pointer"
        >
          <FiAlignJustify className="text-white" />
        </button>
      </div>
      <nav
        className={`${isMenuOpen ? "right-0" : "-right-full"} absolute top-0 rounded-2xl mt-15 z-99 flex h-60 w-40 flex-col gap-6 bg-gray-400 px-6 py-8 transition-all duration-700 ease-in-out lg:hidden md:hidden`}
      >
        <div className="flex flex-col gap-5 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase text-white  nav-hover-btn "
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
