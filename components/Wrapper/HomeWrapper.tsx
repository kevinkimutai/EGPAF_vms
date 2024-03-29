"use client";

import React from "react";
import Banner from "../Banner/Banner";
import { TripTable } from "../Table/TripTable";
import useTripModal from "@/hooks/useTripModal";
import Modal from "../Modal/Modal";
import TripModal from "../Modal/TripModal";
import PaginationComponent from "../Pagination/PaginationComponent";

type ComponentProps = {
  trips: any[];
  vehicleId: number;
  allTrips: any[];
};

const HomeWrapper = ({ trips, vehicleId, allTrips }: ComponentProps) => {
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

      <h2 className="font-semibold text-xl mb-4 mt-8">All Trips</h2>
      <TripTable trips={allTrips} />
      {/*PAGINATION */}
      <PaginationComponent />

      {isOpen && (
        <TripModal isOpen={isOpen} onClose={onClose} vehicleId={vehicleId} />
      )}
    </>
  );
};

export default HomeWrapper;
