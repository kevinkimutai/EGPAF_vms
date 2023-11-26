"use client";

import { useState } from "react";

interface VehicleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useVehicleModal = (): VehicleModalStore => {
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

export default useVehicleModal;
