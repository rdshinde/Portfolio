import type { GetStaticProps, NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import React from "react";

import Head from "next/head";
import Link from "next/link";
import {
  fetchSocials,
  fetchExperience,
  fetchProjects,
  fetchPageInfo,
  fetchSkills,
} from "../utils";
import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  SkillsSection,
  ExperienceSection,
  BlogSection,
} from "../components";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skills, Project, Social } from "../typings";
import { urlFor } from "../sanity"; // Import urlFor

// Helper function to truncate text for meta descriptions
const truncateText = (text: string, maxLength: number = 160): string => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, text.lastIndexOf(" ", maxLength - 3)) + "...";
};

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"; // Replace with actual domain

const Home: NextPage<any> = ({
  pageInfo,
  experience,
  projects,
  skills,
  socials,
  blogs,
}: Props | any) => {
  return (
    <div className={`${styles.container} `}>
      <Head>
        <title>{`${pageInfo?.name || "Portfolio"} - ${pageInfo?.heroTitle || "Developer"}`}</title>
        <meta
          name="description"
          content={truncateText(pageInfo?.aboutText)}
          key="desc"
          // property="og:description" was removed here as it's duplicated below
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${pageInfo?.name || "Portfolio"} - ${pageInfo?.heroTitle || "Developer"}`} />
        <meta property="og:description" content={truncateText(pageInfo?.aboutText)} />
        {pageInfo?.heroImage && (
          <meta property="og:image" content={urlFor(pageInfo.heroImage).width(1200).height(630).fit('crop').url()} />
        )}
        <meta property="og:url" content={NEXT_PUBLIC_BASE_URL} />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: pageInfo?.name,
              url: NEXT_PUBLIC_BASE_URL,
              image: pageInfo?.heroImage ? urlFor(pageInfo.heroImage).url() : "",
              jobTitle: pageInfo?.heroTitle,
              email: pageInfo?.email,
              telephone: pageInfo?.phoneNumber,
              address: pageInfo?.address, // Assuming address is a simple string
              sameAs: socials?.map((social: Social) => social.url) || [],
            }),
          }}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="snap-y snap-mandatory overflow-y-auto scrollbar-thin z-0 overflow-x-hidden 
      scrollbar-track-gray-200/20 dark:scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80"
      >
        <Header socials={socials} />

        <Hero pageInfo={pageInfo} />

        <About pageInfo={pageInfo} />

        <ExperienceSection experience={experience} />

        <SkillsSection skills={skills} />

        <Projects projects={projects} />

        <BlogSection blogs={blogs} />

        <Contact pageInfo={pageInfo} />

        <Link href="#hero">
          <div className="sticky bottom-10 w-full cursor-pointer">
            <div className="flex items-center justify-end">
              <img
                src="https://pbs.twimg.com/profile_images/1577564208837062656/3HOjsIom_400x400.jpg"
                alt="profile"
                className="h-10 w-10 rounded-full grayscale hover:grayscale-0"
                title="Go to top"
              />
            </div>
          </div>
        </Link>
      </main>

      <footer className={`${styles.footer} py-4 text-center`}> {/* Added some padding and text-center */}
        <small className="text-gray-600 dark:text-gray-400">
          Built with ❤️ by Rishikesh Shinde
        </small>
      </footer>
    </div>
  );
};

export default Home;

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skills[];
  projects: Project[];
  socials: Social[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "rdshinde") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
      blogs: data.user.publication.posts,
    },
    revalidate: 10,
  };
};
