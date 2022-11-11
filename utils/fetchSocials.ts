import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const  {socials}  = await res.json();
  //   console.log(socials);
  return socials;
};
