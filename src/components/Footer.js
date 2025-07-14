import React from "react";
import nitLogo from "../assets/nit-logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFF6E9] border-t border-[#E2B77A] py-8 text-center mt-12">
      <img src={nitLogo} alt="NIT Logo" className="mx-auto mb-2 h-10" />
      <div className="font-bold text-[#341D04]">National Institute of Technology, Jamshedpur</div>
      <div className="text-[#341D04]">Adityapur, Jamshedpur, Jharkhand 831014</div>
      <div className="flex justify-center gap-4 mt-4 mb-2 text-2xl">
        <span role="img" aria-label="Instagram">📷</span>
        <span role="img" aria-label="Twitter">🐦</span>
        <span role="img" aria-label="LinkedIn">💼</span>
        <span role="img" aria-label="YouTube">▶️</span>
      </div>
      <div className="text-[#341D04]">VISITORS<br /><span className="font-bold">668754</span></div>
    </footer>
  );
}