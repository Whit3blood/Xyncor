
import React from "react";

export default function StatsBar() {
  return (
    <div className="bg-[#0b0b1c] text-white px-6 py-6 md:py-8 border-t border-b border-[#222] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-sm md:text-base font-medium">
      <div className="text-center">
        <p className="text-gray-400">Vault APY</p>
        <p className="text-green-400 text-xl font-bold">4.36%</p>
      </div>
      <div className="text-center">
        <p className="text-gray-400">Total Deposits</p>
        <p className="text-cyan-400 text-xl font-bold">$87.5M</p>
      </div>
      <div className="text-center">
        <p className="text-gray-400">Treasury</p>
        <p className="text-purple-400 text-xl font-bold">$15.2M</p>
      </div>
    </div>
  );
}
