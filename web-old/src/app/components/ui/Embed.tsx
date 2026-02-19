import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  url: string;
  autoplay?: boolean;
  placeholder?: {
    url: string;
  };
  aspectRatio?: string;
};

const Embed = ({
  url,
  autoplay = false,
  placeholder,
  aspectRatio = "16 / 9",
}: Props): JSX.Element => {
  // const [ready, setReady] = useState<Boolean>(false);
  // const [mounted, setMounted] = useState<Boolean>(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const playerConfig = {
    youtube: {
      playerVars: {
        controls: 1,
        disablekb: 1,
        enablejsapi: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        cc_load_policy: 0,
        showinfo: 0,
        rel: 0,
        origin: "https://www.agence-eker.com",
      },
      embedOptions: {
        host: "https://www.youtube-nocookie.com",
      },
    },
    vimeo: {
      title: "true",
      background: true,
      controls: autoplay ? false : true,
    },
  };
  // console.log(ready, playerConfig);
  // const isVideo = url.indexOf('yout') > 0;

  // const _onReady = (e) => {
  //   // console.log('_onReady');
  //   // setReady(true);
  // };

  // const _onPlay = (e) => {
  //   // console.log('_onPlay');
  //   setReady(true);
  // };

  const _toggle = () => {};
  // console.log(placeholder);
  // console.log({ ready });
  return (
    <div className='embed ' onClick={_toggle}>
      <div
        style={{
          aspectRatio: aspectRatio,
        }}
        className={clsx("player-container  ")}>
        <ReactPlayer
          className={"react-player"}
          url={url}
          style={{
            maxWidth: "100%",
          }}
          width='100%'
          height='100%'
          config={playerConfig}
          // onReady={_onReady}
          // onPlay={_onPlay}
        />
      </div>
    </div>
  );
};

export default Embed;
