import React from "react";

export default function Code({ children }: { children?: React.ReactNode }) {
  return <code className="whitespace-pre text-accent">{children}</code>;
}
