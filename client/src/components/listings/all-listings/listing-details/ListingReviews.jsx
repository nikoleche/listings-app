import { useParams } from "react-router-dom";

import { useAuthContext } from "../../../../contexts/AuthContext";
import {
  useCreateReview,
  useGetAllReviews,
} from "../../../../hooks/useReviews";
import { useForm } from "../../../../hooks/useForm";

import styles from "./ListingReviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const initialValues = {
  review: "",
};

export default function ListingReviews() {
  const { listingId } = useParams();
  const createReview = useCreateReview();
  const [reviews, setReviews] = useGetAllReviews(listingId);
  const { isAuthenticated } = useAuthContext();

  const { updateHandler, submitHandler, formValues } = useForm(
    initialValues,
    async ({ review }) => {
      const newReview = await createReview(listingId, review);
      setReviews((previousReviews) => [...previousReviews, newReview]);
    }
  );

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
                    {reviews.map((review) => (
                      <li key={review._id}>
                        <p>
                          {review.author?.email}: {review.text}
                        </p>
                      </li>
                    ))}
                    {reviews.length === 0 && (
                      <p className="lead">
                        There are no reviews for this listing yet.
                      </p>
                    )}
                  </ul>
                </div>
                {isAuthenticated && (
                  <div className="col-lg-6">
                    <div className="right-content align-self-top">
                      <div className="left-content align-self-center">
                        <ul className="info">
                          <form id="reviews" onSubmit={submitHandler}>
                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label htmlFor="review">Leave a review:</label>
                              <textarea
                                className="form-control"
                                id="review"
                                name="review"
                                rows="3"
                                placeholder=""
                                required
                                value={formValues.review}
                                onChange={updateHandler}
                              ></textarea>
                            </div>
                            <div>
                              <button
                                type="submit"
                                className={styles["review-btn"]}
                              >
                                Submit review&nbsp;
                                <FontAwesomeIcon icon={faComments} />
                              </button>
                            </div>
                          </form>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
