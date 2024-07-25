export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top-text header-text">
              {/* <h6>Over 200+ Active Listings</h6> */}
              <h2>Where are you headed next?</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <form
              id="search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
            >
              <div className="row">
                <div className="col-lg-1 align-self-center">
                  <fieldset>
                    <i className="fa fa-search"></i>
                    {/* <select
                      name="area"
                      className="form-select"
                      aria-label="Area"
                      id="chooseCategory"
                      onChange="this.form.click()"
                    >
                      <option value="all">All Categories</option>
                      <option value="For Rent">Houses</option>
                      <option value="Sightseeing">Apartments</option>
                      <option value="Entertainment">Offices</option>
                      <option value="Sightseeing">Venues</option>
                      <option value="Shopping">Storage Units</option>
                    </select> */}
                  </fieldset>
                </div>
                {/* TODO updated columns and removed price search, removed borders by removing class "searchText"*/}
                <div className="col-lg-8 align-self-center">
                  <fieldset>
                    <input
                      type="address"
                      name="address"
                      // className="searchText"
                      placeholder="Search all active listings&hellip;"
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                {/* TODO REMOVED PRICE SEARCH */}
                {/* <div className="col-lg-3 align-self-center">
                  <fieldset>
                    <select
                      name="price"
                      className="form-select"
                      aria-label="Default select example"
                      id="chooseCategory"
                      onChange="this.form.click()"

                      // onChange={this.form.click}
                    >
                      <option value="select">Price Range</option>
                      <option value="$100 - $250">$100 - $250</option>
                      <option value="$250 - $500">$250 - $500</option>
                      <option value="$500 - $1000">$500 - $1,000</option>
                      <option value="$1000+">$1,000 or more</option>
                    </select>
                  </fieldset>
                </div> */}
                <div className="col-lg-3">
                  <fieldset>
                    <button>
                      {/* <i className="fa fa-search"></i> SEARCH */}
                      SEARCH
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <ul className="categories">
              <li>
                <a href="listing.html">
                  <span className="icon">
                    <img
                      src="assets/images/search-icon-restaurants.png"
                      alt="Restaurants"
                    />
                  </span>
                  <b>Restaurants</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <img
                      src="assets/images/search-icon-nightlife.png"
                      alt="Nightlife"
                    />
                  </span>
                  <b>Nightlife</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <img
                      src="assets/images/search-icon-shops.png"
                      alt="Shops"
                    />
                  </span>
                  <b>Shops</b>
                </a>
              </li>
              <li>
                <a href="category.html">
                  <span className="icon">
                    <img
                      src="assets/images/search-icon-museums.png"
                      alt="Museums"
                    />
                  </span>
                  <b>Museums</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <img
                      src="assets/images/search-icon-activities.png"
                      alt="Activities"
                    />
                  </span>
                  <b>Activities</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
