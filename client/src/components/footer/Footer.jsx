export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about">
              <div className="logo">
                <img src="assets/images/sample-logo.png" alt="NYC Listings" />
              </div>
              <p></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="helpful-links">
              <h4>Helpful Links</h4>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                    <li>
                      <a href="#">Listing</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
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
          </div>
          <div className="col-lg-12">
            <div className="sub-footer">
              <p>Copyright © All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
