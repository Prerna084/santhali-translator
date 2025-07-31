import React from "react";
import communityImage from "../assets/community.png";
import alphabetCard from "../assets/alphabet.png";

const ExploreSection = () => {
  return (
    <div className="bg-[#fce6ab] px-4 py-10 md:px-12 lg:px-24">
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 mb-10">
        Explore Santali Language & History
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-10 relative">
        {/* Community Image */}
        <div className="relative w-full md:max-w-[280px] lg:w-[25%] mx-auto lg:mx-0">
          <img
            src={communityImage}
            alt="Community"
            className="rounded-xl w-full object-cover max-h-[160px]"
          />

          {/* Alphabet Image - aligned properly */}
          <img
            src={alphabetCard}
            alt="Alphabet"
            className="absolute bottom-[-100px] left-[105%] w-[260px] rounded-xl shadow-xl border border-gray-300 bg-white"
            style={{ transform: "translateX(-50%)" }}
          />
        </div>

        {/* Did You Know Box */}
        <div className="w-full lg:w-[60%] ml-auto bg-[#9b4d0b] text-white p-4 rounded-xl shadow-xl mt-24 lg:mt-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Did You Know?</h3>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Santali is a Kherwarian Munda language spoken by the Santal people across eastern India and neighboring countries. With ~7.6 million speakers, it's the most widely spoken Munda language and officially recognized in India. It uses the Ol Chiki script, developed in 1925 by Raghunath Murmu.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Santali_language"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
