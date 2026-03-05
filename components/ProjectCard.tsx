import React from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={urlFor(project.image).url()}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay with links */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          {project?.linkToGithub && (
            <a
              href={project.linkToGithub}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-caption font-medium bg-white text-black transition-transform duration-300 hover:scale-105"
            >
              Source
            </a>
          )}
          {project?.linkToBuild && (
            <a
              href={project.linkToBuild}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-caption font-medium border border-white text-white transition-transform duration-300 hover:scale-105"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-title font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies?.map((tech: any, index: number) => (
            <span
              key={tech._id || index}
              className="flex items-center gap-1 px-2 py-0.5 rounded-md text-overline"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-tertiary)",
              }}
            >
              <img
                src={urlFor(tech.icon).url()}
                alt={tech.title}
                className="w-3.5 h-3.5 rounded-sm"
              />
              {tech.title}
            </span>
          ))}
        </div>

        {/* Summary */}
        {project?.summary?.length > 0 && (
          <ul className="space-y-1.5">
            {project.summary.slice(0, 3).map((item: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-caption"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: "var(--text-tertiary)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
