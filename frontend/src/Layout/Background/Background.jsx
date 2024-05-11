import React, { useRef, useEffect } from "react";
import "./Background.css";

const Background = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let characters = ["0", "1"];
    let columns = Math.floor(document.documentElement.clientWidth / 10);
    let drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(
        Math.random() * document.documentElement.clientHeight
      );
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // green text
      ctx.font = "12px monospace";

      for (let i = 0; i < drops.length; i++) {
        let text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * 10, drops[i] * 10);

        if (drops[i] * 10 > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animationId = setInterval(draw, 50);

    return () => {
      clearInterval(animationId);
    };
  }, []);

  return (
    <div className="background">
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={document.documentElement.clientWidth}
          height={document.documentElement.clientHeight}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
