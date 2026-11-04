import { sanityClient } from "~/lib/sanity";
import {
  SETTINGS_QUERY,
  HOME_QUERY,
  PROJECT_QUERY,
  INFOS_QUERY,
} from "~/lib/queries";

export function useSanitySettings() {
  return useAsyncData("settings", () => sanityClient.fetch(SETTINGS_QUERY));
}

export function useSanityHome() {
  return useAsyncData("home", () => sanityClient.fetch(HOME_QUERY));
}

export function useSanityProject(slug: string) {
  return useAsyncData(`project-${slug}`, () =>
    sanityClient.fetch(PROJECT_QUERY, { slug }),
  );
}

export function useSanityInfos() {
  return useAsyncData("infos", () => sanityClient.fetch(INFOS_QUERY));
}
