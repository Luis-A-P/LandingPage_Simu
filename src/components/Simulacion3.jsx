import React, { useRef } from "react";

export default function Simulacion3() {
  const canvasRef = useRef(null);

  const draw = (a, b) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 500, 100);
    ctx.fillStyle = "#777";
    ctx.fillRect(40, 40, 100, 20);
    ctx.fillRect(340, 40, 100, 20);
    ctx.fillStyle = "#00ff88";
    ctx.fillRect(a, 45, 20, 10);
    ctx.fillRect(b, 45, 20, 10);
  };

  const startSequence = () => {
    let step = 0;
    let a = 50;
    let b = 350;
    draw(a, b);
    const interval = setInterval(() => {
      if (step === 0) a = 120;
      else if (step === 1) b = 420;
      else if (step === 2) b = 350;
      else if (step === 3) a = 50;
      else clearInterval(interval);
      draw(a, b);
      step++;
    }, 800);
  };

  return (
    <div className="section">
      <h2>Simulación 3: Secuencia A+B-B-A</h2>
      <canvas ref={canvasRef} width="500" height="100"></canvas>
      <button className="btn" onClick={startSequence}>
        Iniciar Secuencia
      </button>
    </div>
  );
}