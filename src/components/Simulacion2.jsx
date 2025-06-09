import React, { useRef, useEffect, useState } from "react";

export default function Simulacion2() {
  const canvasRef = useRef(null);
  const [piston, setPiston] = useState(false);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 400, 100);
    ctx.fillStyle = "#888";
    ctx.fillRect(50, 40, 300, 20);
    ctx.fillStyle = piston ? "#00c9ff" : "#444";
    ctx.fillRect(piston ? 50 : 330, 45, 20, 10);
  }, [piston]);

  return (
    <div className="section">
      <h2>Simulación 2: Cilindro de Doble Efecto</h2>
      <canvas ref={canvasRef} width="400" height="100"></canvas>
      <button className="btn" onClick={() => setPiston(!piston)}>
        Extender/Retraer
      </button>
    </div>
  );
}