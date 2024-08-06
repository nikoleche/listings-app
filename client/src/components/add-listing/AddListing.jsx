import { useRef } from "react";
import { useScroll } from "../../hooks/useScroll";

import styles from "./AddListing.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function AddListing() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                {/* top-text header-text */}
                <h2>Add your own listings here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-listing" ref={scrollRef}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="item">
                <div className="row">
                  <form id="add-listing">
                    <h2>
                      Upload a listing to our directory&nbsp;
                      <FontAwesomeIcon icon={faCloudArrowUp} />
                    </h2>
                    <br></br>
                    <div className="form-group">
                      <label htmlFor="title">Title:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">Select a category:</label>
                      <select className="form-control" id="category">
                        <option>Restaurants</option>
                        <option>Nightlife</option>
                        <option>Shops</option>
                        <option>Museums</option>
                        <option>Activities</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Location:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price per person:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Image URL:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="imageUrl"
                        placeholder="https://"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone number:</label>
                      <input
                        type="phoneNumber"
                        className="form-control"
                        id="phoneNumber"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Email address:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="user@gmail.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                      ></textarea>
                    </div>
                    <div>
                      <br></br>
                      <button type="submit" className={styles["submit-btn"]}>
                        Submit
                      </button>
                    </div>
                  </form>
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
}
