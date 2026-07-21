import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token, useCdn } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
