import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Precios de Criptomonedas</h1>
        <p>Bienvenidos!</p>
        <form>
          <input type="text" placeholder="Nombre de criptomoneda..." />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Monedas</p>
          <p style={{ textAlign: "center" }}>Cambio 24hrs</p>
          <p className="market-cap">Capitalización</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
