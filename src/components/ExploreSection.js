import React from "react";
import communityPhoto from "../assets/community-photo.png";
import santalAlphabet from "../assets/santal-alphabet.png";

export default function ExploreSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto mt-12 px-2 sm:px-4">
      <h3 className="text-[44px] font-extrabold mb-[32px] text-[#341D04] leading-tight">
        Explore Santali Language & History
      </h3>
      <div className="flex flex-col md:flex-row gap-[40px] items-start">
        {/* Overlapping images */}
        <div className="relative w-[400px] h-[260px]">
          <img
            src={communityPhoto}
            alt="Santali Community"
            className="rounded-[16px] w-[320px] h-[250px] object-cover block"
          />
          <img
            src={santalAlphabet}
            alt="Santali Alphabet"
            className="rounded-[16px] w-[295px] h-[166px] object-cover absolute left-[170px] bottom-[-130px] shadow-lg bg-[#FDE6B0] border-[4px] border-[#FDE6B0]"
            style={{ zIndex: 2 }}
          />
        </div>
        {/* Info Card */}
        <div className="bg-[#8B4C0A] text-white rounded-[16px] shadow-lg flex-1 flex flex-col justify-center ml-0 md:ml-[40px] p-[44px] max-w-[700px]">
          <div className="font-extrabold mb-[24px] text-[32px]">Did You know</div>
          <p className="mb-[44px] text-[20px] leading-snug font-medium">
            Santal is a Kherwarian Munda language spoken by the Santal people across eastern India and neighboring countries. With ~7.6 million speakers, it's the most widely spoken Munda language and officially recognized in India. It uses the Ol Chiki script, developed in 1925 by Raghunath Murmu.
          </p>
          <button className="font-bold bg-[#FFA94D] text-white rounded-[16px] text-[24px] px-[32px] py-[24px] w-[328px] shadow">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}