import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

import { BlogPreview } from "@/types/blog";

export default function BlogItem(props: BlogPreview) {
  const { title, excerpt, previewImage, publishedAt } = props;

  return (
    <div className="w-full flex border-b border-neutral-700 p-5">
      <Image
        className="mask mask-square"
        src={previewImage}
        alt={title}
        width={200}
        height={200}
      />
      <div className="grow flex flex-col gap-2">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-base">{excerpt}</p>
      </div>
    </div>
  );
}
