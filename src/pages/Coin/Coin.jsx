import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-UxhPJABzQfXFhU11mjYRwZ17" },
      body: undefined,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHistoricalData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-UxhPJABzQfXFhU11mjYRwZ17" },
      body: undefined,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img alt="" src={coinData.image.large} />
          <p>
            <strong>
              {coinData.name} {coinData.symbol.toUpperCase()}
            </strong>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
