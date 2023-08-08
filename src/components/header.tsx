import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 justify-center">
      <div className="container">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case font-mono text-3xl text-accent"
            href="/"
          >
            {"<IPK/>"}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/learning">Learning</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
