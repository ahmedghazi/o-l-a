import Image from "next/image";
import SmoothScroller from "./components/SmoothScroller";
import { getHome, getSettings, homeQuery } from "./utils/sanity-queries";
import { client, getClient } from "./utils/sanity-client";
import { Home, Project } from "./types/schema";
import website from "./config/website";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import PreJson from "./components/ui/PreJson";
import ProjectCard from "./components/ProjectCard";
// import LivePeerPlayer from "./components/ui/LivePeerPlayer";

export const revalidate = 3600; // revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHome();
  const settings = await getSettings();

  //data?.seo?.metaImage.asset.url ||
  return {
    metadataBase: new URL(website.url),
    title: data?.seo?.metaTitle || settings.siteName,
    description: data?.seo?.metaDescription || "",
    openGraph: {
      images: [data.seo?.metaImage?.asset.url || ""],
    },
  };
}

export default async function Home() {
  // const settings = await getSettings();
  // const settings = await client.getAll()

  const { isEnabled: preview } = draftMode();
  let data: Home;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      homeQuery,
      {}
    );
  } else {
    data = await getHome();
  }

  return (
    <div className='home-page'>
      <SmoothScroller>
        {data.featuredProjects &&
          data.featuredProjects?.length > 0 &&
          data.featuredProjects.map((item: Project, i: number) => (
            <ProjectCard input={item} key={i} />
          ))}
      </SmoothScroller>
      {/* <Project videoUrl='https://www.w3schools.com/html/mov_bbb.mp4' /> */}
    </div>
  );
}
