import React from "react";

export default function Header() {
  return (
    <div className="navbar justify-center">
      <div className="container">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case font-mono text-3xl text-accent"
            href="/"
          >
            {"<IPK/>"}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 transition-all hover:text-neutral-200 flex align-middle">
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/learning">Learning</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
