import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useScroll } from "../../hooks/useScroll";
import { useForm } from "../../hooks/useForm";
import listingsAPI from "../../api/listingsAPI";
import ListingItem from "../listings/all-listings/listing-item/ListingItem";

const initialValues = {
  searchQuery: "",
};

export default function MainBanner() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);
  const [searchOutput, setSearchOutput] = useState([]);

  async function searchHandler({ searchQuery }) {
    const result = await listingsAPI.getBySearch(searchQuery);
    setSearchOutput(result);
    return [result];
  }

  const { formValues, updateHandler, submitHandler } = useForm(
    initialValues,
    searchHandler
  );

  return (
    <>
      <div className="main-banner" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h2>Where are you headed next?</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <form id="search-form" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-lg-1 align-self-center">
                    <fieldset>
                      <i className="fa fa-search"></i>
                    </fieldset>
                  </div>
                  <div className="col-lg-8 align-self-center">
                    <fieldset>
                      <input
                        type="text"
                        name="searchQuery"
                        placeholder="Search all active listings&hellip;"
                        required
                        value={formValues.searchQuery}
                        onChange={updateHandler}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-3">
                    <fieldset>
                      <button>SEARCH</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <ul className="categories">
                <li>
                  <Link to={"category/restaurants"}>
                    <span className="icon">
                      <img
                        src="assets/images/search-icon-restaurants.png"
                        alt="Restaurants"
                      />
                    </span>
                    <b>Restaurants</b>
                  </Link>
                </li>
                <li>
                  <Link to={"category/nightlife"}>
                    <span className="icon">
                      <img
                        src="assets/images/search-icon-nightlife.png"
                        alt="Nightlife"
                      />
                    </span>
                    <b>Nightlife</b>
                  </Link>
                </li>
                <li>
                  <Link to={"category/shops"}>
                    <span className="icon">
                      <img
                        src="assets/images/search-icon-shops.png"
                        alt="Shops"
                      />
                    </span>
                    <b>Shops</b>
                  </Link>
                </li>
                <li>
                  <Link to={"category/museums"}>
                    <span className="icon">
                      <img
                        src="assets/images/search-icon-museums.png"
                        alt="Museums"
                      />
                    </span>
                    <b>Museums</b>
                  </Link>
                </li>
                <li>
                  <Link to={"category/activities"}>
                    <span className="icon">
                      <img
                        src="assets/images/search-icon-activities.png"
                        alt="Activities"
                      />
                    </span>
                    <b>Activities</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-listing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="item">
                  <div className="row">
                    {searchOutput.map((search) => (
                      <ListingItem key={search._id} {...search} />
                    ))}
                    {searchOutput.length === 0 && (
                      <p className="lead">Search results go here.</p>
                    )}
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
