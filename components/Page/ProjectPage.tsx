"use client";

import React from "react";
import ProjectWrapper from "../Wrapper/ProjectWrapper";
import { ProjectTable } from "../Table/ProjectTable";
import { Project } from "@prisma/client";
import useProjectModal from "@/hooks/useProjectModal";
import ProjectModal from "../Modal/ProjectModal";

type ComponentProps = {
  projects: Project[];
};

const ProjectPage = ({ projects }: ComponentProps) => {
  const { isOpen, onOpen, onClose } = useProjectModal();

  return (
    <>
      <div className="ml-0 sm:ml-[20%] p-4 pt-[20vh] ">
        <h1 className="font-semibold text-emerald-700 text-xl mb-4">
          Projects
        </h1>
        <div className="w-full flex items-center justify-end mb-4">
          <ProjectWrapper onOpen={onOpen} />
        </div>

        <ProjectTable projects={projects} />
      </div>

      {isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default ProjectPage;
