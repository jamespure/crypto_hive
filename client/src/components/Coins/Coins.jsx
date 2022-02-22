import Coin from "../Coin/Coin";
import "./Coins.css";
import { Table } from "react-bootstrap";

const Coins = () => {
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
            <th className="change thead__cell ">{"24 h".toUpperCase()}</th>
          </tr>
        </thead>

        <Coin />
      </Table>
    </section>
  );
};

export default Coins;
