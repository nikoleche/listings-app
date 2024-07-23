export default function ListingItem(props) {
  let categoryURL = "";
  switch (props.category) {
    case "Houses":
      categoryURL = "assets/images/search-icon-houses.png";
      break;
    case "Apartments":
      categoryURL = "assets/images/search-icon-apartments.png";
      break;
    case "Retail":
      categoryURL = "assets/images/search-icon-retail.png";
      break;
    case "Venues":
      categoryURL = "assets/images/search-icon-venues.png";
      break;
    case "Storage Units":
      categoryURL = "assets/images/search-icon-storage.png";
      break;
  }

  return (
    <div className="col-lg-12">
      <div className="listing-item">
        <div className="left-image">
          <a href="#">
            <img src={props.imageURL} alt="imageURL" />
          </a>
        </div>
        <div className="right-content align-self-center">
          <a href="#">
            <h4>{props.title}</h4>
          </a>
          {/* <h6>by: {props.author}</h6> */}
          <h6>{props.location}, New York</h6>
          <ul className="rate">
            {/* <li>
              <i className="fa fa-star-o"></i>
            </li>
            <li>
              <i className="fa fa-star-o"></i>
            </li>
            <li>
              <i className="fa fa-star-o"></i>
            </li>
            <li>
              <i className="fa fa-star-o"></i>
            </li>
            <li>
              <i className="fa fa-star-o"></i>
            </li> */}
            <li>
              <a href="contact.html">
                <i className="fa fa-eye"></i> Add to favorites
              </a>
            </li>
            <li>
              {" "}
              <span className="icon">
                <img src={categoryURL} alt="category" />
              </span>
            </li>
          </ul>
          <span className="price">
            <div className="icon">
              <img src="assets/images/listing-icon-dollar.png" alt="Price" />
            </div>{" "}
            $ {props.price}
          </span>
          <span className="More Details">
            {/* TODO REMOVED THIS: */}
            {/* More Details: <em>2760 sq ft</em> */}
          </span>
          <ul className="info">
            {/* <li>
              <img
                src="assets/images/listing-icon-location.png"
                alt="Location"
              />
              {props.location}
            </li> */}
            <li>
              <img src="assets/images/listing-icon-bed.png" alt="Bedrooms" />
              {props.bed} Bedrooms
            </li>
            <li>
              <img src="assets/images/listing-icon-tub.png" alt="Bathrooms" />{" "}
              {props.bath} Bathrooms
            </li>
          </ul>
          <div className="main-white-button">
            <a href="contact.html">
              <i className="fa fa-info"></i> More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
