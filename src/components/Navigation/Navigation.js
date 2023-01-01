import { Link, Outlet } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase";
import { selectCurrentUser } from "../../store/user/userSelector";

import "./Navigation.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <h2>Brand</h2>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <ScrollLink className="nav-link" spy to="about">
            About
          </ScrollLink>
          <ScrollLink spy className="nav-link" to="products">
            Products
          </ScrollLink>
          <ScrollLink spy to="contact" className="nav-link">
            Contact Us
          </ScrollLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <Link className="nav-link">Cart</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
