"use client";

import { useLayoutEffect, useRef } from "react";
import { CardType } from "./Types"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function ImageCard({ href = "#", src, alt, title, subtitle, category, type }) {
  const imgContRef = useRef();

  const bigStyles = {
    maxWidth: "max-w-[300px]",
    gap: "gap-3 sm:gap-6 p-4 sm:p-8 ",
    h3: "text-xl sm:text-xl md:text-3xl",
    h4: "text-sm sm:text-md",
    btn: "py-1 px-2 text-sm md:px-6",
    opacity: "border-opacity-100"
  };

  const smallStyles = {
    maxWidth: "max-w-[300px]",
    gap: "gap-3 sm:gap-6 p-4 sm:p-8",
    h3: "text-xl sm:text-2xl",
    h4: "text-sm sm:text-md",
    btn: "py-1 px-2 text-sm",
    opacity: "border-opacity-50"
  }
  const styles = type === CardType.Big ? bigStyles : (type === CardType.Small ? smallStyles : smallStyles);

  useLayoutEffect(() => {
    const imgCont = imgContRef.current;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(imgCont, {x: -100, autoAlpha: 0, force3D: true, rotation:0.01 });
      
      // scrollTrigger: { trigger: imgCont, start: "top bottom-=50", toggleActions: "play none none reverse" }
      gsap.to(imgCont, { x: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });
    }, imgContRef);

    return () => ctx.revert();
  }, []);


  return (
    <a ref={imgContRef} href={href} className="relative group block">
      <div className={"overflow-hidden relative z-0 border border-solid group-hover:border-opacity-100 transition-all border-enveus-primary before:absolute before:inset-0 before:z-10 group-hover:before:bg-opacity-0 before:transition-all before:bg-black before:bg-opacity-50 " + styles.opacity}>
        <img src={src} alt={alt} className="aspect-video group-hover:scale-110 transition-transform"/>
      </div>
      <div className={"flex flex-col items-start absolute bottom-0 left-0 " + styles.gap}>
        <div className={"font-bold " + styles.maxWidth}>
          <h3 className={"uppercase " + styles.h3}>{title}</h3>
          <h4 className={styles.h4}>{subtitle}</h4>
        </div>
        <p className={"btn-primary " + styles.btn}>{category}</p>
      </div>
    </a>
  )
}
