import React from "react";

type Props = {
  skillName: string;
  proficiency: number;
  url: string;
};

export const Skill = ({ skillName, proficiency, url }: Props) => {
  return (
    <div className="group relative flex flex-col items-center gap-3 cursor-pointer">
      {/* Icon container */}
      <div
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center p-3 transition-all duration-500 group-hover:scale-105"
        style={{
          background: "var(--bg-secondary)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <img
          src={url}
          alt={skillName}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
          style={{
            filter:
              "var(--skill-icon-filter, none)",
          }}
        />

        {/* Hover overlay with proficiency */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-light)",
          }}
        >
          <span
            className="text-title font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {proficiency}%
          </span>
        </div>
      </div>

      {/* Skill name */}
      <span
        className="text-overline text-center transition-colors duration-300"
        style={{ color: "var(--text-tertiary)" }}
      >
        {skillName}
      </span>
    </div>
  );
};
