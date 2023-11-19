"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";

import { Trip } from "@prisma/client";

import LocationForm from "../Form/LocationForm";
import StaffForm from "../Form/StaffForm";
import ReasonForm from "../Form/ReasonForm";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FinishTripForm from "../Form/FinishTripForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripId: number | undefined;
}

const TripPatchModal = ({ isOpen, onClose, tripId }: ModalProps) => {
  const [formData, setFormData] = useState<Trip>();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    let mileage = { mileage: +data.mileage };

    const res = await fetch(`/api/trip/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mileage),
    });

    if (res.ok) {
      onClose();
      router.refresh();
      toast.success("Successfully created trip");
    }
  };

  let header;
  let FormComponent;

  header = {
    title: "Complete Trip",
    desc: "Finish Your Trip.",
  };

  FormComponent = <FinishTripForm submitForm={handleSubmit} />;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} header={header}>
        {FormComponent}
      </Modal>
    </>
  );
};

export default TripPatchModal;
