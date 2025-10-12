import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
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
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img alt="" height="30" src={item.image} width="30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
