import React from "react";

export default function Pre({ children }: { children?: React.ReactNode }) {
  return (
    <pre className="p-5 my-5 mockup-code text-primary-content">{children}</pre>
  );
}
