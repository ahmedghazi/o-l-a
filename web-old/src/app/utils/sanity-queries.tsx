import { createClient, groq } from "next-sanity";
// import { Project } from "../types/Project";
// import { Home } from "../types/Home";
import { Settings, Home, Project } from "../types/schema";
import { projectCard } from "./fragments";
import { client } from "./sanity-client";

export async function getSettings(): Promise<Settings> {
  return client.fetch(groq`*[_type == "settings" ][0]{
    ..., font{asset->}, navPrimary[]{..., link->}
  }`);
}

export const homeQuery = groq`*[_type == "home"][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },

  featuredProjects[]->{
    ${projectCard}
  }
}`;
export async function getHome(): Promise<Home> {
  return client.fetch(homeQuery);
}

export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ...,
    metaImage{
      ...,
      asset->
    }
  },
  title,
  year,
  body,
  coverImage{
    ...,
    asset->
  },
  playbackId,
  media[]{
    ...,
    asset->
  }
}`;
export async function getProject(slug: string): Promise<Project> {
  return client.fetch(projectQuery, { slug: slug });
}
