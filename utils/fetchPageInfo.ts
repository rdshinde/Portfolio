import { PageInfo } from "../typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const { pageInfo } = await res.json();
//   console.log(pageInfo);
  return pageInfo;
};
