import { useRef } from "react";
import AllListings from "./all-listings/AllListings";
import { useScroll } from "../../hooks/useScroll";

export default function Listings() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);
  return (
    <>
      <div className="page-heading" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h2>Browse through all available listings, unsorted</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllListings />
    </>
  );
}
