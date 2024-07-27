import Browse from "./Browse";

export default function AllListings() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h6>Check Out Our Listings</h6>
                <h2>Item listings of Different Categories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Browse />
    </>
  );
}
