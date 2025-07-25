import React, { useRef, useState } from "react";
import woman from "../assets/woman.png";
import SanthaliKeyboard from "./SanthaliKeyboard"; // Adjust path if needed

export default function TranslatorSection() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [customTranslation, setCustomTranslation] = useState("");
  const [popupMsg, setPopupMsg] = useState("");
  const [isSanthaliToEnglish, setIsSanthaliToEnglish] = useState(true);

  const inputRef = useRef(null);

  // Keyboard input handler
  const handleSanthaliKeyboardInput = (char) => {
    setInput((prev) => prev + char);
    if (inputRef.current) inputRef.current.focus();
  };

  // Save translation to server (Excel)
  const saveTranslationToServer = async (input, output, direction, updatedText = "") => {
    await fetch("http://localhost:5000/save-translation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input,
        output,
        direction,
        updatedText,
      }),
    });
  };

  // Translation logic
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
        // Save to server after successful translation
        await saveTranslationToServer(
          input,
          data.translation,
          isSanthaliToEnglish ? "Santhali → English" : "English → Santhali",
          ""
        );
      } else {
        setError(data.error || "Translation failed");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }
    setLoading(false);
  };

  // Submit/update/popup logic
  const handleSubmit = () => setPopupMsg("Yay!");
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
    // Save updated translation to server
    await saveTranslationToServer(
      input,
      output,
      isSanthaliToEnglish ? "Santhali → English" : "English → Santhali",
      customTranslation
    );
  };
  const handleClosePopup = () => setPopupMsg("");

  // Toggle direction
  const handleToggleDirection = () => {
    setIsSanthaliToEnglish((prev) => !prev);
    setOutput("");
    setError("");
    setShowUpdateInput(false);
    setPopupMsg("");
  };

  return (
    <section className="w-full flex flex-col items-center relative mt-8 px-2">
      {/* Heading and subheading */}
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
          {isSanthaliToEnglish ? (
            <>
              <span>Santhali</span>
              <span>→</span>
              <span>English</span>
            </>
          ) : (
            <>
              <span>English</span>
              <span>→</span>
              <span>Santhali</span>
            </>
          )}
        </button>
      </div>
      {/* Input boxes with illustration behind */}
      <div className="w-full max-w-4xl mb-6 relative flex flex-row gap-4 items-center" style={{ minHeight: 180 }}>
        {/* Woman Illustration - behind the right box, vertically centered */}
        <img
          src={woman}
          alt="Santhali Woman"
          className="absolute z-0 pointer-events-none"
          style={{
            right: "32px",
            top: "-150px",
            height: "220px",
            userSelect: "none"
          }}
        />
        {/* Input */}
        <div className="relative flex-1 z-10">
          <textarea
            ref={inputRef}
            className="bg-[#F8E4C1] border-2 border-green-600 rounded-lg p-4 w-full h-28 resize-none text-base font-roboto"
            placeholder={isSanthaliToEnglish ? "Henda ho" : "Hello"}
            maxLength={5000}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        {/* Output */}
        <div className="relative flex-1 z-10">
          {showUpdateInput ? (
            <form onSubmit={handleUpdateSubmit}>
              <textarea
                className="bg-[#F8E4C1] border-2 border-blue-600 rounded-lg p-4 w-full h-28 resize-none text-base font-roboto"
                value={customTranslation}
                onChange={e => setCustomTranslation(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
              >
                Submit Update
              </button>
            </form>
          ) : (
            <>
              <textarea
                className="bg-[#F8E4C1] border-2 border-green-600 rounded-lg p-4 w-full h-28 resize-none text-base font-roboto"
                placeholder={isSanthaliToEnglish ? "Hello" : "Henda ho"}
                value={output}
                readOnly
              />
            </>
          )}
        </div>
      </div>
      {/* Translate Button and Submit/Update */}
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
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow font-roboto hover:bg-green-800 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow font-roboto hover:bg-blue-800 transition"
              onClick={handleUpdate}
            >
              Update
            </button>
          </>
        )}
      </div>
      {/* Error Message */}
      {error && (
        <div className="mt-4 p-2 bg-red-100 rounded text-red-700 max-w-4xl w-full text-center">
          {error}
        </div>
      )}
      {/* Popup Message */}
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
      {/* Virtual Santhali Keyboard - only when Santhali to English */}
      {isSanthaliToEnglish && (
        <SanthaliKeyboard onInput={handleSanthaliKeyboardInput} />
      )}
    </section>
  );
}