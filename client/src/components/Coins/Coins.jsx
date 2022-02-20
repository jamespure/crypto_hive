import Coin from "../Coin/Coin";
import "./Coins.css";

const Coins = () => {
  return (
    <section className="coins">
      <table className="table">
        <thead className="thead">
          <tr className="thead__row border">
            <th className="thead__cell coins__crypto">
              {"cryptocurrency".toUpperCase()}
            </th>
            <th className="thead__cell coins__price">
              {"price".toUpperCase()}
            </th>
            <th className="thead__cell market">
              {"money market".toUpperCase()}
            </th>
            <th className="change thead__cell ">{"24 h".toUpperCase()}</th>
          </tr>
        </thead>

        <Coin />
      </table>
    </section>
  );
};

export default Coins;
