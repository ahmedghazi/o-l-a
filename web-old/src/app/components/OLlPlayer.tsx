import React, { useEffect, useRef, useState } from "react";
import VideoPlayer from "./ui/VideoPlayer";
import { publish, subscribe, unsubscribe } from "pubsub-js";
import styled from "styled-components";

type Props = {
  url: string;
};

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  .progress {
    position: absolute;
    top: 0;
    right: 0;
    transform-origin: left top;
    width: 10px;
    height: 100%;
    background: red;
  }
`;

const OLlPlayer = ({ url }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [domLoaded, setDomLoaded] = useState(false);
  const [perc, setPerc] = useState<number>(0);

  useEffect(() => {
    setDomLoaded(true);

    const scroller = ref.current;
    // console.log(scroller)
    if (scroller) scroller.addEventListener("wheel", _onWheel);

    const tokenReady = subscribe("VIDEO_READY", (e, d) => {
      // setDuration(d.duration);
    });

    return () => {
      unsubscribe(tokenReady);
      if (scroller) scroller.removeEventListener("wheel", _onWheel);
    };
  }, [perc]);

  const _onWheel = (e: WheelEvent) => {
    // console.log(pe);
    const containerSize: number = window.innerHeight * 2;
    const nextPerc: number = perc + (e.deltaY * 1) / containerSize;
    console.log(perc, nextPerc);
    if (nextPerc >= 0 && nextPerc <= 1) setPerc(nextPerc);
    // setPerc(nextPerc);
  };

  useEffect(() => {
    // if (seek >= duration) {
    //   console.log("next proj");
    //   const scroller = ref.current;
    //   if (scroller) scroller.removeEventListener("wheel", _onWheel);
    // }
  }, [perc]);
  // console.log(seek);

  return (
    <Container
      className='oll-player'
      ref={ref as React.RefObject<HTMLDivElement>}>
      {domLoaded && <VideoPlayer input={url} seek={perc} />}
      <div
        className='progress'
        style={{
          transform: `scaleY(${perc})`,
        }}>
        {/* {perc} */}
      </div>
    </Container>
  );
};

export default OLlPlayer;
