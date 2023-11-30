import { publish } from "pubsub-js";
import React from "react";
import { useRef } from "react";
// import { useEffect } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { useDebouncedEffect } from "../../hooks/useDebouncedEffect";

const Container = styled.div`
  video,
  iframe {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    pointer-events: none;
  }
`;

const VideoPlayer = ({ input, seek }) => {
  const player = useRef();

  const config = {
    file: {
      attributes: {
        preload: "auto",
      },
    },
  };

  useDebouncedEffect(
    () => {
      // console.log(seek);
      player.current.seekTo(seek, "fraction");
      player.current.playing = true;
    },
    [seek],
    2
  );

  const _onReady = (e) => {
    // console.log("_onReady", e);
    // const duration = player.current.getDuration();
    publish("VIDEO_READY");
  };
  // const _onEnded = () => {
  //   publish("VIDEO_ENDED")
  // }

  return (
    <Container className='video-player h-full'>
      <ReactPlayer
        className={`player w-full h-full object-cover `}
        url={input}
        ref={player}
        playing={false}
        // loop={true}
        muted={true}
        playsinline={true}
        config={config}
        width='100%'
        height='100%'
        style={{
          objectFit: "cover",
        }}
        // onDuration={_onDuration}
        onReady={_onReady}
        // onEnded={_onEnded}
      />
    </Container>
  );
};

export default VideoPlayer;
