
import React from "react";

const features = [
  {
    title: "Secure AI Vaults",
    description: "Advanced strategies built on automation and AI logic.",
    icon: "🧠",
  },
  {
    title: "FX Shield",
    description: "Eliminate forex exposure risk across borders.",
    icon: "💱",
  },
  {
    title: "Xyncor XP",
    description: "Earn ecosystem rewards and boost APY.",
    icon: "🚀",
  },
  {
    title: "Payment System",
    description: "Pay directly from vault returns, no balance deducted.",
    icon: "💳",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0a0a16] text-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feat, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2d2d44]"
          >
            <div className="text-3xl mb-3">{feat.icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
            <p className="text-gray-400 text-sm">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
