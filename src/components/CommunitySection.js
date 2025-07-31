import React, { useState } from "react";
import communityArt from "../assets/group.png";

export default function CommunitySection() {
  const [suggestion, setSuggestion] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitSuggestion = async () => {
  if (!suggestion.trim()) {
    setFeedback("Please enter a suggestion.");
    return;
  }

  setLoading(true);
  setFeedback("");

  try {
    const response = await fetch("http://localhost:5000/save-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: suggestion, // ✅ correct key expected by backend
      }),
    });

    if (response.ok) {
      setFeedback("Thanks for your feedback!");
      setSuggestion("");
    } else {
      const err = await response.json();
      setFeedback(err.error || "Failed to send feedback. Try again.");
    }
  } catch (error) {
    setFeedback("Server error. Try again later.");
  }

  setLoading(false);
};


  return (
    <section className="w-full max-w-[1280px] mx-auto mt-[64px] px-2 sm:px-4">
      {/* Section Heading */}
      <div className="font-extrabold text-[40px] text-[#341D04] mb-6 leading-tight">
        Help us to grow as a community
      </div>

      {/* Card + Illustration Row */}
      <div className="flex flex-col md:flex-row items-end gap-[48px]">
        {/* Left: Suggestion Card */}
        <div className="bg-[rgb(246,198,136)] border-[#341D04] rounded-[24px] shadow p-[40px] max-w-[600px] flex-1 flex flex-col justify-center">
          <div className="font-bold text-[20px] text-[#341D04] mb-[8px]">
            Have feedback for us?
          </div>
          <div className="text-[16px] text-[#341D04] mb-[16px]">
            Tell us what you think — your feedback helps us improve and grow the
            platform!
          </div>

          {/* Suggestion Textarea */}
          <textarea
            className="w-full p-3 rounded-md border-2 border-[#341D04] text-base font-roboto resize-none mb-4"
            rows={3}
            placeholder="Type your feedback, suggestion, or word & meaning here..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            disabled={loading}
          />

          <button
            onClick={handleSubmitSuggestion}
            disabled={loading}
            className="bg-[#341D04] text-white font-extrabold text-[20px] rounded-full px-[32px] py-[14px] mx-auto shadow transition hover:bg-[#5a2d06] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Feedback"}
          </button>

          {/* Feedback Message */}
          {feedback && (
            <div className="mt-4 text-center text-[#341D04] font-medium">
              {feedback}
            </div>
          )}
        </div>

        {/* Right: Illustration */}
        <img
          src={communityArt}
          alt="Santhali Community Art"
          className="w-[500px] h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
