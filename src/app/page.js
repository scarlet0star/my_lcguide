import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10"></div>
    </main>
  );
}
