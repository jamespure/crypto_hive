import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { trending } from "../config/api";

const TrendingContext = createContext([]);

export const useTrending = () => {
  return useContext(TrendingContext);
};

const TrendingContextProvider = ({ children }) => {
  const [trendingCoin, setTrendingCoin] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(trending);
    setTrendingCoin(data.coins);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <TrendingContext.Provider value={trendingCoin}>
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;
