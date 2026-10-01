"use client";

import { useState } from "react";
import TerminalBio from "../components/terminal-bio";
import { GridPulse } from "../components/grid-pulse";
import ProjectsShowcase from "@/components/projects";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/ui/animated-footer";

const guard =
  "[text-shadow:0_0_6px_var(--color-background),0_0_14px_var(--color-background),0_0_30px_var(--color-background),0_0_52px_var(--color-background)]";

export default function Home() {
  const [text, setText] = useState(true);

   const data = [
    {
      title: "Cyborg - SRM Club",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
            I joined the Cyborg SRM Club as a <span className="text-red-500">Technical Member</span> and progressed to the role of <span className="text-red-500">Technical Lead</span>. During my tenure, I developed and maintained the club’s official website, organized and conducted technical events, delivered sessions as a speaker, and mentored junior members in technical skills and project development. As Technical Lead, I also contributed to planning technical initiatives and guiding the club’s technical team.

          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="assets\cyborg_images\cy1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets\cyborg_images\cy2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Geek Coders - Tech Community",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
           Co-founded Geek Coders and served as <span className="text-red-500">Vice President</span>, contributing to the community’s technical strategy, event planning, and overall growth. Ideated, organized, and conducted technical events and workshops, while also serving as a technical speaker for the community. Collaborated with the Technical Lead to design and develop the community website. Worked closely with the Management Team to analyze participant data from 300–400 attendees using Pandas, supporting data-driven event planning and decision-making.

          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="assets\gc_images\GC1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets\gc_images\GC2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  ];

  const data2 = [
    {
      title: "Spartan Matric School",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
           Completed schooling at Spartan Matriculation School (now known as Spartan Ahava School) through Grade 12, with Physics, Chemistry, Mathematics, and Biology (PCMB) as the higher secondary specialization. Secured 92.2% in Grade 12; Grade 10 was completed during the COVID-19 batch under the applicable all-pass assessment system.
          </p>
                    <div className="grid grid-cols-2 gap-4">
            <img
              src="assets\school\sp1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
        
      ),
    },
    {
      title: "SRM University",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
Pursuing a <span className="text-red-500">B.Tech in Computer Science and Engineering</span> at SRM Institute of Science and Technology, Ramapuram, with a current CGPA of 9.83. Actively involved in technical clubs and student communities, contributing to various technical initiatives and events. Completed a minor project and participated in multiple hackathons, gaining hands-on experience in software development, problem-solving, and collaborative project work.

          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="assets\srm\srm1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets\srm\srm2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />


          </div>
        </div>
      ),
    },
    {
      title: "IIT Madras",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
         Completed the <span className="text-red-500">Diploma in Data Science and Applications</span> from the IIT Madras BS Degree Program, gaining a strong foundation in data science, machine learning, and deep learning through both theoretical coursework and hands-on projects. Currently pursuing the Diploma in Programming, further strengthening my programming, problem-solving, and software development skills.

          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="assets\iitm\iitm(1).png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets\iitm\iitm(2).png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets\iitm\iitm(3).png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen">
      {/* Floating Navigation */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-0.5 rounded-full border border-border/80 bg-background/80 p-1.5 shadow-lg backdrop-blur-md text-xs sm:text-sm font-medium">
          <button
            onClick={() => scrollToSection("hero")}
            className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("bio")}
            className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
           Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
           Education
          </button>
          
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-background pt-16"
      >
        <GridPulse />
        <button
          id="grid-pulse-text"
          type="button"
          role="switch"
          aria-checked={text}
          onClick={() => setText(!text)}
          className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 py-1.5 pl-1.5 pr-3 text-sm text-foreground backdrop-blur"
        >
          <span
            aria-hidden
            className={`relative h-5 w-9 rounded-full transition-colors ${
              text ? "bg-foreground" : "bg-foreground/20"
            }`}
          >
            <span
              className={`absolute top-0.5 size-4 rounded-full bg-background transition-[left] ${
                text ? "left-[18px]" : "left-0.5"
              }`}
            />
          </span>
          Text
        </button>
        {text ? (
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
            <h1
              className={`text-[clamp(56px,11vw,144px)] font-semibold leading-[0.9] tracking-[-0.045em] text-foreground ${guard}`}
            >
              Amal Francis Olakengil
            </h1>
            <p
              data-grid-avoid
              className={`mt-7 max-w-[42ch] text-[clamp(16px,1.5vw,20px)] leading-normal text-foreground ${guard}`}
            >
              B.Tech in Computer Science and Engineering
              <br />
              Software Development Engineer
            </p>
          </div>
        ) : null}
      </section>

      {/* Terminal Bio Section */}
      <section id="bio" className="py-12">
        <TerminalBio />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <ProjectsShowcase />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12">
              {/* Header Section */}
      <div className="mb-12 w-full text-center">
  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
    Leadership and Extracurricular Experience
  </h1>
</div>
        <Timeline data={data} />
      </section>
       {/* Education Section */}
      <section id="education" className="py-12">
              {/* Header Section */}
     <div className="mb-12 w-full text-center">
  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
    Education & Qualifications
  </h1>
</div>
    <Timeline data={data2} />
      </section>

      <section id="footer">
         <Footer
          barCount={23}
        />
      </section>
    </main>
  );
}