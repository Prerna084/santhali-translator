import React from "react";
import woman from "../assets/woman.png";

export default function TranslatorSection() {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="flex flex-col lg:flex-row items-stretch w-full max-w-5xl px-2 sm:px-4">
        {/* Left: Main Translator */}
        <div className="flex-1 flex flex-col justify-center z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#341D04] font-roboto">
            Namaskar!<br />Ready to Dive into Santhali?
          </h2>
          {/* Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <button className="bg-yellow-400 text-white px-4 sm:px-6 py-1 rounded-full font-semibold shadow font-roboto">Santhali</button>
            <span className="text-2xl">⇄</span>
            <button className="bg-green-500 text-white px-4 sm:px-6 py-1 rounded-full font-semibold shadow font-roboto">English</button>
          </div>
          {/* Text Areas */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Santhali Input */}
            <div className="relative flex-1">
              <textarea
                className="border-2 border-green-600 rounded-lg p-3 w-full h-32 resize-none text-base sm:text-lg font-roboto"
                placeholder="Henda ho"
                maxLength={5000}
              />
              <div className="absolute left-3 bottom-2 flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <span role="img" aria-label="mic">🎤</span>
                <span>0/5000</span>
              </div>
            </div>
            {/* English Output */}
            <div className="relative flex-1 mt-4 md:mt-0">
              <textarea
                className="border-2 border-green-600 rounded-lg p-3 w-full h-32 resize-none text-base sm:text-lg font-roboto"
                placeholder="Hello"
                readOnly
              />
              <div className="absolute right-3 bottom-2 flex items-center gap-2 text-gray-400 text-lg">
                <span role="img" aria-label="like">👍</span>
                <span role="img" aria-label="dislike">👎</span>
                <span role="img" aria-label="edit">✏️</span>
              </div>
            </div>
          </div>
          {/* Translate Button */}
          <div className="flex justify-center">
            <button className="bg-[#341D04] text-white px-6 sm:px-10 py-3 rounded-lg font-semibold text-base sm:text-lg shadow font-roboto">
              Translate it!
            </button>
          </div>
        </div>
        {/* Woman Illustration */}
        {/* <div className="hidden lg:flex items-end justify-end w-[120px] md:w-[180px] lg:w-[260px] xl:w-[340px] relative">
          <img src={woman} alt="Santhali Woman" className="flex"
          width={500} height={100}/>
        </div> */}
      </div>
      <div className="items-end justify-end w-[120px] md:w-[180px] lg:w-[260px] xl:w-[340px] relative -z-1">
          <img src={woman} alt="Santhali Woman" className="flex"
          width={500} height={100}/>
        </div>
    </section>
  );
}