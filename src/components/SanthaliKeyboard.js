import React from "react";

const OL_CHIKI_CHARS = [
  "ᱚ", "ᱛ", "ᱜ", "ᱝ", "ᱞ", "ᱟ", "ᱠ", "ᱡ", "ᱢ", "ᱣ",
  "ᱤ", "ᱥ", "ᱦ", "ᱧ", "ᱨ", "ᱩ", "ᱪ", "ᱫ", "ᱬ", "ᱭ",
  "ᱮ", "ᱯ", "ᱰ", "ᱱ", "ᱲ", "ᱳ", "ᱴ", "ᱵ", "ᱶ", "ᱷ",
  "ᱸ", "ᱹ", "ᱺ", "ᱻ", "ᱼ", "ᱽ", "᱾", "᱿"
];

export default function SanthaliKeyboard({ onInput }) {
  return (
    <div className="fixed bottom-8 right-8 bg-white border border-gray-300 rounded-xl shadow-lg p-4 z-50 flex flex-wrap w-[340px]">
      {OL_CHIKI_CHARS.map((char, idx) => (
        <button
          key={idx}
          type="button"
          className="w-9 h-9 m-1 text-2xl border border-gray-200 rounded-md bg-gray-50 hover:bg-yellow-100 transition-colors duration-150"
          onClick={() => onInput && onInput(char)}
          tabIndex={-1}
        >
          {char}
        </button>
      ))}
    </div>
  );
}