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
                  <a href="index.html" className="active">
                    <b>Home</b>
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <b>Categories</b>
                  </a>
                </li>
                <li>
                  <a href="listing.html">
                    <b>Listings</b>
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <b>Contact Us</b>
                  </a>
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
