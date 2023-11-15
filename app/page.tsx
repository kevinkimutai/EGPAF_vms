"use client";

import { useState, useEffect } from "react";
import { useOrganization } from "@clerk/nextjs";
import type { OrganizationMembershipResource } from "@clerk/types";
import { redirect } from "next/navigation";

export default function Organization() {
  const { organization, membership, isLoaded } = useOrganization();

  console.log(membership?.role);

  const isAdmin = membership?.role === "admin";
  const isDriver = membership?.role === "basic_member" || "member";

  if (isAdmin) {
    redirect("/admin");
  }

  if (isDriver) {
    redirect("/driver");
  }
}
