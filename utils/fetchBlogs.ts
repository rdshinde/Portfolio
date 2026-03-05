import { BlogPost } from "../typings";

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBlogs`
  );
  const { blogs } = await res.json();
  return blogs;
};
