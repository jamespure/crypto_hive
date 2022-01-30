import { useCoins } from "../../contexts/coinsContext";
import { useSearch } from "../../contexts/searchContext";
import "./Coins.css";

const Coins = () => {
  const coins = useCoins();
  const {searchTerm} = useSearch();

  return (
    <section className="coins">
      <table className="table">
        <thead className="thead">
          <tr className="thead__row">
            <th className="table__cell__1-of-4 thead__cell">CRYPTOCURRENCY</th>
            <th className="table__cell__2-of-4 thead__cell">PRICE</th>
            <th className="table__cell__2-of-4 thead__cell">MARKET CAP</th>
            <th className="change">24H</th>
          </tr>
        </thead>
        <tbody className="tbody table">
          {coins.filter(coin => {
            if (searchTerm === "") {
              return coin
            } else if (coin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return coin;
            }
          }).map((coin) => (
            <tr className="table__row table" key={coin.uuid}>
              <td className="table__cell table table__cell__1-of-4">
                <div className="coin">
                  <h2 className="coin__rank">{coin.rank}</h2>
                  <span className="coin__icon">
                    <img src={coin.iconUrl} alt="" style={{ width: "32px" }} />
                  </span>
                  <div className="coin__name__group">
                    <h2 className="coin__name">{coin.name}</h2>
                    <p>{coin.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="table table__cell table__cell__2-of-4">
                <div className="coin__price">
                  <h2>$ {Math.round(coin.price * 100) / 100}</h2>
                </div>
              </td>
              <td className="table table__cell table__cell__2-of-4">
                <div className="coin__price">
                  <h2>$ {coin.marketCap}</h2>
                </div>
              </td>
              <td>
                <div className="coin__price">
                  <h2>{coin.change}</h2>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Coins;
