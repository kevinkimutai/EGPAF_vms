"use client";

import React from "react";

import {
  BarChartIcon,
  PaperPlaneIcon,
  IdCardIcon,
} from "@radix-ui/react-icons";
import { Car, Contact2, FolderKanban } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminRoutes = [
  {
    icon: BarChartIcon,
    label: "Overview",
    route: "/admin",
  },
  {
    icon: PaperPlaneIcon,
    label: "Trips",
    route: "/admin/trips",
  },
  {
    icon: Car,
    label: "Vehicles",
    route: "/admin/vehicles",
  },
  {
    icon: IdCardIcon,
    label: "Drivers",
    route: "/admin/drivers",
  },
  {
    icon: FolderKanban,
    label: "Projects",
    route: "/admin/projects",
  },
];
const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-1/5 bg-emerald-700 fixed bottom-0 top-0 left-0 z-10 text-white">
      <ul className="mt-[20vh]">
        {adminRoutes.map(({ route, label, icon: Icon }) => (
          <Link key={label} href={route}>
            <li
              className={`flex px-4 py-2 justify-start items-center ${
                route === pathname ? "bg-white text-emerald-700 shadow-sm" : ""
              }`}
            >
              <Icon className="mr-2 text-sm" />
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
