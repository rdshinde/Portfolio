import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skills } from "../typings";

const query = groq`*[_type == "skill"]`;

export const fetchSkills = async (): Promise<Skills[]> => {
  const skills: Skills[] = await sanityClient.fetch(query);
  return skills;
};

