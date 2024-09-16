"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button onClick={handleClick} className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-indigo-500 rounded hover:bg-indigo-600 capitalize">
      <LinkIcon className="h-4 w-4" />
      {copied ? "link copied!" : "share link"}
    </button>
  );
}
