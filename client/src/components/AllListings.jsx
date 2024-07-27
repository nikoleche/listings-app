import Browse from "./Browse";
import { Link, Outlet } from "react-router-dom";
import Recent from "./Recent";

export default function AllListings() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                {/* top-text header-text */}
                <h2>Browse through all available listings, unsorted</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Browse /> */}

      {/* <div className="container">
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#50b498" }}
        >
          <Link to={"/all/restaurants"}>Restaurants</Link>
        </nav>
        <Outlet />
      </div> */}
      <Recent />
    </>
  );
}
