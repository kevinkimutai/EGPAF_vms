import { IconProps } from "@radix-ui/react-icons/dist/types";
import {
  Bus,
  FolderKanban,
  LucideIcon,
  Ruler,
  User,
  Users2,
} from "lucide-react";
import React from "react";

type ComponentProps = {
  type: string;
};

type CssType = {
  outerBg: string;
  iconBg: string;
  icon: any;
  title: string;
};

const OverviewCard = ({ type }: ComponentProps) => {
  let vehicleCss: CssType = {
    outerBg: "",
    iconBg: "",
    icon: "",
    title: "",
  };

  switch (type) {
    case "vehicle":
      vehicleCss.outerBg = "bg-yellow-100";
      vehicleCss.iconBg = "bg-yellow-700";
      vehicleCss.icon = <Bus className="text-yellow-700" />;
      vehicleCss.title = "Vehicles";
      break;

    case "program":
      vehicleCss.outerBg = "bg-pink-100";
      vehicleCss.iconBg = "bg-pink-700";
      vehicleCss.icon = <FolderKanban className="text-pink-700" />;
      vehicleCss.title = "Programs";
      break;

    case "driver":
      vehicleCss.outerBg = "bg-sky-100";
      vehicleCss.iconBg = "bg-sky-700";
      vehicleCss.icon = <Users2 className="text-sky-700" />;
      vehicleCss.title = "Drivers";
      break;

    case "distance":
      vehicleCss.outerBg = "bg-purple-100";
      vehicleCss.iconBg = "bg-purple-700";
      vehicleCss.icon = <Ruler className="text-purple-700" />;
      vehicleCss.title = "Distance/Today";
      break;

    default:
      break;
  }

  return (
    <div className="w-full p-4 rounded-xl flex justify-between items-center bg-emerald-50">
      <div className={`rounded-3xl p-4 ${vehicleCss.outerBg}`}>
        {vehicleCss.icon}
      </div>
      <div className="flex flex-col justify-end">
        <h2 className="font-semibold ">{vehicleCss.title}</h2>
        <p className="text-xl font-bold text-emerald-800 text-right">32</p>
      </div>
    </div>
  );
};

export default OverviewCard;
