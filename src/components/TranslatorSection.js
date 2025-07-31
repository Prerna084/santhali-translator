import React, { useRef, useState, useEffect } from "react";
import woman from "../assets/woman.png";
import SanthaliKeyboard from "./SanthaliKeyboard";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

export default function TranslatorSection() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [customTranslation, setCustomTranslation] = useState("");
  const [popupMsg, setPopupMsg] = useState("");
  const [isSanthaliToEnglish, setIsSanthaliToEnglish] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowKeyboard(scrollTop < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSanthaliKeyboardInput = (char) => {
    if (isSanthaliToEnglish) {
      setInput((prev) => prev + char);
      inputRef.current?.focus();
    } else if (showUpdateInput) {
      setCustomTranslation((prev) => prev + char);
    }
  };

  const saveTranslationToServer = async (input, output, direction, updatedText = "") => {
    await fetch("http://localhost:5000/save-translation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input, output, direction, updatedText }),
    });
  };

  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    setShowUpdateInput(false);
    setPopupMsg("");

    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          target: isSanthaliToEnglish ? "en" : "sat",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.translation);
        setCustomTranslation(data.translation);
        await saveTranslationToServer(
          input,
          data.translation,
          isSanthaliToEnglish ? "Santhali → English" : "English → Santhali"
        );
      } else {
        setError(data.error || "Translation failed");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }

    setLoading(false);
  };

  const handleSubmit = () => {
    setPopupMsg("Yay!");
    setInput("");              // clear input box
    setOutput("");             // clear output box
    setCustomTranslation("");  // also clear this in case
  };
  const handleUpdate = () => {
    setShowUpdateInput(true);
    setCustomTranslation(output);
    setPopupMsg("");
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setOutput(customTranslation);
    setShowUpdateInput(false);
    setPopupMsg("Thank you!");

    await saveTranslationToServer(
      input,
      output,
      isSanthaliToEnglish ? "Santhali → English" : "English → Santhali",
      customTranslation
    );
      // Clear all boxes after successful update
    setInput("");              // Clear input box
    setOutput("");             // Clear output box
    setCustomTranslation("");  // Clear editable field
  };

  const handleClosePopup = () => setPopupMsg("");

  const handleToggleDirection = () => {
    setIsSanthaliToEnglish((prev) => !prev);
    setInput("");
    setOutput("");
    setError("");
    setShowUpdateInput(false);
    setPopupMsg("");
    setCustomTranslation("");
  };

  return (
    <section className="w-full flex flex-col items-center relative mt-8 px-2">
      {/* Heading */}
      <div className="w-full max-w-4xl mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#341D04] font-roboto mb-2 text-left">
          Namaskar!<br />Ready to Dive into Santhali?
        </h2>
      </div>

      {/* Language Toggle */}
      <div className="w-full max-w-4xl flex justify-center mb-4 z-10">
        <button
          className="flex items-center gap-2 bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow font-roboto hover:bg-yellow-500 transition"
          onClick={handleToggleDirection}
        >
          {isSanthaliToEnglish ? "Santhali → English" : "English → Santhali"}
        </button>
      </div>

      {/* Input and Output */}
      <div className="w-full max-w-4xl mb-6 relative flex flex-row gap-4 items-center" style={{ minHeight: 180 }}>
        <img
          src={woman}
          alt="Santhali Woman"
          className="absolute z-0 pointer-events-none"
          style={{ right: "32px", top: "-150px", height: "220px", userSelect: "none" }}
        />

        <div className="relative flex-1 z-10 flex flex-col justify-between h-36">
          <textarea
            ref={inputRef}
            className="bg-[#F8E4C1] border-2 border-green-600 rounded-lg p-4 w-full h-28 resize-none text-base font-roboto"
            placeholder={isSanthaliToEnglish ? "Henda ho" : "Hello"}
            maxLength={5000}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>

        <div className="relative flex-1 z-10 flex flex-col justify-between h-36">
          {showUpdateInput ? (
            <form onSubmit={handleUpdateSubmit}>
              <textarea
                className="bg-[#F8E4C1] border-2 border-blue-600 rounded-lg p-4 w-full h-28 resize-none text-base font-roboto"
                value={customTranslation}
                onChange={e => setCustomTranslation(e.target.value)}
                autoFocus
              />
              <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                Submit Update
              </button>
            </form>
          ) : (
            <textarea
              className="bg-[#F8E4C1] border-2 border-green-600 rounded-lg p-4 w-full h-28 resize-none text-base font-roboto"
              placeholder={isSanthaliToEnglish ? "Hello" : "Henda ho"}
              value={output}
              readOnly
            />
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-4xl flex justify-center gap-4">
        <button
          className="bg-[#341D04] text-white px-10 py-3 rounded-lg font-semibold text-lg shadow font-roboto hover:bg-green-700 transition"
          onClick={handleTranslate}
          disabled={loading || !input.trim()}
        >
          {loading ? "Translating..." : "Translate it!"}
        </button>

        {output && !showUpdateInput && (
          <>
            <button
              className="bg-green-600 hover:bg-green-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow transition"
              onClick={handleSubmit}
            >
              <Check size={24} />
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow transition"
              onClick={handleUpdate}
            >
              <X size={24} />
            </button>
          </>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 p-2 bg-red-100 rounded text-red-700 max-w-4xl w-full text-center">
          {error}
        </div>
      )}

      {/* Popup */}
      {popupMsg && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-green-600 rounded-lg p-8 shadow-lg text-2xl font-bold text-green-700 flex flex-col items-center">
            {popupMsg}
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Keyboard with slide in/out */}
      <AnimatePresence>
        {(isSanthaliToEnglish || (!isSanthaliToEnglish && showUpdateInput)) && showKeyboard && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SanthaliKeyboard onInput={handleSanthaliKeyboardInput} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}