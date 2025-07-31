import React, { useState, useEffect } from "react";

export default function CardsSection() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const alphabets = [
    "ᱚ","ᱛ","ᱜ","ᱝ","ᱞ","ᱟ","ᱠ","ᱢ","ᱣ","ᱤ","ᱧ","ᱨ","ᱩ",
    "ᱪ","ᱫ","ᱮ","ᱯ","ᱰ","ᱱ","ᱲ","ᱳ","ᱴ","ᱵ","ᱶ","ᱷ","ᱸ","ᱹ","ᱺ","ᱻ","ᱼ"
  ];
  const numbers = ["᱐","᱑","᱒","᱓","᱔","᱕","᱖","᱗","᱘","᱙"];

  const phrases = [
    { en: "Hello", sa: "Johar" },
    { en: "How are you?", sa: "Chetkana menkana?" },
    { en: "Thank you", sa: "Adig bidakena" },
    { en: "Good morning", sa: "Bonga bar hor" },
    { en: "Good night", sa: "Bonga bar sim" },
    { en: "What is your name?", sa: "Na menkana?" },
    { en: "Yes", sa: "Haa" },
    { en: "No", sa: "Na" },
    { en: "Please", sa: "Adig mena" },
    { en: "Come here", sa: "Ene tana" },
  ];

  const words = [
    { en: "Friend", sa: "gāte or jotāw" },
    { en: "Water", sa: "Daka" },
    { en: "Sun", sa: "Kiri" },
    { en: "Moon", sa: "Chando" },
    { en: "Tree", sa: "Roko" },
    { en: "Love", sa: "Hate" },
    { en: "Home", sa: "Ghor" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);

  const nextPhrase = () =>
    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
  const prevPhrase = () =>
    setCurrentPhraseIndex((prev) =>
      prev === 0 ? phrases.length - 1 : prev - 1
    );

  const nextWord = () =>
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  const prevWord = () =>
    setCurrentWordIndex((prev) =>
      prev === 0 ? words.length - 1 : prev - 1
    );

  const speakWord = () => {
    const enSpeech = new SpeechSynthesisUtterance(words[currentWordIndex].en);
    enSpeech.lang = "en-US";
    const saSpeech = new SpeechSynthesisUtterance(words[currentWordIndex].sa);
    saSpeech.lang = "hi-IN";
    speechSynthesis.speak(enSpeech);
    setTimeout(() => speechSynthesis.speak(saSpeech), 800);
  };

  return (
    <section className="w-full flex flex-col items-center mt-6 px-4 sm:px-6 md:px-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-screen-lg">

        {/* Card 1 */}
        <div className="flex flex-col bg-[#F8E4C1] border border-[#E2B77A] rounded-xl shadow p-4">
          <div className="flex items-center font-bold text-[20px] text-[#341D04]">
            <span className="text-green-700 text-xl mr-2">🗨️</span>
            Simple Santhali Phrases
            <span className="ml-auto">{">"}</span>
          </div>

          <div className="mt-2 text-base">"{phrases[currentPhraseIndex].en}"</div>

          <div className="flex items-center mt-2 justify-between">
            <button onClick={prevPhrase} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">⬅</button>
            <span className="text-[#C89B3C] font-semibold">{phrases[currentPhraseIndex].sa}</span>
            <button onClick={nextPhrase} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">➡</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-[#F8E4C1] border border-[#E2B77A] rounded-xl shadow p-4">
          <div className="flex items-center font-bold text-[20px] text-[#341D04]">
            <span className="text-green-700 text-xl mr-2">📖</span>
            Learn Santhali Basics
            <span className="ml-auto">{">"}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button onClick={() => setSelectedSection("Alphabet")} className="flex flex-col items-center bg-[#FFF6E9] border border-[#E2B77A] rounded-lg px-4 py-2 w-[120px] text-sm font-medium hover:bg-yellow-100">
              <span className="text-lg mb-1">🅰️</span> Alphabet
            </button>
            <button onClick={() => setSelectedSection("Numbers")} className="flex flex-col items-center bg-[#FFF6E9] border border-[#E2B77A] rounded-lg px-4 py-2 w-[120px] text-sm font-medium hover:bg-green-100">
              <span className="text-lg mb-1">🔢</span> Numbers
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-[#F8E4C1] border border-[#E2B77A] rounded-xl shadow p-4">
          <div className="flex items-center font-bold text-[20px] text-[#341D04]">
            <span className="text-green-700 text-xl mr-2">🌟</span>
            Word of the Day
            <span className="ml-auto">{">"}</span>
          </div>

          <div className="mt-2 text-base">"{words[currentWordIndex].en}"</div>

          <div className="flex items-center mt-2 justify-between">
            <button onClick={prevWord} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">⬅</button>
            <span className="text-[#C89B3C] font-semibold">{words[currentWordIndex].sa}</span>
            <button onClick={nextWord} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">➡</button>
          </div>

          <button onClick={speakWord} className="mt-2 w-full bg-yellow-200 px-3 py-1 rounded-md hover:bg-yellow-300">
            🔊 Speak
          </button>
        </div>
      </div>

      {/* Alphabet / Numbers Section */}
      {selectedSection && (
        <div className="mt-5 p-4 bg-white border rounded-lg shadow w-full max-w-screen-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">
              {selectedSection === "Alphabet"
                ? "Santhali Alphabets (Ol Chiki)"
                : "Santhali Numbers (Ol Chiki)"}
            </h2>
            <button
              onClick={() => setSelectedSection(null)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              ✖ Close
            </button>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {(selectedSection === "Alphabet" ? alphabets : numbers).map((item) => (
              <button
                key={item}
                className="px-3 py-2 bg-yellow-200 rounded hover:bg-yellow-300 text-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
