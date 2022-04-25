import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { historicalData } from "../../config/api";

const CoinChart = ({ id }) => {
  const [coinHistory, setCoinHistory] = useState(1);
  const [day, setDay] = useState(1);

  const fetchCoinHistory = useCallback(async () => {
    const { data } = await axios.get(historicalData(id, day));
    const price = await data.prices;
    setCoinHistory(price);
  }, [id, day]);

  useEffect(() => {
    fetchCoinHistory();
  }, [fetchCoinHistory]);

  return <div>Chart go here</div>;
};

export default CoinChart;
