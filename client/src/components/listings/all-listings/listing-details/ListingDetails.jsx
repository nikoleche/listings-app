import { Link, useParams } from "react-router-dom";

import { useRef } from "react";
import { useGetListing } from "../../../../hooks/useListings";
import { useScroll } from "../../../../hooks/useScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ListingDetails() {
  const { listingId } = useParams();
  const [listing, setListing] = useGetListing(listingId);

  const scrollRef = useRef(null);
  useScroll(scrollRef);

  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h2>Listing details</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-listing" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="item">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={listing.imageURL} />
                  </div>
                  <div className="col-lg-6">
                    <div className="right-content align-self-top">
                      <h4>{listing.title}</h4>
                      <p>{listing.summary}</p>
                      <br></br>
                      <div className="left-content align-self-center">
                        <ul className="info">
                          <li>
                            <div className="main-white-button">
                              <Link to={`/listings/details`}>
                                <FontAwesomeIcon icon={faHeart} />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <img
                              src="http://localhost:5173/assets/images/listing-icon-dollar.png"
                              alt="Price"
                            />
                            $ {listing.price}
                          </li>
                          <li>
                            <img
                              src="http://localhost:5173/assets/images/listing-icon-location.png"
                              alt="Location"
                            />
                            {listing.location}
                          </li>
                          <li>
                            <img
                              src="http://localhost:5173/assets/images/listing-icon-telephone.png"
                              alt="Location"
                            />
                            {listing.phoneNumber}
                          </li>
                          <li>
                            <img
                              src="http://localhost:5173/assets/images/listing-icon-email.png"
                              alt="Location"
                            />
                            {listing.email}
                          </li>
                        </ul>
                      </div>
                    </div>
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

{
  {
    /* <div className="col-lg-3">
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
              </div> */
  }
}
