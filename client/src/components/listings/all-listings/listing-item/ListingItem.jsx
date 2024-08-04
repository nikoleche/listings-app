import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ListingItem(props) {
  let categoryURL = "";
  switch (props.category) {
    case "Restaurants":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-restaurants.png";
      break;
    case "Nightlife":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-nightlife.png";
      break;
    case "Shops":
      categoryURL = "http://localhost:5173/assets/images/search-icon-shops.png";
      break;
    case "Museums":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-museums.png";
      break;
    case "Activities":
      categoryURL =
        "http://localhost:5173/assets/images/search-icon-activities.png";
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
            <ul className="rate">
              <li>
                <a href="contact.html">
                  <FontAwesomeIcon icon={faHeart} /> Add to favorites
                </a>
              </li>
            </ul>
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
                <img src={categoryURL} alt="Category" /> {props.category}
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
