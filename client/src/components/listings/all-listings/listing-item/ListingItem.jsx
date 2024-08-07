import { Link } from "react-router-dom";

import styles from "./ListingItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faComments } from "@fortawesome/free-solid-svg-icons";

export default function ListingItem(props) {
  let categoryURL = "";
  let categoryName = "";
  switch (props.category) {
    case "restaurants":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-restaurants.png";
      categoryName = "Restaurants";
      break;
    case "nightlife":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-nightlife.png";
      categoryName = "Nightlife";
      break;
    case "shops":
      categoryURL = "http://localhost:5173/assets/images/search-icon-shops.png";
      categoryName = "Shops";
      break;
    case "museums":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-museums.png";
      categoryName = "Museums";
      break;
    case "activities":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-activities.png";
      categoryName = "Activities";
      break;
  }

  return (
    <div className="col-lg-12">
      <div className="listing-item">
        <div className="left-image">
          <img src={props.imageURL} alt="imageURL" />
        </div>
        <div className="right-content align-self-top">
          <h4>{props.title}</h4>
          <br></br>
          <div className="left-content align-self-center">
            <ul className="info">
              <li>
                <img
                  src="http://localhost:5173/assets/images/listing-icon-dollar.png"
                  alt="Price"
                />
                $ {props.price}
              </li>
              <li>
                <img
                  src="http://localhost:5173/assets/images/listing-icon-location.png"
                  alt="Location"
                />
                {props.location}
              </li>
              <li>
                <img src={categoryURL} alt="Category" />
                {categoryName}
              </li>
            </ul>
          </div>
          <div className="main-white-button">
            <Link to={`/listings/details/${props._id}`}>
              <FontAwesomeIcon icon={faCircleInfo} /> More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
