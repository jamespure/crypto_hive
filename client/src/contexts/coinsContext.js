import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CoinsContext = createContext([]);

export const useCoins = () => {
  return useContext(CoinsContext);
};

const CoinsContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        "https://crypto-hive.herokuapp.com/coins"
      );
      setCoins(data.data.coins);
    };

    fetchCoins();
  }, []);

  return (
    <CoinsContext.Provider value={coins}>{children}</CoinsContext.Provider>
  );
};

export default CoinsContextProvider;
