import { useCoins } from "../../contexts/coinsContext";
import { useSearch } from "../../contexts/searchContext";
import "./Coin.css";

const Coin = () => {
  const coins = useCoins();
  const { searchTerm } = useSearch();

  return (
    <tbody className="table tbody">
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
          <tr className="tbody__row border" key={coin.uuid}>
            <td className="tbody__cell cell__1-of-4">
              <div className="profile">
                <span className="coin__rank">{coin.rank}</span>
                <span className="coin__icon">
                  <img
                    src={coin.iconUrl}
                    alt=""
                    style={{ width: "24px", height: "24px" }}
                  />
                </span>
                <div className="coin__name__group">
                  {coin.name}
                  <br />
                  <span>{coin.symbol}</span>
                </div>
              </div>
            </td>
            <td className="tbody__cell cell__2-of-4">
              <div className="coin__price">
                $ {Math.round(coin.price * 100) / 100}
              </div>
            </td>
            <td className="tbody__cell market">$ {coin.marketCap}</td>
            <td className="tbody__cell coin__change">
              <div className="">{coin.change} %</div>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default Coin;
