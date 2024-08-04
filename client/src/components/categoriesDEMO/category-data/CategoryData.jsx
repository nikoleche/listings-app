import Recent from "../../listings/all-listings/AllListings";

export default function CategoryData(props) {
  return (
    <div>
      <div className="thumb">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="top-icon">
                    <span className="icon">
                      <img src={props.iconURL} alt={props.category} />
                      <h4>{props.category}</h4>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-white-button">
                    <a href="#">Browse all {props.category}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="description">
              <div className="row">
                <div className="col-lg-9">
                  <h4>{props.category} summary</h4>
                  <p>{props.description}</p>
                </div>
                <div className="col-lg-3">
                  <div className="text-icon">
                    <h4>
                      <img
                        src="assets/images/listing-icon-heading.png"
                        alt=""
                      />
                      Total Listings
                    </h4>
                  </div>
                  <span className="list-item">
                    This Week: 200 Listings &amp; 150 Sales
                    <br />
                    This Month: 1,800 Listings &amp; 1,560 Sales
                    <br />
                    This Year: 16,000 Listings &amp; 14,000 Sales
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="listing-item">
              <div className="left-image">
                <p>Test</p>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-12">
            <div className="general-info">
              <div className="row">
                <div className="col-lg-12">
                  <h4>{props.category}</h4>
                  <p>{props.description}</p>
                  <span className="list-item">
                    * Listing should have all the proper documents before being
                    checked in.
                    <br />
                    ** Listing will be manually reviewed by our team members.{" "}
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
