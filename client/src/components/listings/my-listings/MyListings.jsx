import { useRef } from "react";
import { useScroll } from "../../../hooks/useScroll";
import { useAuthContext } from "../../../contexts/AuthContext";

import { useGetListingsByUser } from "../../../hooks/useListings";
import ListingItem from "../all-listings/listing-item/ListingItem";

export default function MyListings() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const { userId } = useAuthContext();
  const [listings] = useGetListingsByUser(userId);
  console.log(userId);

  return (
    <>
      <div className="page-heading" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h2>All of your listings</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-listing" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="item">
                  <div className="row">
                    {listings.map((listing) => (
                      <ListingItem key={listing._id} {...listing} />
                    ))}
                    {listings.length === 0 && (
                      <p className="lead">
                        You haven't added any listings yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
