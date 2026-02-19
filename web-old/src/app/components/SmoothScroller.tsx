"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
// import OLlPlayer from "./OLlPlayer";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: ReactNode;
};

const SmoothScroller = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const lenisWrapperRef = useRef<HTMLDivElement>(null);
  const lenisContentRef = useRef<HTMLDivElement>(null);
  // const lenisRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const wrapper: HTMLElement = lenisWrapperRef.current as HTMLElement;
    const content: HTMLElement = lenisContentRef.current as HTMLElement;
    const lenis = new Lenis({
      wrapper: wrapper,
      content: content,
      syncTouch: true,
      lerp: 0.1,
      wheelMultiplier: 0.8,
      smoothWheel: true,
      orientation: "horizontal",
      gestureOrientation: "vertical",
      // gestureOrientation: 'both',
      // smoothWheel: false,
      // smoothTouch: true,
    });

    lenis.on("scroll", (e: any) => {
      // console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  // console.log(lenisWrapperRef);
  return (
    <div
      className='smooth-scroller flex- overflow-x-scroll w-screen'
      ref={lenisWrapperRef}>
      <div className='scroller flex' ref={lenisContentRef}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScroller;
{
  /* <OLlPlayer url={videoUrl} /> */
}
