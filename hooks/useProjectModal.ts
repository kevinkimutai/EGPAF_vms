"use client";

import { useState } from "react";

interface ProjectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useProjectModal = (): ProjectModalStore => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useProjectModal;
