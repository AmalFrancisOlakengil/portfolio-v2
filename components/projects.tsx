"use client";

import React, { useState } from "react";
import Image from "next/image";

// ============================================================================
// CONFIGURATION & DATA (Modify your projects here)
// ============================================================================

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;      // Static image (Local path like "/assets/..." or Web URL)
  gif: string;        // Animated GIF shown on hover (Local path or Web URL)
  link?: string;       // Optional link (e.g. GitHub or Live Demo)
  tags?: string[];     // Optional tech stack tags
}

export interface ProjectsGridProps {
  heading?: string;
  subheading?: string;
  projects?: ProjectItem[];
}

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Zonely Geospacial App",
    description:
      "An application where users can obtain possible buisness opening locations to expand/start and Blindspot locations",
    image: "/assets/project_images/zonely.png",
    gif: "/assets/zonely.gif",
    link: "https://github.com/AmalFrancisOlakengil/threx",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Scikit-Learn", "FastApi", "Sqlite", "Beautifulsoup", "numpy"],
  },
  {
    id: "2",
    title: "Timeliner",
    description:
      "Users can keep track of their events in a Timeline based visualizer",
    image: "/assets/project_images/timeliner.png",
    gif: "/assets/TimeLiner.gif",
    link: "https://github.com/AmalFrancisOlakengil/TimeLiner",
    tags: ["sqlite","Java","JavaFX"],
  },
  {
    id: "3",
    title: "Symposium",
    description:
      "A Place where you can provide ideas and a Variety of Agents with different personalities stress test your idea by discussing and debating each other.",
    image: "/assets/project_images/symp.png",
    gif: "/assets/sympo.gif",
    link: "https://github.com/AmalFrancisOlakengil/Symposium",
    tags: ["sqlite", "customtkinter", "groq agentic sdk"],
  },
  {
    id: "4",
    title: "Music Classifier Application",
    description:
      "Deep Learning based Classifier model that classifies music into different Genre, model is built by fine tuning efficient net neural network",
    image: "/assets/project_images/music.png",
    gif: "/assets/Music_Classifier.gif",
    link: "https://huggingface.co/spaces/Olaki/Music_Genre_Classifier",
    tags: ["HuggingFace", "EfficientNet", "pytorch", "Librosa"],
  },
    {
    id: "5",
    title: "DEVSMTP-CLI",
    description:
      "A Developer tool to send mails to fellow developers via CLI, tagging the concerend file and code block",
    image: "/assets/project_images/devsmtp.png",
    gif: "/assets/devsmtp.gif",
    link: "https://github.com/AmalFrancisOlakengil/DevSMTP-CLI",
    tags: ["C++", "SMTP-protocol", "Developer tools"],
  },
     {
    id: "6",
    title: "Cyborg Club website",
    description:
      "Club Website for Cyborg SRM Club",
    image: "/assets/project_images/cyborg.png",
    gif: "/assets/cyborg_website.gif",
    link: "https://github.com/AmalFrancisOlakengil/Cyborg-website",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "7",
    title: "StockSim",
    description:
      "Stock Simulation web app where one can trade, close, open, and learn about stock market. The money is made up but the stock prices changes based on real time data.",
    image: "/assets/project_images/stocksim.png",
    gif: "/assets/stocksim.gif",
    link: "https://github.com/AmalFrancisOlakengil/stocksim",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase", "FinnHub"],
  },
  {
    id: "8",
    title: "Blog Application",
    description:
      "Simple Blog application with all CRUD features",
    image: "/assets/project_images/blog.png",
    gif: "/assets/blogapp.gif",
    link: "https://github.com/AmalFrancisOlakengil/Blog-app",
    tags: ["React","Flask","Postgres"],
  },
  {
    id: "9",
    title: "GeekCoders Events Page",
    description:
      "Events Page of GeekCoders Community website",
    image: "/assets/project_images/geekcoders.png",
    gif: "/assets/geekcoders.gif",
    link: "https://github.com/AmalFrancisOlakengil/geekcodersWebsite",
    tags: ["React", "Nextjs", "Typescript"],
  },
  {
    id: "10",
    title: "LeetCode Stalker",
    description:
      "An application that sends you a daily report of whether your peers are grinding leetcode or not. Made for fun",
    image: "/assets/project_images/leet.png",
    gif: "/assets/leetcodestalker.gif",
    link: "https://github.com/AmalFrancisOlakengil/leetcode_stalker",
    tags: ["Vanilla HTML","FastApi","Postgres", "beautifulsoup"],
  },
    {
    id: "11",
    title: "Money Map",
    description:
      "A browser tool that tracks your expenses, shows reports and can export the report, stores all data in browsers local data.",
    image: "/assets/project_images/moneymap.png",
    gif: "/assets/moneymap.gif",
    link: "https://github.com/AmalFrancisOlakengil/MoneyMap",
    tags: ["React", "IndexedDB", "Chartjs"],
  }
];

// Helper to check if a URL is external
const isExternalUrl = (url: string) => url.startsWith("http://") || url.startsWith("https://");

// ============================================================================
// SINGLE CARD COMPONENT
// ============================================================================

const ProjectCard = React.memo(({ project }: { project: ProjectItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentMediaSrc = isHovered ? project.gif : project.image;
  const isGifActive = isHovered;
  const isExternal = isExternalUrl(currentMediaSrc);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl border border-black overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Hidden preloader so GIF loads into browser cache prior to hover */}
      <div className="hidden" aria-hidden="true">
        <Image
          src={project.gif}
          alt=""
          width={1}
          height={1}
          unoptimized={true}
          priority
        />
      </div>

      {/* Top Image / GIF Container */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-black/10 bg-neutral-100">
        <Image
          src={currentMediaSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // Crucial: unoptimized must be true for animated GIFs to preserve animation
          unoptimized={isGifActive || isExternal}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Subtle hover indicator badge */}
        <div className="absolute top-3 right-3 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-black/70 text-white backdrop-blur-md rounded border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Preview
        </div>
      </div>

      {/* Middle & Bottom Text Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-mono text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Middle Title */}
          <h3 className="text-xl font-bold tracking-tight text-neutral-950 group-hover:text-black transition-colors">
            {project.title}
          </h3>

          {/* Bottom Description */}
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Optional Action Link */}
        {project.link && (
          <div className="mt-6 pt-4 border-t border-neutral-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:underline"
            >
              View Project
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ============================================================================
// MAIN PROJECTS GRID COMPONENT
// ============================================================================

export default function ProjectsShowcase({
  heading = "Featured Work",
  subheading = "Selected projects showcasing web architectures, creative UI components, and software tooling.",
  projects = DEFAULT_PROJECTS,
}: ProjectsGridProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {heading}
        </h2>
        {subheading && (
          <p className="mt-3 text-base text-neutral-400 leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}