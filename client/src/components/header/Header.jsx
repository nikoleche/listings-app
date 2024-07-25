import { Link } from "react-router-dom";
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
                  <Link to={"/"}>
                    <b>Home</b>
                  </Link>
                </li>
                <li>
                  <Link to={"/category"}>
                    <b>Categories</b>
                  </Link>
                </li>
                <li>
                  <Link to={"/all"}>
                    <b>All Listings</b>
                  </Link>
                </li>
                <li>
                  <Link to={"/login"}>
                    <div className="main-white-button">
                      <i className="fa fa-user"></i> Login
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={"/register"}>
                    <div className="main-white-button">
                      <i className="fa fa-user-plus"></i> Register
                    </div>
                  </Link>
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
