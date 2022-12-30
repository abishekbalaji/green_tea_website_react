import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link className="logo-container">
          <h2>Brand</h2>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link">Home</Link>
          <Link className="nav-link">About</Link>
          <Link className="nav-link">Products</Link>
          <Link className="nav-link">Contact Us</Link>
          <Link className="nav-link">Sign In</Link>
          <Link className="nav-link">Cart</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
