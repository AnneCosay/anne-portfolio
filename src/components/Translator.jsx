import React, { useState } from "react";
import "./Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("es");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError("⚠️ Please enter text to translate.");
      return;
    }

    setError("");
    setLoading(true);
    setTranslatedText("");

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=en|${targetLang}`
      );

      const data = await response.json();

      if (data.responseData?.translatedText) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        throw new Error("Translation failed");
      }
    } catch (err) {
      setError("❌ Translation failed. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="translator" className="translator-section">
      <div className="translator-container">
        <h2>🌐 Translator</h2>

        <textarea
          className="input-box"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text in English..."
          rows="4"
        />

        <div className="translator-controls">
          <span className="arrow">→</span>
          <select
            className="language-picker"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="tl">Filipino</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="zh">Chinese</option>
          </select>
        </div>

        <button onClick={handleTranslate} disabled={loading}>
          {loading ? "Translating..." : "Translate"}
        </button>

        {error && <p className="error-text">{error}</p>}

        <textarea
          className="output-box"
          value={translatedText}
          readOnly
          placeholder="Translated text will appear here..."
          rows="4"
        />
      </div>
    </section>
  );
};

export default Translator;
