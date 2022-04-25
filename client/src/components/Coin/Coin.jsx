import { Table } from "react-bootstrap";
import { useCoins } from "../../contexts/coinsContext";
import { useSearch } from "../../contexts/searchContext";
import "./Coin.css";

const Coin = () => {
  const coins = useCoins();
  const { searchTerm } = useSearch();

  const test = () => {
    console.log(coins.find((index) => index));
  };
  return (
    <section className="coins">
      <Table borderless responsive="sm">
        <thead className="thead border-color">
          <tr>
            <th className="thead__cell coins__crypto">
              {"cryptocurrency".toUpperCase()}
            </th>
            <th className="thead__cell coins__price">
              {"price".toUpperCase()}
            </th>
            <th className="thead__cell market">
              {"money market".toUpperCase()}
            </th>
            <th className="change thead__cell ">{"24h".toUpperCase()}</th>
          </tr>
        </thead>
        <tbody>
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
              <tr
                className="border-color align-middle"
                key={coin.uuid}
                onClick={test}
              >
                {}
                <td className="">
                  <div className="profile d-flex align-items-center">
                    <span className="coin__rank">{coin.rank}</span>
                    <span className="coin__icon">
                      <img
                        src={coin.iconUrl}
                        alt=""
                        style={{ width: "24px", height: "24px" }}
                      />
                    </span>
                    <div className="coin">
                      <span className="coin__name">{coin.name}</span>
                      <br />
                      <span className="coin__symbol">{coin.symbol}</span>
                    </div>
                  </div>
                </td>
                <td className="">
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
      </Table>
    </section>
  );
};

export default Coin;
