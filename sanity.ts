import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ltmeza6x",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2024-01-01",
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);
