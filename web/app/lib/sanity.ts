import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { ImageUrlBuilderOptions } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "na80rqjb",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  perspective: "published",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: ImageUrlBuilderOptions) {
  return builder.image(source);
}
