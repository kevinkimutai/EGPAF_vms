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

enum STEPS {
  LOCATIONS = 0,
  STAFF = 1,
  REASON = 2,
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleId: number;
}

const TripModal = ({ isOpen, onClose, vehicleId }: ModalProps) => {
  const [step, setStep] = useState<STEPS>(STEPS.LOCATIONS);
  const [formData, setFormData] = useState<Trip>();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    if (step === 2) {
      //SUBMIT
      setFormData((prev) => ({ ...prev, ...data }));

      let tripData = { ...formData, vehicleId };

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
        toast.success("Successfully created trip");
      }

      //TODO:ADD TOAST NOTIFICATIONS
    } else {
      setStep((prevState) => prevState + 1);
      setFormData((prev) => ({ ...prev, ...data }));
    }
  };

  const onNext = () => {
    setStep((prevState) => prevState + 1);
  };

  const onBack = () => {
    setStep((prevState) => prevState - 1);
  };

  let header;
  let FormComponent;

  if (step === STEPS.LOCATIONS) {
    header = {
      title: "Create Trip",
      desc: "Where Are You Heading.",
    };
    FormComponent = <LocationForm submitForm={handleSubmit} />;
  }

  if (step === STEPS.STAFF) {
    header = {
      title: "Staff",
      desc: "Enter Staff In The Trip",
    };
    FormComponent = <StaffForm onBack={onBack} submitForm={handleSubmit} />;
  }
  if (step === STEPS.REASON) {
    header = {
      title: "Reason For Trip",
      desc: "Reason For Trip To Facility/Location",
    };
    FormComponent = FormComponent = (
      <ReasonForm onBack={onBack} submitForm={handleSubmit} />
    );
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} header={header}>
        {FormComponent}
      </Modal>
    </>
  );
};

export default TripModal;
