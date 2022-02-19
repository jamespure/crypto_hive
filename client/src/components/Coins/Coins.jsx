import Coin from "../Coin/Coin";
import "./Coins.css";

const Coins = () => {
  return (
    <section className="coins">
      <table className="table">
        <thead className="thead">
          <tr>
            <td className="coins__crypto">{"cryptocurrency".toUpperCase()}</td>
            <td className="coins__price">{"price".toUpperCase()}</td>
            <td className="market">{"money market".toUpperCase()}</td>
            <td className="change">{"24 h".toUpperCase()}</td>
          </tr>
        </thead>
        <div className="border"></div>
        <Coin />
      </table>
    </section>
  );
};

export default Coins;
