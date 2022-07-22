import { Link } from "react-router-dom";
import { pagePaths } from "../../constants/pages/paths";
import logo from "../../assets/images/logo.png";

export const Logo = () => {
  return (
    <Link to={pagePaths.homePage}>
      <img
        src={logo}
        alt="Test"
        className="w-16 p-2 transition-opacity hover:opacity-80"
      />
    </Link>
  );
};
