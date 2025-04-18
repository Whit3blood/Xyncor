
import React from "react";

const useCases = [
  {
    title: "Asset Managers",
    description: "Deploy diversified capital with built-in FX protection.",
  },
  {
    title: "Enterprises",
    description: "Automate payroll and payments from yield without balance cuts.",
  },
  {
    title: "Investors",
    description: "Access global yield with forex-shielded principal protection.",
  },
];

export default function Institutions() {
  return (
    <section className="bg-[#0b0b1c] text-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Trusted By Forward-Looking Institutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="bg-[#161627] p-6 rounded-xl border border-[#2a2a3f] shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
