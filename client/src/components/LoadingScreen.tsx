import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import loadingSound from "../../src/klingon-hum.mp3";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [dots, setDots] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const loadingMessage = "Five choices. Infinite possibilities. One winner."
  .split(" ");

  const spockQuotes = [
    "Live long and prosper 🖖... unless you lost to paper."
  ];

  const randomQuote = spockQuotes[Math.floor(Math.random() * spockQuotes.length)];

  useEffect(() => {
    const humAudio = new Audio(loadingSound);
    humAudio.loop = true;
    humAudio.volume = 0.3;
    humAudio.play();

    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev < loadingMessage.length ? prev + 1 : prev));
    }, 150); // Faster delay for typewriter effect

    setTimeout(() => {
      clearInterval(interval);
      clearInterval(wordInterval);
      humAudio.pause();
      onComplete();
    }, 70000); // 70 seconds

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
      humAudio.pause();
    };
  }, [onComplete, loadingMessage.length]);


  return (
    <div className="loading-screen">
      <div className="klingon-symbols"></div>

      <div className="loading-text">
        Loading{dots} <br />
        <span className="quantum-text">
          {loadingMessage.slice(0, currentWordIndex).map((word, index) => (
            <span key={index} className="fade-word">
              {word}{" "}
            </span>
          ))}
        </span>
      </div>

      <div className="loading-quote">
        "{randomQuote}"
      </div>

      <div className="red-glowing-dot"></div>
    </div>
  );
};

export default LoadingScreen;
