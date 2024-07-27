import { useEffect, useState } from "react";
import ListingItem from "./ListingItem";

export default function Recent() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3030/jsonstore/listings");
      const result = await response.json();
      setListings(Object.values(result));
    })();
  }, []);

  return (
    <div className="recent-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* "owl-carousel owl-listing */}
            <div className="">
              <div className="item">
                <div className="row">
                  {listings.map((listing) => (
                    <ListingItem key={listing._id} {...listing} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
