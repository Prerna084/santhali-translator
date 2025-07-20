import React from "react";
import communityArt from "../assets/group.png";

export default function CommunitySection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto mt-[64px] px-2 sm:px-4">
      {/* Section Heading */}
      <div className="font-extrabold text-[40px] text-[#341D04] mb-[-50px] leading-tight">
        Help us to grow as a community
      </div>
      {/* Card + Illustration Row */}
      <div className="flex flex-col md:flex-row items-end gap-[48px]">
        {/* Left: Suggestion Card */}
        <div className="bg-[#FBC887] border-[#341D04] rounded-[24px] shadow p-[40px] max-w-[600px] flex-1 flex flex-col justify-center">
          <div className="font-bold text-[20px] text-[#341D04] mb-[8px]">
            Know a Santhali word we're missing?
          </div>
          <div className="text-[16px] text-[#341D04] mb-[32px]">
            Suggest some words or phrases you think should be added — your contribution helps preserve and grow the language!
          </div>
          <button className="bg-[#341D04] text-white font-extrabold text-[22px] rounded-full px-[40px] py-[18px] mx-auto shadow transition hover:bg-[#5a2d06]">
            Suggest words!
          </button>
        </div>
        {/* Right: Illustration */}
        <img
          src={communityArt}
          alt="Santhali Community Art"
          className="w-[500px] h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </section>
  );
}