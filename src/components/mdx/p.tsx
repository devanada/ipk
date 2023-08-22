import React from "react";

export default function P({ children }: { children?: React.ReactNode }) {
  return (
    <p className="text-base leading-7 mb-6 tracking-wide text-justify indent-8 text-primary-content">
      {children}
    </p>
  );
}
