"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MainMenu({ className, classNamesLink, classNamesNormal, classNamesBtn, navRef, routes, animationLeft }) {
  const pathname = usePathname();
  const listItemRef = useRef([]);
  const wrapRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      const items = listItemRef.current;
      if(animationLeft) items.reverse();
      
      const tl = gsap.timeline();
      listItemRef.current.forEach((item, i) => {
        gsap.set(item, {y: -100, autoAlpha: 0, force3D: true, rotation:0.01 });
        tl.to(item, {y: 0, autoAlpha: 1, ease: 'expo', duration: 1.5, stagger: -.2}, i === 0 ? "+=1" : "-=1");
      });

    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <ul ref={wrapRef} className={className}>
      {Object.entries(routes).map(([href, value], i) => {
        const isActive = pathname === href || pathname === `${href}/`;
        return (
        <li key={uuidv4()}>
          <Link ref={el => listItemRef.current[i] = el} onClick={() => navRef.current.classList.remove("active")} href={href} className={"inline-block " + classNamesLink + (isActive ? " active " : " ") + (value.isBtn ? classNamesBtn : classNamesNormal)}>{value.name}</Link>
        </li>
      )})}
    </ul>
  )
}
