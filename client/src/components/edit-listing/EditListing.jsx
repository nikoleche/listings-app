import { useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useScroll } from "../../hooks/useScroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useGetListing } from "../../hooks/useListings";
import listingsAPI from "../../api/listingsAPI";

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

export default function EditListing() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);

  const navigate = useNavigate();
  const { listingId } = useParams();
  const [listing] = useGetListing(listingId);
  const initialFormValues = useMemo(
    () => Object.assign({}, initialValues, listing),
    [listing]
  );

  const { formValues, updateHandler, submitHandler } = useForm(
    initialFormValues,
    async (formValues) => {
      await listingsAPI.updateListing(listingId, formValues);
      navigate(`/listings/details/${listingId}`);
    }
  );

  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h2>Modify an existing listing</h2>
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
                      Update your existing listing&nbsp;
                      <FontAwesomeIcon icon={faPencil} />
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
                        value={formValues.email}
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
                      <button
                        className="btn btn-primary"
                        style={{ backgroundColor: "#50b498", border: "none" }}
                      >
                        Edit
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
