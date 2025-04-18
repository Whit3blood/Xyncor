import React from "react";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Features from "../components/Features";
import Institutions from "../components/Institutions";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060616] text-white font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Feature Cards */}
      <Features />

      {/* Institutional Use Cases */}
      <Institutions />

      {/* Footer CTA */}
      <footer className="text-center py-12 border-t border-[#222] bg-[#0b0b1c]">
        <h2 className="text-2xl font-bold mb-4 text-white">Get Started with Xyncor</h2>
        <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition">
          Learn More
        </button>
      </footer>
    </div>
  );
}
