import React from "react";
import TranslatorSection from "./TranslatorSection";
import CardsSection from "./CardsSection";
import ExploreSection from "./ExploreSection";
import CommunitySection from "./CommunitySection";



export default function Main() {
  return (
    <main className="w-full flex flex-col items-center px-2 space-y-8">
      <TranslatorSection />
      <CardsSection />
      <ExploreSection />
      <CommunitySection />
      
    </main>
  );
}