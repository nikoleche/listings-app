import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo"></a>
              {/* <!-- ***** Logo End ***** --> */}
              {/* <!-- ***** Menu Start ***** --> */}
              <ul className="nav">
                <li>
                  <NavLink
                    to={"/"}
                    style={({ isActive }) =>
                      isActive ? { color: "#50b498" } : {}
                    }
                  >
                    <b>Home</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/category"}
                    style={({ isActive }) =>
                      isActive ? { color: "#50b498" } : {}
                    }
                  >
                    <b>Categories</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/listings"}
                    style={({ isActive }) =>
                      isActive ? { color: "#50b498" } : {}
                    }
                  >
                    <b>Listings</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/login"}
                    style={({ isActive }) =>
                      isActive ? { color: "#50b498" } : {}
                    }
                  >
                    <div className="main-white-button">
                      <i className="fa fa-user"></i> <b>Login</b>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/register"}
                    style={({ isActive }) =>
                      isActive ? { color: "#50b498" } : {}
                    }
                  >
                    <div className="main-white-button">
                      <i className="fa fa-user-plus"></i> <b>Register</b>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <div className="main-white-button">
                    <a href="#">
                      <i className="fa fa-plus"></i> Add Listing
                    </a>
                  </div>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
