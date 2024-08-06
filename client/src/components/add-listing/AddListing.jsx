import { useRef } from "react";
import { useScroll } from "../../hooks/useScroll";

import styles from "./AddListing.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAddListing } from "../../hooks/useListings";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  title: "",
  category: "",
  location: "",
  price: "",
  imageURL: "",
  phoneNumber: "",
  email: "",
  summary: "",
};

export default function AddListing() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const navigate = useNavigate();
  const addListing = useAddListing();

  async function addHandler(formValues) {
    try {
      await addListing(formValues);
      navigate("/listings");
    } catch (error) {
      // VALIDATION
      console.log(error.message);
    }
  }

  const { formValues, updateHandler, submitHandler } = useForm(
    initialValues,
    addHandler
  );

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
                  <form id="add-listing" onSubmit={submitHandler}>
                    <h2>
                      Upload a listing to our directory&nbsp;
                      <FontAwesomeIcon icon={faCloudArrowUp} />
                    </h2>
                    <br></br>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="title">Title:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder=""
                        required
                        value={formValues.title}
                        onChange={updateHandler}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="category">Select a category:</label>
                      <select
                        className="form-control"
                        id="category"
                        name="category"
                        required
                        value={formValues.category}
                        onChange={updateHandler}
                      >
                        <option>---</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="nightlife">Nightlife</option>
                        <option value="shops">Shops</option>
                        <option value="museums">Museums</option>
                        <option value="activities">Activities</option>
                      </select>
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="location">Location:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        placeholder=""
                        required
                        value={formValues.location}
                        onChange={updateHandler}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="price">Price per person:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder=""
                        required
                        value={formValues.price}
                        onChange={updateHandler}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="imageURL">Image URL:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="imageURL"
                        name="imageURL"
                        placeholder="https://"
                        required
                        value={formValues.imageURL}
                        onChange={updateHandler}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="phoneNumber">Phone number:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder=""
                        required
                        value={formValues.phoneNumber}
                        onChange={updateHandler}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="price">Email address:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder=""
                        required
                        onChange={updateHandler}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="summary">Summary:</label>
                      <textarea
                        className="form-control"
                        id="summary"
                        name="summary"
                        rows="3"
                        placeholder=""
                        required
                        value={formValues.summary}
                        onChange={updateHandler}
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
