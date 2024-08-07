import { useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetListing } from "../../../../hooks/useListings";
import { useScroll } from "../../../../hooks/useScroll";

import listingsAPI from "../../../../api/listingsAPI";
import { useAuthContext } from "../../../../contexts/AuthContext";

import ListingReviews from "./ListingReviews";

import styles from "./ListingDetails.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ListingDetails() {
  const { listingId } = useParams();
  const navigate = useNavigate();
  const [listing] = useGetListing(listingId);
  const { userId } = useAuthContext();

  const isOwner = userId === listing._ownerId;

  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const [displayModal, setdisplayModal] = useState(false);

  const handleClose = () => setdisplayModal(false);
  const handleShow = () => setdisplayModal(true);

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
                          {isOwner && (
                            <li>
                              <Link to={`/listings/edit/${listingId}`}>
                                <Button className={styles["edit-btn"]}>
                                  Edit
                                </Button>
                                {/* Delete modal */}
                              </Link>
                              <Button
                                className={styles["delete-btn"]}
                                onClick={handleShow}
                              >
                                Delete
                              </Button>
                              <Modal show={displayModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Deletion </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  Woohoo, you are reading this text in a modal!
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    variant="primary"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="outline-danger"
                                    onClick={listingDeleteHandler}
                                  >
                                    Delete
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </li>
                          )}
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
