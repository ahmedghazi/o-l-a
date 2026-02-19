import { urlFor } from "@/app/utils/sanity-utils";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  image: SanityAsset | any;
  title: string | any;
};

const shimmer = (w: number, h: number, href: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id='blur'>
  <feMorphology in='SourceGraphic' operator='dilate' radius='10'>
    <animate
      attributeName='radius'
      from='10'
      to='0'
      dur='5s'
      repeatCount='indefinite'
    />
  </feMorphology>
  <image xlink:href="${href}" x="0" y="0" width="100%" height="100%" filter="url(#blur)" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Figure = ({ image, title }: Props) => {
  const width = 2000;
  const height = 2000 / image.asset?.metadata?.dimensions.aspectRatio;
  return (
    <figure className=''>
      <Image
        src={urlFor(image.asset, width)}
        width={width}
        height={height}
        alt={title || "alt"}
        sizes='100vw'
        style={{
          width: "auto",
          height: "100vh",
        }}
        // blurDataURL={image.asset?.metadata?.lqip}
        // placeholder='blur'
        placeholder={`data:image/svg+xml;base64,${toBase64(
          shimmer(700, 475, image.asset?.metadata?.lqip)
        )}`}
        unoptimized
      />
      {/* <svg
        width='900'
        height='900'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        <filter id='blur'>
          <feMorphology in='SourceGraphic' operator='dilate' radius='10'>
            <animate
              attributeName='radius'
              from='10'
              to='0'
              dur='5s'
              repeatCount='indefinite'
            />
          </feMorphology>
          <feTurbulence
            in='SourceGRaphic'
            baseFrequency='0.01 0.02'
            numOctaves='1'
            result='NOISE'></feTurbulence>
        </filter>
        <image
          xlinkHref={image.asset.url}
          x='0'
          y='0'
          width='100%'
          height='100%'
          filter='url(#blur)'
        />
      </svg> */}
    </figure>
  );
};

export default Figure;
