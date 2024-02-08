"use client";

import React from "react";
import { VehicleCard } from "../Vehicle/VehicleCard";
import VehicleFnWrapper from "./VehicleFnWrapper";
import { VehicleTable } from "../Table/VehicleTable";
import { Vehicle } from "@prisma/client";
import useVehicleModal from "@/hooks/useVehicleModal";
import VehicleModal from "../Modal/VehicleModal";

const VehicleWrapper = ({ vehicles }: any) => {
  const { isOpen, onOpen, onClose } = useVehicleModal();

  const openModal = () => {
    onOpen();
  };

  return (
    <>
      <div className="ml-0 sm:ml-[20%] p-4 pt-[20vh] ">
        <h1 className="font-semibold text-emerald-700 text-xl mb-4">
          Vehicles
        </h1>
        <div className="flex justify-end items-center mb-4">
          <VehicleFnWrapper open={openModal} />
        </div>
        <div className="flex overflow-x-scroll no-scrollbar gap-8 mb-8">
          {vehicles.map((vehicle: any) => (
            <>
              {/* @ts-ignore */}
              <VehicleCard key={vehicle.id} {...vehicle} />
            </>
          ))}
        </div>
        {/* VEHICLE CRUD TABLE */}
        <VehicleTable />
      </div>

      {isOpen && (
        <VehicleModal isOpen={isOpen} onClose={onClose} vehicleId={vehicleId} />
      )}
    </>
  );
};

export default VehicleWrapper;
