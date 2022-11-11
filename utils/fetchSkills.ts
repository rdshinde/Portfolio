import { Skills } from "../typings";

export const fetchSkills = async (): Promise<Skills[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const { skills } = await res.json();
//   console.log(skills);
  return skills;
};

