import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  const projects = [
    
    {
      href: "https://remex-1.vercel.app/",
      src: "/remex.png",
      title: "Remex Trade",
      description:
        "REMEX Trade is an advanced platform designed for efficient trading and financial analysis, offering state-of-the-art tools and insights to empower traders.",
    },
    {
      href: "https://t.me/MemeBattleArenaBot",
      src: "/memeindex.png",
      title: "MemeIndex",
      description:
        "MemeIndex is a Telegram Mini App (TMA) that allows users to discover, track, and interact with Meme Tokens on the TON blockchain.",
    },
    {
      href: "https://forti-fi-six.vercel.app/",
      src: "/fortifi-1.png",
      title: "FortiFi",
      description:
        "FortiFi is the Decentralized Insurance Protocol on the Educhain blockchain allowing users to buy insurance for their assets.", 
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-5" id="projects">
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.href}
            />
            <div className="absolute top-3 right-3 text-gray-400 hover:text-white transition duration-300">
              <FiExternalLink size={20} />
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
