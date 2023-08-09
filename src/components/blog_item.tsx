import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

import { BlogPreview } from "@/types/blog";

export default function BlogItem(props: BlogPreview) {
  const { title, excerpt, previewImage, publishedAt, slug } = props;

  return (
    <div className="w-full flex border-b border-neutral-700 p-5">
      <div className="grow flex flex-col">
        <div className="grow flex flex-col gap-2">
          <Link className="text-2xl font-bold" href={`blog/${slug}`}>
            {title}
          </Link>
          <p className="text-base text-white/60">{excerpt}</p>
        </div>
        <p className="text-sm text-white/60">
          {dayjs(publishedAt).format("MMM DD, YYYY")}
        </p>
      </div>
      <Image
        className="mask"
        src={previewImage}
        alt={title}
        width={200}
        height={200}
      />
    </div>
  );
}
