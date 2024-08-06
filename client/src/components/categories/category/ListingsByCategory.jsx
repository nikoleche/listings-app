import { useParams } from "react-router-dom";
import { useGetListingsByCategory } from "../../../hooks/useListings";
import ListingItem from "../../listings/all-listings/listing-item/ListingItem";
import { useRef } from "react";
import { useScroll } from "../../../hooks/useScroll";

export default function ListingsByCategory() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const { categoryId } = useParams();
  const [listings] = useGetListingsByCategory(categoryId);

  return (
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
                      There are no listings from this category yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
