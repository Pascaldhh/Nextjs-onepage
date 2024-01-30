"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5"

export default function SearchBar() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    const box = boxRef.current;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(box, {x: 100, autoAlpha: 0, force3D: true, rotation:0.01 });
      
      // scrollTrigger: { trigger: box, start: "top bottom-=50", toggleActions: "play none none reverse" }
      gsap.to(box, { x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
    }, boxRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={boxRef} className="relative flex justify-between">
      <input placeholder="Search" className="peer placeholder:uppercase placeholder:text-opacity-50 placeholder:text-white text-[10px] font-bold w-full py-2 px-4 bg-enveus-black bg-opacity-30 outline outline-1 outline-[rgb(var(--clr-primary),_.5)] focus:outline-offset-0 focus:outline-1"/>
      <IoSearch size={20} className="peer-focus:text-opacity-100 text-enveus-primary text-opacity-50 absolute right-3 top-1/2 -translate-y-1/2"/>
    </div>
  )
}
