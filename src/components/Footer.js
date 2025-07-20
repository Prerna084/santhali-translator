import React from "react";
import nitLogo from "../assets/nit-logo.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
   import zigzag from "../assets/zigzag.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDE6B0] pt-0">
      {/* Decorative Divider */}
      <div className="w-full flex justify-center">
        {/* Option 1: Simple line */}
        {/* <div className="w-full border-t-2 border-[#E2B77A]" /> */}
        {/* Option 2: Zigzag SVG */}
        <img src={zigzag} alt="" className="w-full max-w-[1280px] h-[20px] object-cover" />
      </div>
      {/* Footer Content */}
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center px-4 py-[40px]">
        <img src={nitLogo} alt="NIT Jamshedpur Logo" className="w-[60px] h-[60px] mb-4" />
        <div className="font-extrabold text-[22px] text-[#341D04] text-center">
          National Institute of Technology, Jamshedpur
        </div>
        <div className="text-[16px] text-[#341D04] text-center mb-4">
          Adityapur, Jamshedpur, Jharkhand 831014
        </div>
        <div className="flex flex-row gap-6 mb-4 text-[#341D04] text-[28px]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
        <div className="flex flex-col items-center mt-2">
          <span className="text-[#341D04] text-[16px]">VISITORS</span>
          <span className="font-bold text-[22px] text-[#341D04]">668754</span>
        </div>
      </div>
    </footer>
  );
}