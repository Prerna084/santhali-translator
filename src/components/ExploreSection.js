import React from "react";
import communityPhoto from "../assets/community-photo.png";
import santalAlphabet from "../assets/santal-alphabet.png";

export default function ExploreSection() {
  return (
    <section className="w-full max-w-5xl mx-auto mt-12 px-2 sm:px-4">
      <h3 className="text-lg md:text-xl font-bold mb-4 text-[#341D04]">Explore Santali Language & History</h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <img src={communityPhoto} alt="Santali Community" className="rounded-lg w-full md:w-1/3 object-cover" />
        <div className="bg-[#A05A00] text-white rounded-lg p-4 md:p-6 flex-1 flex flex-col justify-center min-w-[200px] shadow">
          <div className="font-bold text-base md:text-lg mb-2">Did You know</div>
          <p className="text-sm md:text-base">
            Santal is a Kherwarian Munda language spoken by the Santal people across eastern India and neighboring countries. With ~7.6 million speakers, it's the most widely spoken Munda language and officially recognized in India. It uses the Ol Chiki script, developed in 1925 by Raghunath Murmu.
          </p>
          <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold">Explore More</button>
        </div>
        <img src={santalAlphabet} alt="Santali Alphabet" className="rounded-lg w-full md:w-1/3 object-cover" />
      </div>
    </section>
  );
}