import ListingItem from "./listing-item/ListingItem";
import { useGetAllListings } from "../../../hooks/useListings";

export default function Recent() {
  const [listings] = useGetAllListings();

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
                  {listings.length === 0 && (
                    <p className="lead">There are no listings yet.</p>
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
