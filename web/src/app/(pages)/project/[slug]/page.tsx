import website from "@/app/config/website";
import { Project } from "@/app/types/schema";
import { getProject, projectQuery } from "@/app/utils/sanity-queries";
import { Metadata } from "next";
import React from "react";
import { draftMode } from "next/headers";
import { getClient } from "@/app/utils/sanity-client";
import PreJson from "@/app/components/ui/PreJson";
import SmoothScroller from "@/app/components/SmoothScroller";
import Figure from "@/app/components/ui/Figure";
import { PortableText } from "@portabletext/react";
import components from "@/app/utils/portableTextComponents";
import LivePeerPlayer from "@/app/components/ui/LivePeerPlayer";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getProject(params.slug);
  return {
    title: data?.seo?.metaTitle || data.title,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const { isEnabled: preview } = draftMode();
  let data: Project;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      projectQuery,
      params
    );
  } else {
    data = (await getProject(params.slug)) as Project;
  }

  if (!data) return <div>please edit page</div>;
  // console.log(data);
  return (
    <div className='template--project '>
      {/* <PreJson input={data} /> */}
      {/* <div>{data.playbackId}</div> */}
      <SmoothScroller>
        {data.playbackId && (
          <div className='item shrink-0'>
            <LivePeerPlayer
              playbackId={data.playbackId}
              poster={data.coverImage?.asset.url}
            />
          </div>
        )}
        {data.coverImage && (
          <div className='item shrink-0'>
            <Figure image={data.coverImage} title={data.title} />
          </div>
        )}
      </SmoothScroller>
      <div className='footer fixed bottom-0 left-0 p-md'>
        <h1>{data.title}</h1>
        {data.body && (
          <PortableText value={data.body} components={components} />
        )}
      </div>
    </div>
  );
};

export default Page;
