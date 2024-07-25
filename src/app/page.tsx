"use client";

import Hero from "@/components/body/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <Hero />
      </div>
    </main>
  );
}
