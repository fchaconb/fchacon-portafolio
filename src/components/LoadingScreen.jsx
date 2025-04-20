import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = '#echo "Fabian Chacon"';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#f6f6f4] text-black flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">| </span>
      </div>
      <div className="w-[360px] h-[5px] bg-gray-500 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#15616D] shadow-[0_0_15px_#15616D] animate-loading-bar">
          {" "}
        </div>
      </div>
    </div>
  );
};
