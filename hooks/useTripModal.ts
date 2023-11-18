"use client";

import { useState } from "react";

interface TripModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTripModal = (): TripModalStore => {
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

export default useTripModal;
