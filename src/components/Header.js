// Header.js
import React from "react";
import nitLogo from "../assets/nit-logo.png";
import jharkhandLogo from "../assets/jharkhand-logo.png";

export default function Header() {
  return (
    <header className="w-full relative pt-6 pb-2">
      {/* Logos at top left */}
      <div className="absolute left-6 top-6 flex items-center gap-4">
        <img src={jharkhandLogo} alt="Jharkhand Logo" className="h-10" />
        <img src={nitLogo} alt="NIT Logo" className="h-10" />
      </div>
      {/* Title and subtitle centered */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#442503] font-roboto text-center">
          Santhali Translator
        </h1>
        <p className="text-[#341D04] text-center mt-2 text-base font-hanken">
          An initiative by Jharkhand government in collaboration with Web Team, NIT Jamshedpur
        </p>
      </div>
    </header>
  );
}