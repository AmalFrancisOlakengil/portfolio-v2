"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Sparkles, Folder, Code, Circle } from "lucide-react";

interface TerminalBioProps {
  name?: string;
  role?: string;
  location?: string;
  status?: string;
  bio?: string[];
  skills?: Record<string, string[]>;
  socials?: { label: string; url: string; command: string }[];
}

export default function TerminalBio({
  name = "Amal Francis Olakengil",
  role = "Software Development Engineer",
  location = "Chennai, India",
  status = "Closed for SDE Opportunities",
  bio = [
    "Software Development Engineer passionate about building high-performance web applications, distributed backend services, and interactive developer tooling.",
    "Experienced in full-stack architecture, machine learning workflows, and system optimization. Strong focus on clean code, type safety, and modern UI engineering.",
  ],
  skills = {
    languages: ["TypeScript", "Python", "Java", "C++", "SQL", "JavaScript", "Lua"],
    frameworks: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Flask", "Django", "SpringBoot"],
    tools_and_infra: ["Docker", "PostgreSQL", "Redis", "SQLite", "Git", "Neovim"],
  },
  socials = [
    { label: "GitHub", url: "https://github.com/AmalFrancisOlakengil", command: "open github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/amalfrancisolakengil/", command: "open linkedin" },
    { label: "LinkTree", url: "https://linktr.ee/AmalFrancisOlakengil", command: "open linktree" },
  ],
}: TerminalBioProps) {
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "contact">("about");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="w-full py-20 px-6 bg-white flex justify-center items-center">
      <div className="w-full max-w-4xl font-mono">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-neutral-800" />
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              Developer Profile
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
            <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500 animate-pulse" />
            <span>{status}</span>
          </div>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 shadow-2xl overflow-hidden">
        {/* Window Top Bar */}
<div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800 select-none">
  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
  </div>

  {/* Terminal Navigation Tabs */}
  <div className="flex flex-wrap items-center gap-1 bg-neutral-950 p-1 rounded-md border border-neutral-800 text-xs">
    <button
      onClick={() => setActiveTab("about")}
      className={`px-3 py-1 rounded transition-colors ${
        activeTab === "about"
          ? "bg-neutral-800 text-white font-semibold"
          : "text-neutral-400 hover:text-neutral-200"
      }`}
    >
      about.sh
    </button>
    <button
      onClick={() => setActiveTab("skills")}
      className={`px-3 py-1 rounded transition-colors ${
        activeTab === "skills"
          ? "bg-neutral-800 text-white font-semibold"
          : "text-neutral-400 hover:text-neutral-200"
      }`}
    >
      skills.json
    </button>
    <button
      onClick={() => setActiveTab("contact")}
      className={`px-3 py-1 rounded transition-colors ${
        activeTab === "contact"
          ? "bg-neutral-800 text-white font-semibold"
          : "text-neutral-400 hover:text-neutral-200"
      }`}
    >
      contact.config
    </button>
  </div>

  <div className="text-xs text-neutral-500 hidden sm:block">
    zsh — 80x24
  </div>
</div>

          {/* Terminal Body Content */}
          <div className="p-6 md:p-8 min-h-[320px] text-sm leading-relaxed font-mono">
            {activeTab === "about" && (
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-500 mb-2">
                    # Fetching profile details...
                  </p>
                  <p className="text-emerald-400 font-semibold">
                    <span className="text-neutral-400">user@system:~$</span> whoami
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 space-y-2">
                  <p className="text-lg font-bold text-white">{name}</p>
                  <p className="text-neutral-400 text-xs">
                    Role: <span className="text-cyan-400">{role}</span> | Location:{" "}
                    <span className="text-amber-400">{location}</span>
                  </p>
                </div>

                <div className="space-y-3 text-neutral-300">
                  {bio.map((paragraph, idx) => (
                    <p key={idx} className="text-neutral-300">
                      <span className="text-neutral-600 mr-2">&gt;</span>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a className="text-blue-500 mb-10" href="https://drive.google.com/file/d/1q3qOJ74CSLsuyJ3guotqugGNYckUszCF/view?usp=sharing">My Resume</a>
                <div className="pt-2 text-xs text-neutral-500 flex items-center gap-2">
        
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Focused on clean architecture and scalable interactive systems.</span>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-500 mb-2">
                    # Inspecting tech stack configuration...
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    <span className="text-neutral-400">user@system:~$</span> cat skills.json
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-xs sm:text-sm font-mono overflow-x-auto">
                  <p className="text-neutral-500">{"{"}</p>
                  {Object.entries(skills).map(([category, items], catIdx, arr) => (
                    <div key={category} className="ml-4 my-2">
                      <span className="text-purple-400">"{category}"</span>
                      <span className="text-neutral-400">: [</span>
                      <div className="ml-4 flex flex-wrap gap-2 my-1">
                        {items.map((item, itemIdx) => (
                          <span
                            key={item}
                            className="inline-block px-2 py-0.5 rounded bg-neutral-800 text-emerald-300 border border-neutral-700/50"
                          >
                            "{item}"
                            {itemIdx < items.length - 1 ? "," : ""}
                          </span>
                        ))}
                      </div>
                      <span className="text-neutral-400">
                        ]{catIdx < arr.length - 1 ? "," : ""}
                      </span>
                    </div>
                  ))}
                  <p className="text-neutral-500">{"}"}</p>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-500 mb-2">
                    # Available quick commands & links...
                  </p>
                  <p className="text-purple-400 font-semibold">
                    <span className="text-neutral-400">user@system:~$</span> list --connect
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socials.map((social, index) => (
                    <div
                      key={social.label}
                      className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between gap-3 group hover:border-neutral-700 transition-colors"
                    >
                      <div>
                        <p className="text-xs text-neutral-500 font-mono">
                          $ {social.command}
                        </p>
                        <p className="font-semibold text-white mt-1">
                          {social.label}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cyan-400 hover:underline"
                        >
                          Visit Link →
                        </a>
                        <button
                          onClick={() => handleCopy(social.url, index)}
                          className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                          title="Copy Link"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <h1>Email: francisamal030@gmail.com</h1>
              </div>
            )}
          </div>

          {/* Terminal Footer Prompt Line */}
          <div className="px-6 py-3 bg-neutral-900/80 border-t border-neutral-800/80 text-xs text-neutral-500 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span>
              <span>Shell active</span>
            </div>
            <span>Press tabs above to switch view</span>
          </div>
        </div>
      </div>
    </section>
  );
}