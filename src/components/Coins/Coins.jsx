import axios from "axios";
import { useEffect } from "react";
const Coins = () => {
  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get("https://api.coinranking.com/v2/coins", {
        headers: {
          "x-access-token":
            "coinrankingae7bc3454a696a664b91a561b298da166cbc197a0de7683e",
          "Access-Control-Allow-Origin": "https://api.coinranking.com/v2",
        },
      });

      console.log(data);
    };

    fetchCoins();
  }, []);

  return <div></div>;
};

export default Coins;
