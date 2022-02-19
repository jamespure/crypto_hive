import { useCoins } from "../../contexts/coinsContext";
import { useSearch } from "../../contexts/searchContext";
import "./Coin.css";

const Coin = () => {
  const coins = useCoins();
  const { searchTerm } = useSearch();

  return (
    <tbody className="tbody">
      {coins
        .filter((coin) => {
          if (searchTerm === "") {
            return coin;
          } else if (
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return coin;
          }
        })
        .map((coin) => (
          <tr className="tbody__row" key={coin.uuid}>
            <td className="tbody__cell">
              {coin.rank}
              <span className="coin__icon">
                <img src={coin.iconUrl} alt="" style={{ width: "32px" }} />
              </span>
              <div className="coin__name__group">
                {coin.name}
                <br />
                <span>{coin.symbol}</span>
              </div>
            </td>
            <td className="">$ {Math.round(coin.price * 100) / 100}</td>
            <td className="table table__cell table__cell__2-of-4 market">
              $ {coin.marketCap}
            </td>
            <td className="coin__change">{coin.change}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default Coin;
