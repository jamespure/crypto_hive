import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { allCoins } from "../config/api";

const CoinsContext = createContext([]);


const CoinsContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

   const fetchCoins = async () => {
     const { data } = await axios.get(allCoins);
     setCoins(data);
   };
   
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <CoinsContext.Provider value={coins}>{children}</CoinsContext.Provider>
  );
};

export default CoinsContextProvider;

export const useCoins = () => {
  return useContext(CoinsContext);
};
