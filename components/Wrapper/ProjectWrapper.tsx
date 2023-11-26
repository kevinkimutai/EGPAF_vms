"use client";

import React from "react";
import { Button } from "../ui/button";

type ComponentProps = {
  onOpen: () => void;
};

const ProjectWrapper = ({ onOpen }: ComponentProps) => {
  return (
    <>
      <Button variant={"outline"} className="mr-4" onClick={onOpen}>
        Add Project
      </Button>
      <Button className="">Download Excel</Button>
    </>
  );
};

export default ProjectWrapper;
