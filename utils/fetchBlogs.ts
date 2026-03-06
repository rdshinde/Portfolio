import { BlogPost } from "../typings";

const HASHNODE_GQL = "https://gql.hashnode.com/";
const BLOG_HOST = "blog.rdshinde.com";

const query = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      title
      url
      posts(first: $first) {
        edges {
          node {
            id
            title
            slug
            brief
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(HASHNODE_GQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { host: BLOG_HOST, first: 10 },
      }),
    });

    const json = await response.json();
    const edges = json?.data?.publication?.posts?.edges ?? [];
    const publicationUrl =
      json?.data?.publication?.url ?? `https://${BLOG_HOST}`;

    return edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      slug: edge.node.slug,
      brief: edge.node.brief,
      publishedAt: edge.node.publishedAt,
      readTimeInMinutes: edge.node.readTimeInMinutes ?? 0,
      coverImage: edge.node.coverImage?.url ?? "",
      tags: (edge.node.tags ?? []).map((t: any) => t.name),
      url: `${publicationUrl}/${edge.node.slug}`,
    }));
  } catch (error) {
    console.error("Failed to fetch blogs from Hashnode:", error);
    return [];
  }
};
