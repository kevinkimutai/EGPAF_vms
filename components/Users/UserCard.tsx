import { User, User2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full rounded-2xl bg-emerald-100">
      <div className="bg-emerald-700 p-4 rounded-full">
        <User size={20} className="text-emerald-50" />
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-right text-lg font-bold text-emerald-800">
          Koffi Goga
        </p>
        <p>Facilities Visited</p>
        <p className="text-lg font-semibold text-right">4</p>
      </div>
    </div>
  );
};

export default UserCard;
