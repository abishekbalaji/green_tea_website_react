import "./Header.scss";

import HeaderTextSection from "../HeaderTextSection/HeaderTextSection";
import Carousal from "../Carousal/Carousal";

const Header = () => {
  return (
    <div className="header-container">
    <Carousal />
    <HeaderTextSection />
    </div>
  );
};

export default Header;
