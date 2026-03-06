import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Experience } from "../typings";

const query = groq`*[_type == "experience"]{ ..., technologies[]-> }`;

export const fetchExperience = async (): Promise<Experience[]> => {
  const experience: Experience[] = await sanityClient.fetch(query);
  return experience;
};
