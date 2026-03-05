import React from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../typings";

type Props = {
  post: BlogPost;
};

export const BlogCard = ({ post }: Props) => {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-full overflow-hidden rounded-2xl flex flex-col transition-shadow duration-300"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-light)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Cover image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "var(--bg-tertiary)" }}
            >
              <svg
                className="w-10 h-10"
                style={{ color: "var(--text-tertiary)" }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          )}

          {/* Read time pill overlay */}
          {post.readTimeInMinutes > 0 && (
            <div
              className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md"
              style={{
                background: "rgba(0,0,0,0.55)",
                color: "#fff",
              }}
            >
              {post.readTimeInMinutes} min read
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          {/* Date + tags row */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span
              className="text-overline font-medium"
              style={{ color: "var(--text-tertiary)" }}
            >
              {date}
            </span>
            {post.tags?.length > 0 && (
              <>
                <span
                  className="w-[3px] h-[3px] rounded-full"
                  style={{ background: "var(--text-tertiary)" }}
                />
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>

          {/* Title */}
          <h3
            className="text-body md:text-title font-semibold leading-snug line-clamp-2 transition-colors duration-200"
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h3>

          {/* Brief */}
          <p
            className="text-caption mt-2.5 leading-relaxed line-clamp-3 flex-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {post.brief}
          </p>

          {/* Read link */}
          <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: "1px solid var(--divider)" }}>
            <span
              className="text-caption font-semibold tracking-wide transition-colors duration-200"
              style={{ color: "var(--accent)" }}
            >
              Read article
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
              style={{ color: "var(--accent)" }}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </a>
  );
};
