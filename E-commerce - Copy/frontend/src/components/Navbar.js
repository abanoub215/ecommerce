import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import { Badge } from "antd";

function Navbar() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand">
            E-commerce
          </Link>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01 "
            style={{ marginRight: 650 }}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-decoration-none"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="categoryDropdown"
                >
                  <li>
                    <NavLink to="/category/laptops" className="dropdown-item">
                      Laptops
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/mobiles" className="dropdown-item">
                      Mobiles
                    </NavLink>
                  </li>
                </ul>
              </li>
              {!auth.user ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link text-decoration-none"
                    >
                      Sign up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-decoration-none"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link text-decoration-none"
                    >
                      log out
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart.length} showZero>
                  <NavLink
                    to="/cart"
                    className="nav-link text-decoration-none"
                    style={{ textDecoration: "none" }}
                  >
                    🛒
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
