"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import * as z from "zod";

import { Trip, Vehicle } from "@prisma/client";

import LocationForm from "../Form/LocationForm";
import StaffForm from "../Form/StaffForm";
import ReasonForm from "../Form/ReasonForm";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import VehicleDescForm from "../Form/VehicleDescForm";
import VehicleNumberPlateForm from "../Form/VehicleNumberPlateForm";
import VehicleMileageForm from "../Form/VehicleMileageForm";
import VehicleTypeForm from "../Form/VehicleTypeForm";
import VehicleDriverForm from "../Form/VehicleDriver";

enum STEPS {
  DESCRIPTION = 0,
  NUMBER_PLATE = 1,
  MILEAGE = 2,
  TYPE = 3,
  PROJECT = 4,
  DRIVER = 5,
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VehicleModal = ({ isOpen, onClose }: ModalProps) => {
  const [step, setStep] = useState<STEPS>(STEPS.DESCRIPTION);
  const [formData, setFormData] = useState<Vehicle>();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    if (step === 5) {
      //SUBMIT
      setFormData((prev) => ({ ...prev, ...data }));

      let vehicleData = { ...formData };

      console.log(vehicleData);

      // const res = await fetch("/api/vehicle", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(vehicleData),
      // });

      // if (res.ok) {
      //   onClose();
      //   router.refresh();
      //   toast.success("Successfully created vehicle");
      // }

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

  if (step === STEPS.DESCRIPTION) {
    header = {
      title: "New Vehicle",
      desc: "Add a new vehicle to your program.",
    };
    FormComponent = <VehicleDescForm submitForm={handleSubmit} />;
  }

  if (step === STEPS.NUMBER_PLATE) {
    header = {
      title: "Number Plate",
      desc: "Enter The Vehicles Number Plate",
    };
    FormComponent = (
      <VehicleNumberPlateForm onBack={onBack} submitForm={handleSubmit} />
    );
  }
  if (step === STEPS.MILEAGE) {
    header = {
      title: "Mileage",
      desc: "Current Mileage",
    };
    FormComponent = FormComponent = (
      <VehicleMileageForm onBack={onBack} submitForm={handleSubmit} />
    );
  }
  if (step === STEPS.TYPE) {
    header = {
      title: "Vehicle Type",
      desc: "Type of Vehicle",
    };
    FormComponent = FormComponent = (
      <VehicleTypeForm onBack={onBack} submitForm={handleSubmit} />
    );
  }
  if (step === STEPS.DRIVER) {
    header = {
      title: "Driver",
      desc: "Assign Driver",
    };
    FormComponent = FormComponent = (
      <VehicleDriverForm onBack={onBack} submitForm={handleSubmit} />
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

export default VehicleModal;
