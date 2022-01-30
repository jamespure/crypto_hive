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
        <h1>All Cryptocurrency</h1>
        <input type="text" placeholder="Search For Coin Here..." />
      </div>
    </header>
  );
};

export default Header;
