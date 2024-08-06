import { useNavigate, useParams } from "react-router-dom";

import { useRef } from "react";
import { useGetListing } from "../../../../hooks/useListings";
import { useScroll } from "../../../../hooks/useScroll";
import ListingReviews from "./ListingReviews";

import styles from "./ListingDetails.module.css";
import listingsAPI from "../../../../api/listingsAPI";

export default function ListingDetails() {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const [listing] = useGetListing(listingId);

  const scrollRef = useRef(null);
  useScroll(scrollRef);

  async function listingDeleteHandler() {
    try {
      await listingsAPI.removeListing(listingId);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

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
                          <li>
                            <button className={styles["edit-btn"]}>Edit</button>
                            <button
                              className={styles["delete-btn"]}
                              onClick={listingDeleteHandler}
                            >
                              Delete
                            </button>
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
      <ListingReviews />
    </>
  );
}
