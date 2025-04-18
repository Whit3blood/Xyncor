
import React from "react";
import globeBG from "../assets/fx-globe-visual.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-start px-10 md:px-24"
      style={{
        backgroundImage: `url(${globeBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-10 text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          AI-Powered <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Forex-Covered
          </span>{" "}
          Yield
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Minimizing forex losses globally with efficient, AI-powered yield solutions for retail and corporate users.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium">
            Enter Vault
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-lg">
            How it Works
          </button>
        </div>
      </div>
    </section>
  );
}
