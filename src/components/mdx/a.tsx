import React from "react";

export default function A({ children }: { children?: React.ReactNode }) {
  return <a className="link">{children}</a>;
}
