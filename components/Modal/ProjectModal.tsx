"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";

import { Trip } from "@prisma/client";

import ReasonForm from "../Form/ReasonForm";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProjectForm from "../Form/ProjectForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ isOpen, onClose }: ModalProps) => {
  const [formData, setFormData] = useState<Trip>();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    //SUBMIT
    setFormData((prev) => ({ ...prev, ...data }));

    let tripData = { ...formData };

    const res = await fetch("/api/trip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    });

    if (res.ok) {
      onClose();
      router.refresh();
      toast.success("Successfully created project");
    }
  };

  const onBack = () => {
    onClose();
  };

  let header;
  let FormComponent;

  header = {
    title: "Projects",
    desc: "Create New Project",
  };
  FormComponent = FormComponent = (
    <ProjectForm onBack={onBack} submitForm={handleSubmit} />
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} header={header}>
        {FormComponent}
      </Modal>
    </>
  );
};

export default ProjectModal;
