import React from "react";

export default function CardsSection() {
  return (
    <section className="w-full flex justify-center mt-10 px-2 sm:px-4 md:px-[80px]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-[24px] w-full max-w-screen-lg">
        {/* Card 1 */}
        <div className="flex flex-col justify-between bg-[#F8E4C1] border border-[#E2B77A] rounded-[16px] shadow-lg p-4 md:p-[32px] w-full md:w-1/3 min-h-[200px]">
          <div className="flex items-center font-bold text-lg md:text-[24px] text-[#341D04]">
            <span className="text-green-700 text-xl md:text-[28px] mr-2">🗨️</span>
            <span>Simple<br className="block md:hidden" /> Santhali Phrases</span>
            <span className="ml-auto text-[#341D04]">{'>'}</span>
          </div>
          <div className="mt-3 text-[#341D04] text-base md:text-[18px]">"Hello"</div>
          <div className="flex items-center mt-3">
            <span className="text-[#C89B3C] font-bold text-lg md:text-[28px]">Johar</span>
            <span className="ml-auto text-[#341D04] text-lg md:text-[24px]">🔊</span>
          </div>
        </div>
        {/* Card 2 (Learn Santhali Basics) */}
        <div className="flex flex-col justify-between bg-[#F8E4C1] border border-[#E2B77A] rounded-[16px] shadow-lg p-4 md:p-[32px] w-full md:w-1/3 min-h-[200px]">
          <div className="flex items-center font-bold text-lg md:text-[24px] text-[#341D04]">
            <span className="text-green-700 text-xl md:text-[28px] mr-2">📖</span>
            <span>Learn<br className="block md:hidden" /> Santhali Basics</span>
            <span className="ml-auto text-[#341D04]">{'>'}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-[16px] mt-6 w-full">
            {[
              { icon: "🅰️", label: "Alphabet" },
              { icon: "🔢", label: "Numbers" },
              { icon: "🎨", label: "Colors" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center bg-[#FFF6E9] border border-[#E2B77A] rounded-[12px] px-4 md:px-[24px] py-2 md:py-[16px] text-[#341D04] font-semibold text-sm md:text-[16px] flex-1 min-w-[80px]"
              >
                <span className="text-lg md:text-[24px] mb-1">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col justify-between bg-[#F8E4C1] border border-[#E2B77A] rounded-[16px] shadow-lg p-4 md:p-[32px] w-full md:w-1/3 min-h-[200px]">
          <div className="flex items-center font-bold text-lg md:text-[24px] text-[#341D04]">
            <span className="text-green-700 text-xl md:text-[28px] mr-2">🌟</span>
            <span>Word of<br className="block md:hidden" /> the day</span>
            <span className="ml-auto text-[#341D04]">{'>'}</span>
          </div>
          <div className="mt-3 text-[#341D04] text-base md:text-[18px]">"Friend"</div>
          <div className="flex items-center mt-3">
            <span className="text-[#C89B3C] font-bold text-lg md:text-[28px]">gāte or jotāw</span>
            <span className="ml-auto text-[#341D04] text-lg md:text-[24px]">🔊</span>
          </div>
        </div>
      </div>
    </section>
  );
}