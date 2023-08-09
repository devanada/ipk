import React from "react";
import type { Metadata } from "next";
import { getFirstPage } from "../api/learning";

export const metadata: Metadata = {
  title: "Learning | IPK",
  description:
    "IPK stands for Iringan Pengantar Koding, another platform that I wrote as a learning module to ALTA's mentee so that they can learn Frontend.",
};

export default async function Page() {
  const data = await getFirstPage();

  return <>{data.content}</>;
}
