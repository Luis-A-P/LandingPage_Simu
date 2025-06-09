import React, { useRef, useEffect, useState } from "react";

export default function Simulacion1() {
  const canvasRef = useRef(null);
  const [piston, setPiston] = useState(false);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 400, 100);
    ctx.fillStyle = "#555";
    ctx.fillRect(50, 40, 300, 20);
    ctx.fillStyle = piston ? "#00ff88" : "#444";
    ctx.fillRect(50, 45, piston ? 200 : 20, 10);
  }, [piston]);

  return (
    <div className="section">
      <h2>Simulación 1: Cilindro de Simple Efecto</h2>
      <canvas ref={canvasRef} width="400" height="100"></canvas>
      <button className="btn" onClick={() => setPiston(!piston)}>
        Activar/Desactivar
      </button>
    </div>
  );
}