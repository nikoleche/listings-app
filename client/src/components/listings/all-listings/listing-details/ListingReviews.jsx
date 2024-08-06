import styles from "./ListingReviews.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export default function ListingReviews() {
  return (
    <div className="recent-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="item">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className={styles["title-text"]}>
                    Our users say...&nbsp;
                  </h2>
                  <ul>
                    <br></br>
                    <li>
                      <p>Test Comment</p>
                    </li>
                    <li>
                      <p>Test Comment</p>
                    </li>
                    <li>
                      <p>Test Comment</p>
                    </li>
                    <li>
                      <p>Test Comment</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="right-content align-self-top">
                    <div className="left-content align-self-center">
                      <ul className="info">
                        <form id="reviews" onSubmit={""}>
                          <div
                            className="form-group"
                            style={{ marginBottom: "10px" }}
                          >
                            <label htmlFor="summary">Leave a review:</label>
                            <textarea
                              className="form-control"
                              id="summary"
                              name="summary"
                              rows="3"
                              placeholder=""
                              required
                            ></textarea>
                          </div>
                          <div>
                            <button
                              type="submit"
                              className={styles["review-btn"]}
                            >
                              Submit&nbsp;
                              <FontAwesomeIcon icon={faComments} />
                            </button>
                          </div>
                        </form>
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
  );
}
