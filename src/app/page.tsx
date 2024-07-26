"use client";

import About from "@/components/body/about";
import Brain from "@/components/body/brain";
import Hero from "@/components/body/hero";
import Options from "@/components/body/options";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <Hero />
        <About />
        <Options />
        <Brain />
        <Footer />
      </div>
    </main>
  );
}
