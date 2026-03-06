import type { GetStaticProps, NextPage } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  fetchSocials,
  fetchExperience,
  fetchProjects,
  fetchPageInfo,
  fetchSkills,
  fetchBlogs,
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
  FloatingBalls,
} from "../components";
import { Experience, PageInfo, Skills, Project, Social, BlogPost } from "../typings";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skills[];
  projects: Project[];
  socials: Social[];
  blogs: BlogPost[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  experience,
  projects,
  skills,
  socials,
  blogs,
}) => {
  return (
    <div className="min-h-screen relative">
      {/* 3D Floating balls background */}
      <FloatingBalls />

      <Head>
        <title>{pageInfo?.name || "Rishikesh Shinde"} — Portfolio</title>
        <meta
          name="description"
          content="Rishikesh Shinde — Software Engineer crafting digital experiences with precision and care."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/ltmeza6x/production/c0d9bb9cab619aa36e739a1bc6ba2d9bc2d9c1fa-400x400.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <main className="relative z-10">
        <Hero pageInfo={pageInfo} />

        <About pageInfo={pageInfo} />

        <ExperienceSection experience={experience} />

        <SkillsSection skills={skills} />

        <Projects projects={projects} />

        <BlogSection blogs={blogs} />

        <Contact pageInfo={pageInfo} />
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{ borderTop: "1px solid var(--border-light)" }}
      >
        <p className="text-caption" style={{ color: "var(--text-tertiary)" }}>
          Designed & built by {pageInfo?.name || "Rishikesh Shinde"}
        </p>
      </footer>

      {/* Back to top */}
      <Link href="#hero" title="Back to top">
        <div className="fixed bottom-6 right-6 z-30">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <svg
              className="w-4 h-4"
              style={{ color: "var(--text-secondary)" }}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skills[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const blogs: BlogPost[] = await fetchBlogs();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
      blogs,
    },
    revalidate: 60,
  };
};
