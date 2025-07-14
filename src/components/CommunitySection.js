import React from "react";
import group from "../assets/group.png";

export default function CommunitySection() {
  return (
    <section className="w-full max-w-5xl mx-auto mt-12 px-2 sm:px-4 flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div className="bg-[#FFF6E9] rounded-xl shadow p-4 md:p-6 flex-1 border border-[#E2B77A]">
        <h4 className="font-bold mb-2 text-[#341D04]">Help us to grow as a community</h4>
        <p className="mb-4 text-[#341D04] text-sm md:text-base">
          Know a Santhali word we're missing?<br />
          Suggest some words or phrases you think should be added — your contribution helps preserve and grow the language!
        </p>
        <button className="bg-[#341D04] text-white px-4 py-2 rounded font-semibold">Suggest words!</button>
      </div>
      <img src={group} alt="Community Group" className="h-32 md:h-40" />
    </section>
  );
}