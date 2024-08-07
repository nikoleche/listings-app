import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about">
              <div className="logo">
                <img
                  src="http://localhost:5173/public/assets/images/sample-logo.png"
                  alt="NYC Listings"
                />
              </div>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="helpful-links">
              <h4 style={{ color: "#50b498" }}>Helpful links</h4>
              <div className="row">
                <div className="col-lg-9">
                  <ul>
                    <li style={{ display: "inline-block", padding: "10px" }}>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li style={{ display: "inline-block", padding: "10px" }}>
                      <Link to={"/categories"}>Categories</Link>
                    </li>
                    <li style={{ display: "inline-block", padding: "10px" }}>
                      <Link to={"/listings"}>Listings</Link>
                    </li>
                    <li style={{ display: "inline-block", padding: "10px" }}>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li style={{ display: "inline-block", padding: "10px" }}>
                      <Link to={"/register"}>Register</Link>
                    </li>
                  </ul>
                  {/* <ul>
                    <li style={{ display: "inline-block" }}>
                      <a href="#">Home</a>
                    </li>
                    <li style={{ display: "inline-block" }}>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Listings</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Awards</a>
                    </li>
                    <li>
                      <a href="#">Useful Sites</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="contact-us">
              <h4>Contact Us</h4>
              <p>27th Street of New Town, Digital Villa</p>
              <div className="row">
                <div className="col-lg-6">
                  <a href="#">010-020-0340</a>
                </div>
                <div className="col-lg-6">
                  <a href="#">090-080-0760</a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-12">
            <div className="sub-footer">
              <p>Copyright NYC Listings © All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
