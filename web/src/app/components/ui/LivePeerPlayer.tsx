"use client";
import React, { useEffect, useState } from "react";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { Player } from "@livepeer/react";
import PreJson from "./PreJson";

const client = createReactClient({
  provider: studioProvider({ apiKey: "5c00e23a-edd4-4c53-927c-dd25d48eff76" }),
});

type Props = {
  playbackId: string;
  poster?: string;
};

//002c1ea1-1d72-4bfc-8d7b-48deea3159b9
const LivePeerPlayer = ({ playbackId, poster }: Props) => {
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    //https://livepeer.studio/api/playback/c6e2s9frawq8j3q5
    // const videoInfo =
    const fetchData = async () => {
      const data = await fetch(
        `https://livepeer.studio/api/playback/${playbackId}`
      );
      const json = await data.json();
      setData(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <LivepeerConfig client={client}>
      <div className='w-screen h-screen'>
        {data && (
          <video
            autoPlay
            muted
            aria-label='Video player'
            role='video'
            width='100%'
            height='100%'
            style={{
              objectFit: "cover",
            }}
            webkit-playsinline='true'
            playsInline={true}
            preload='metadata'
            poster={poster}
            src={data.meta.source[0].url}>
            {data.meta.source.map((item: any, i: number) => (
              <source
                key={i}
                src={item.url}
                type={`video/${item.type.replace("html5/video", "")}`}
              />
            ))}
            <p>
              Your browser doesn't support HTML video. Here is a
              <a href='myVideo.mp4'>link to the video</a> instead.
            </p>
          </video>
        )}
      </div>
    </LivepeerConfig>
  );
};

export default LivePeerPlayer;
