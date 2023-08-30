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
        <title>Rishikesh Shinde</title>
        <meta
          name="description"
          property="og:description"
          key="desc"
          content="Hello 👋 , this is Rishikesh Shinde, a recent Conputer Engineering passout and a web enthusiast. A person who is attracted by the world of computer science and curious as well as passionate to learn new technologies."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/ltmeza6x/production/c0d9bb9cab619aa36e739a1bc6ba2d9bc2d9c1fa-400x400.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="snap-y snap-mandatory overflow-y-auto scrollbar-thin z-0 overflow-x-hidden 
      scrollbar-track-gray-400/20  scrollbar-thumb-red-500/80"
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

      <footer className={styles.footer}>
        <small className="text-gray-500">
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
