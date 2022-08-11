import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <NavLink to="/products">Product Index</NavLink>|
      <NavLink to="/products/new">New Product</NavLink>
    </nav>
  );
};

export default NavBar;
