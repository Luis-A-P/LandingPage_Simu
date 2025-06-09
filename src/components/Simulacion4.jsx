import React, { useRef, useEffect, useState } from "react";

export default function Simulacion4() {
  const canvasRef = useRef(null);
  const [on, setOn] = useState(false);

  const draw = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 500, 100);
    ctx.fillStyle = "#555";
    ctx.beginPath();
    ctx.arc(250, 50, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = on ? "#00ff88" : "#444";
    ctx.beginPath();
    ctx.arc(250, 50, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(draw, [on]);

  return (
    <div className="section">
      <h2>Simulación 4: Motor Trifásico</h2>
      <canvas ref={canvasRef} width="500" height="100"></canvas>
      <button className="btn" onClick={() => setOn(true)}>Encender Motor</button>
      <button className="btn" onClick={() => setOn(false)}>Apagar Motor</button>
    </div>
  );
}