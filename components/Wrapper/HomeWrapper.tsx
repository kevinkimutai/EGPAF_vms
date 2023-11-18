"use client";

import React from "react";
import Banner from "../Banner/Banner";
import { TripTable } from "../Table/TripTable";
import useTripModal from "@/hooks/useTripModal";

type ComponentProps = {
  trips: any[];
};

const HomeWrapper = ({ trips }: ComponentProps) => {
  const { isOpen, onOpen, onClose } = useTripModal();

  const openModal = () => {
    onOpen();
  };

  return (
    <>
      <Banner open={openModal} />
      {/* TABLE TODAYS TRIPS */}
      <h2 className="font-semibold text-xl mb-4">Today&apos;s Trips</h2>

      <TripTable trips={trips} />
    </>
  );
};

export default HomeWrapper;
