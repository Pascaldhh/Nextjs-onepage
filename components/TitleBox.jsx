"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function TitleBox({ children, title, className }) {
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
    <div ref={boxRef} className="mb-[1px] bg-enveus-black bg-opacity-30 outline outline-1 outline-[rgb(var(--clr-primary),_.5)] focus:outline-offset-0 focus:outline-1 p-4">
      <h4 className="relative inline-block text-sm after:-bottom-0.5 after:left-0 uppercase font-bold after:absolute after:bg-enveus-primary after:w-full after:h-1">{title}</h4>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}
