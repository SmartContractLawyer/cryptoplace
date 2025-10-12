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
          <p>Precio</p>
          <p style={{ textAlign: "center" }}>Cambio 24hrs</p>
          <p className="market-cap">Capitalización</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <img alt="" height="30" src={item.image} width="30" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
              style={{ textAlign: "center" }}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
