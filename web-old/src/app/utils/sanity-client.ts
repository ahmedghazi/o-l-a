import { createClient } from "next-sanity";
import type { SanityClient } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "./env";
import { cache } from "react";
import { Documents } from "../types/schema";

export const sanityConfig = {
  projectId: projectId,
  dataset: dataset,
};
export const client = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion,
  useCdn,
  perspective: "published",
});

// export default createClient<Documents>({
//   // Note: these are useful to pull from environment variables
//   // (required) your sanity project id
//   projectId,
//   dataset,
//   // (required) the fetch implementation to use
//   // fetch: window.fetch,
//   //
//   // (optional) if true, the client will prefer drafts over the published versions
//   previewMode: true,
//   // (optional) only required if your dataset is private or if you want to use preview mode
//   token: "...",
//   // by default sanity-codegen caches responses in memory. this can be disabled if desired
//   // disabledCache: true,
// });

// export function getClient({
//   preview,
// }: {
//   preview?: { token: string }
// }): SanityClient {

// const token = process.env.SANITY_API_READ_TOKEN
// const preview =
//   process.env.SANITY_API_PREVIEW_DRAFTS === 'true' ? { token } : undefined
// const client = getClient({ preview })

/*
{
  preview: {
    token: xxxxxx
  }
}
*/
export function getClient(preview?: { token?: string }): SanityClient {
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

export const getCachedClient = (preview?: { token?: string }) => {
  const client = getClient(preview);

  return cache(client.fetch.bind(client));
};
