import React from "react";

export default function CardsSection() {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-5xl px-2 sm:px-4">
        {/* Card 1 */}
        <div className="flex flex-col justify-between bg-[#FFF6E9] border border-[#E2B77A] rounded-xl shadow p-4 md:p-6 w-full md:w-1/3 min-h-[158px]">
          <div className="flex items-center gap-2 font-bold text-base md:text-lg text-[#341D04]">
            <span className="text-green-700">🗨️</span>
            Simple Santhali Phrases
            <span className="ml-auto text-[#341D04]">{'>'}</span>
          </div>
          <div className="mt-2 text-[#341D04] text-sm md:text-base">"Hello"</div>
          <div className="flex items-center mt-2">
            <span className="text-[#C89B3C] font-bold text-lg md:text-2xl">Johar</span>
            <span className="ml-auto text-[#341D04]">🔊</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col justify-between bg-[#FFF6E9] border border-[#E2B77A] rounded-xl shadow p-4 md:p-6 w-full md:w-1/3 min-h-[158px]">
          <div className="flex items-center gap-2 font-bold text-base md:text-lg text-[#341D04]">
            <span className="text-green-700">📖</span>
            Learn Santhali Basics
            <span className="ml-auto text-[#341D04]">{'>'}</span>
          </div>
          <div className="flex gap-2 md:gap-3 mt-4">
            <div className="flex flex-col items-center bg-[#FFF6E9] border border-[#E2B77A] rounded-lg px-2 py-1 md:px-4 md:py-2 text-[#341D04] font-semibold text-xs md:text-base">
              <span className="text-lg md:text-2xl">🅰️</span>
              Alphabet
            </div>
            <div className="flex flex-col items-center bg-[#FFF6E9] border border-[#E2B77A] rounded-lg px-2 py-1 md:px-4 md:py-2 text-[#341D04] font-semibold text-xs md:text-base">
              <span className="text-lg md:text-2xl">🔢</span>
              Numbers
            </div>
            <div className="flex flex-col items-center bg-[#FFF6E9] border border-[#E2B77A] rounded-lg px-2 py-1 md:px-4 md:py-2 text-[#341D04] font-semibold text-xs md:text-base">
              <span className="text-lg md:text-2xl">🎨</span>
              Colors
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col justify-between bg-[#FFF6E9] border border-[#E2B77A] rounded-xl shadow p-4 md:p-6 w-full md:w-1/3 min-h-[158px]">
          <div className="flex items-center gap-2 font-bold text-base md:text-lg text-[#341D04]">
            <span className="text-green-700">🌟</span>
            Word of the day
            <span className="ml-auto text-[#341D04]">{'>'}</span>
          </div>
          <div className="mt-2 text-[#341D04] text-sm md:text-base">"Friend"</div>
          <div className="flex items-center mt-2">
            <span className="text-[#C89B3C] font-bold text-lg md:text-2xl">gāte or jotāw</span>
            <span className="ml-auto text-[#341D04]">🔊</span>
          </div>
        </div>
      </div>
    </section>
  );
}