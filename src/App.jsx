import React from "react";
import "./styles/simulador.css";
import Simulacion1 from "./components/Simulacion1";
import Simulacion2 from "./components/Simulacion2";
import Simulacion3 from "./components/Simulacion3";
import Simulacion4 from "./components/Simulacion4";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Simulaciones de Neumática y Electroneumática</h1>
        <p>Desde lo más básico hasta sistemas trifásicos industriales</p>
      </header>
      <Simulacion1 />
      <Simulacion2 />
      <Simulacion3 />
      <Simulacion4 />
    </div>
  );
}