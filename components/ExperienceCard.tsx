import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
  index: number;
  isLast: boolean;
  total: number;
};

export const ExperienceCard = ({ experience, index, isLast, total }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const startDate = experience.startDate
    ? new Date(experience.startDate)
    : null;
  const endDate = experience.endDate ? new Date(experience.endDate) : null;

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const dateLabel = startDate
    ? `${formatDate(startDate)} — ${
        experience.isCurrentlyWorkingHere
          ? "Present"
          : endDate
          ? formatDate(endDate)
          : ""
      }`
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative flex items-stretch group"
    >
      {/* ── Left rail: node + wire ── */}
      <div className="relative flex flex-col items-center flex-shrink-0 w-14 md:w-16">
        {/* Node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 22,
            delay: index * 0.08,
          }}
          className="relative z-10 mt-6"
        >
          <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 p-2"
            style={{
              borderColor: experience.isCurrentlyWorkingHere
                ? "var(--accent)"
                : expanded
                ? "var(--text-tertiary)"
                : "var(--border)",
              background: "#ffffff",
              boxShadow: experience.isCurrentlyWorkingHere
                ? "0 0 0 4px color-mix(in srgb, var(--accent) 15%, transparent)"
                : "var(--shadow-sm)",
            }}
          >
            {experience.companyImage ? (
              <img
                src={urlFor(experience.companyImage).width(120).height(120).url()}
                alt={experience.company}
                className="w-full h-full rounded-lg object-contain"
              />
            ) : (
              <span
                className="text-body font-bold"
                style={{ color: "var(--text-secondary)" }}
              >
                {experience.company?.charAt(0)}
              </span>
            )}
          </div>

          {/* Live indicator for current role */}
          {experience.isCurrentlyWorkingHere && (
            <span
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2"
              style={{
                background: "var(--accent)",
                borderColor: "var(--bg-secondary)",
              }}
            />
          )}
        </motion.div>

        {/* Wire segment below node */}
        {!isLast && (
          <div
            className="flex-1 w-[2px] mt-0"
            style={{ background: "var(--border-light)" }}
          />
        )}
      </div>

      {/* ── Card body ── */}
      <div className="flex-1 pb-8 pl-4 md:pl-6">
        <motion.div
          className="rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 relative overflow-hidden"
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.005 }}
          style={{
            background: "var(--bg-card)",
            border: `1px solid ${
              expanded ? "var(--accent)" : "var(--border-light)"
            }`,
            boxShadow: expanded ? "var(--shadow-md)" : "var(--shadow-sm)",
          }}
        >
          {/* Wireframe dashed connector from rail to card top-left corner */}
          <div
            className="absolute -left-[17px] md:-left-[25px] top-[28px] md:top-[30px] h-[2px]"
            style={{
              width: "17px",
              background: "var(--border-light)",
            }}
          />

          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className="text-body md:text-title font-semibold leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {experience.jobTitle}
              </h3>
              <p
                className="text-caption md:text-body font-medium mt-0.5"
                style={{ color: "var(--text-secondary)" }}
              >
                {experience.company}
              </p>
            </div>

            {/* Date badge */}
            {dateLabel && (
              <span
                className="flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap"
                style={{
                  background: experience.isCurrentlyWorkingHere
                    ? "color-mix(in srgb, var(--accent) 12%, transparent)"
                    : "var(--bg-secondary)",
                  color: experience.isCurrentlyWorkingHere
                    ? "var(--accent)"
                    : "var(--text-tertiary)",
                  border: experience.isCurrentlyWorkingHere
                    ? "1px solid color-mix(in srgb, var(--accent) 25%, transparent)"
                    : "1px solid var(--border-light)",
                }}
              >
                {dateLabel}
              </span>
            )}
          </div>

          {/* Tech stack */}
          {experience.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {experience.technologies.map((tech: any) => (
                <span
                  key={tech._id}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors"
                  style={{
                    background: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  {tech.icon && (
                    <img
                      src={urlFor(tech.icon).width(32).height(32).url()}
                      alt={tech.title}
                      className="w-3.5 h-3.5 rounded-sm object-contain"
                      style={{
                        filter: "var(--skill-icon-filter, none)",
                      }}
                    />
                  )}
                  {tech.title}
                </span>
              ))}
            </div>
          )}

          {/* Expandable description */}
          <AnimatePresence>
            {expanded && experience.description?.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <ul
                  className="mt-4 space-y-2.5 pt-4"
                  style={{ borderTop: "1px dashed var(--border)" }}
                >
                  {experience.description.map((desc: any, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-caption md:text-body"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand / collapse hint */}
          {experience.description?.length > 0 && (
            <div className="flex items-center justify-center gap-1.5 mt-3 pt-2">
              <span
                className="text-overline font-medium"
                style={{ color: "var(--text-tertiary)" }}
              >
                {expanded ? "Less" : "Details"}
              </span>
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-3.5 h-3.5"
                style={{ color: "var(--text-tertiary)" }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
