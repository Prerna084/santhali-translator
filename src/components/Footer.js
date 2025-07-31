import React from "react";
import nitLogo from "../assets/nit-logo.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import zigzag from "../assets/zigzag.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDE6B0] pt-0">
      {/* Decorative Divider */}
      <div className="w-full flex justify-center">
        <img src={zigzag} alt="" className="w-full max-w-[1280px] h-[16px] object-cover" />
      </div>

      {/* Footer Content */}
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center px-4 py-[20px]">
        <img src={nitLogo} alt="NIT Jamshedpur Logo" className="w-[45px] h-[45px] mb-3" />
        
        <div className="font-bold text-[18px] text-[#341D04] text-center">
          National Institute of Technology, Jamshedpur
        </div>
        
        <div className="text-[14px] text-[#341D04] text-center mb-2">
          Adityapur, Jamshedpur, Jharkhand 831014
        </div>
        
        <div className="flex flex-row gap-4 mb-2 text-[#341D04] text-[22px]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}
