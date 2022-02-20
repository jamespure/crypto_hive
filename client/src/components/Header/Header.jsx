import header_img from "../../assets/header_img.jpg";
import { useSearch } from "../../contexts/searchContext";
import "./Header.css";
const Header = () => {
  const { setSearchTerm } = useSearch();
  return (
    <header>
      <img src={header_img} alt="" className="header_bg" />

      <div
        className="input_group"
        onChange={(e) => setSearchTerm(e.target.value)}
      >
        <h1 className="logo">Crypto Hive!</h1>
        <p>Real time update for your favorite cryptocurrency.</p>
        <input type="text" placeholder="Search For Coin Here..." />
      </div>
    </header>
  );
};

export default Header;
