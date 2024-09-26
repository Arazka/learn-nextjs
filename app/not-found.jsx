import Heading from "@/components/Heading";
import React from "react";

export default function notFoundPage() {
  return (
    <div className="flex justify-center">
      <div>
        <Heading>Oops! Not Found</Heading>
        <p>{"Halaman tidak ditemukan :("}</p>
      </div>
    </div>
  );
}
