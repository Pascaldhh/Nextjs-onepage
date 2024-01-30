"use client";
import Menu from "@components/layout/Menu"

import { useLayoutEffect, useRef } from "react";
import Link from 'next/link'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar() {
  const navRef = useRef();
  const logoRef = useRef();

  const birdLogoRef = useRef();
  const enveusLogoRef = useRef();

  useLayoutEffect(() => {
    const logo = logoRef.current;
    const birdLogo = birdLogoRef.current;
    const enveusLogo = enveusLogoRef.current;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(logo, {y: -100, autoAlpha: 0, force3D: true, rotation:0.01 });
      gsap.to(logo, {y: 0, autoAlpha: 1, ease: 'expo', duration: 2});

      gsap.set(enveusLogo, {x: -50, autoAlpha: 0, force3D: true, rotation:0.01});
      gsap.to(enveusLogo, {x: 0, autoAlpha: 1, ease: 'expo', duration: 2, delay: 2.5});

      gsap.set(birdLogo, {x: 50, autoAlpha: 0, force3D: true, rotation:0.01});
      gsap.to(birdLogo, {x: 0, autoAlpha: 1, ease: 'expo', duration: 2, delay: 2.5});

    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed z-50 w-full top-0 h-24 flex items-center bg-black bg-opacity-80 [&.active]:bg-enveus-black [&.active]:transition-none md:[&.active]:bg-opacity-90 py-4 border-gray-200 transition-colors group">
      <div className="container flex flex-wrap items-center justify-between">
        <Link ref={enveusLogoRef} href="/" className="hidden lg:flex items-center opacity-0">
          <img src="/assets/img/website-logo-1.svg" className="h-20 transition-all" alt="Enveus logo" />
        </Link>
        <div className="flex lg:gap-8 flex-1">
          <div className="order-1 lg:order-0 hidden w-full md:ml-0 lg:ml-[10px] xl:ml-0 md:flex lg:w-auto group-[.active]:flex lg:flex-1 justify-end md:group-[.active]:bg-transparent md:group-[.active]:justify-end group-[.active]:justify-center group-[.active]:bg-enveus-black group-[.active]:absolute group-[.active]:z-10 md:group-[.active]:static group-[.active]:left-0 group-[.active]:top-full group-[.active]:w-full">
            <Menu
              routes={{
                "/": { name: "Home" },
                "/guides": { name: "Guides" },
                "/recipes": { name: "Recipes" }
              }}
              className="font-menu flex md:py-2 gap-7 sm:mr-0 md:mr-6 lg:mr-0 items-center md:group-[.active]:flex-row group-[.active]:flex-col" 
              classNamesLink="relative uppercase opacity-0"
              classNamesNormal="font-bold text-[12px] relative hover:text-enveus-primary transition-colors before:absolute before:w-20 before:h-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 z-10 before:rounded-full before:blur-xl hover:before:bg-opacity-40 before:bg-transparant hover:before:bg-enveus-primary before:transition-colors"
              navRef={navRef}
              animationLeft
            />
          </div>
          <Link ref={logoRef} href="/" className="opacity-0 relative order-0 lg:order-1 text-left lg:text-center uppercase font-enveus text-2xl block md:w-full lg:w-auto hover:text-enveus-primary transition-colors before:absolute before:w-20 before:h-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 z-10 before:rounded-full before:blur-xl hover:before:bg-opacity-40 before:bg-transparant hover:before:bg-enveus-primary before:transition-colors">Enveus <span className="lg:text-lg -my-2 lg:block">of</span><br className="lg:hidden"/>Creation</Link>
          <div className="order-2 hidden w-full py-8 md:py-0 md:flex lg:w-auto top-[230%] md:top-0 group-[.active]:flex flex-1 justify-end lg:justify-start md:group-[.active]:bg-transparent md:group-[.active]:justify-start group-[.active]:justify-center group-[.active]:bg-enveus-black group-[.active]:absolute group-[.active]:z-10 md:group-[.active]:static group-[.active]:left-0 group-[.active]:w-full">
            <Menu
              routes={{
                "/blog": { name: "Blog" },
                "/news": { name: "News" },
                "/search": { name: "Search" }
              }}
              className="font-menu flex md:py-2 gap-7 items-center md:group-[.active]:flex-row group-[.active]:flex-col" 
              classNamesLink="opacity-0 relative uppercase"
              classNamesNormal="font-bold text-[12px] relative hover:text-enveus-primary transition-colors before:absolute before:w-20 before:h-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 z-10 before:rounded-full before:blur-xl hover:before:bg-opacity-40 before:bg-transparant hover:before:bg-enveus-primary before:transition-colors"
              navRef={navRef}
            />
          </div>
        </div>
        <Link ref={birdLogoRef} href="/" className="opacity-0 hidden lg:flex items-center">
          <img src="/assets/img/website-logo-2.svg" className="h-16 transition-all" alt="Enveus logo" />
        </Link>
        <button onClick={() => navRef.current.classList.toggle("active")} type="button" className="inline-flex items-center p-2 w-11 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <div className="w-full flex flex-col gap-1.5 group-[.active]:rotate-180 transition-all">
            <div className="w-full h-1 bg-enveus-primary"></div>
            <div className="w-9/12 h-1 bg-enveus-primary"></div>
          </div>
        </button>
      </div>
    </nav>
  )
}
