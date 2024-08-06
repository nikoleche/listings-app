import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUserCheck,
  faUserLock,
  faUserPlus,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { isAuthenticated } = useAuthContext();

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
              <a href="/" className="logo"></a>
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
                {isAuthenticated ? (
                  <>
                    <li>
                      <NavLink
                        to={"/logout"}
                        style={({ isActive }) =>
                          isActive ? { color: "#50b498" } : {}
                        }
                      >
                        <FontAwesomeIcon icon={faUserXmark} />
                        <b>&nbsp;Logout</b>
                      </NavLink>
                    </li>
                    <li>
                      <div className="main-white-button">
                        <NavLink to={"add-listing"}>
                          <i className="fa fa-plus"></i> Add Listing
                        </NavLink>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to={"/login"}
                        style={({ isActive }) =>
                          isActive ? { color: "#50b498" } : {}
                        }
                      >
                        <FontAwesomeIcon icon={faUserGroup} />
                        <b>&nbsp;Login</b>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/register"}
                        style={({ isActive }) =>
                          isActive ? { color: "#50b498" } : {}
                        }
                      >
                        <FontAwesomeIcon icon={faUserPlus} />
                        <b>&nbsp;Register</b>
                      </NavLink>
                    </li>
                    <li></li>
                  </>
                )}
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
