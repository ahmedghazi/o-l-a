import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  image: SanityAsset | any;
  title: string | any;
};

const Figure = ({ image, title }: Props) => {
  return (
    <figure className=''>
      <Image
        src={image.asset.url}
        width={image.asset?.metadata?.dimensions.width}
        height={image.asset?.metadata?.dimensions.height}
        alt={title || "alt"}
        sizes='100vw'
        style={{
          width: "auto",
          height: "100vh",
        }}
        blurDataURL={image.asset?.metadata?.lqip}
        placeholder='blur'
        unoptimized
      />
    </figure>
  );
};

export default Figure;
