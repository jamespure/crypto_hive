import header_img from "../../assets/header_img.jpg";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img src={header_img} alt="" className="header_bg" />
      <div className="input_group">
        <input type="text" />
      </div>
    </header>
  );
};

export default Header;
