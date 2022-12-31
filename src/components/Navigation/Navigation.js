import { Link, Outlet } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link className="logo-container">
          <h2>Brand</h2>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='#'>Home</Link>
          <Link className="nav-link">
            <ScrollLink spy to="about">
              About
            </ScrollLink>
          </Link>
          <Link className="nav-link">
            <ScrollLink spy to="products">
              Products
            </ScrollLink>
          </Link>
          <Link className="nav-link">
            <ScrollLink spy to="contact">
              Contact Us
            </ScrollLink>
          </Link>
          <Link className="nav-link">Sign In</Link>
          <Link className="nav-link">Cart</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
