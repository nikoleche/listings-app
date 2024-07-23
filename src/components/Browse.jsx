import BrowseItem from "./BrowseItem";
import BrowseMenu from "./BrowseMenu";

export default function Browse() {
  return (
    <div className="popular-categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Browse Categories</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="menu">
                      <div className="first-thumb active">
                        <BrowseMenu
                          imageURL="assets/images/search-icon-restaurants.png"
                          category="Restaurants"
                        />
                      </div>
                      <div>
                        <BrowseMenu
                          imageURL="assets/images/search-icon-nightlife.png"
                          category="Nightlife"
                        />
                      </div>
                      <div>
                        <BrowseMenu
                          imageURL="assets/images/search-icon-shops.png"
                          category="Shops"
                        />
                      </div>
                      <div>
                        <BrowseMenu
                          imageURL="assets/images/search-icon-museums.png"
                          category="Museums"
                        />
                      </div>
                      <div className="last-thumb">
                        <BrowseMenu
                          imageURL="assets/images/search-icon-activities.png"
                          category="Activities"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 align-self-center">
                    <ul className="nacc">
                      <li className="active">
                        <BrowseItem
                          title="Stuffs"
                          text="Plot Listing is a responsive Bootstrap 5
                                    website template that included 4 different
                                    HTML pages. This template is provided by
                                    TemplateMo website. You can apply this
                                    layout for your static or dynamic CMS
                                    websites."
                          category="Rentals"
                          imageURL="assets/images/tabs-image-01.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Food and Lifestyle category is here"
                          text="Plot Listing is a responsive Bootstrap 5
                                    website template that included 4 different
                                    HTML pages. This template is provided by
                                    TemplateMo website. You can apply this
                                    layout for your static or dynamic CMS
                                    websites."
                          category="Food & Lifestyle"
                          imageURL="assets/images/tabs-image-02.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Shopping"
                          text="Plot Listing is a responsive Bootstrap 5
                                    website template that included 4 different
                                    HTML pages. This template is provided by
                                    TemplateMo website. You can apply this
                                    layout for your static or dynamic CMS
                                    websites."
                          category="Shopping"
                          imageURL="assets/images/tabs-image-01.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Sightseeing is here"
                          text="Plot Listing is a responsive Bootstrap 5
                                    website template that included 4 different
                                    HTML pages. This template is provided by
                                    TemplateMo website. You can apply this
                                    layout for your static or dynamic CMS
                                    websites."
                          category="Sightseeing"
                          imageURL="assets/images/tabs-image-05.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Entertainment is here"
                          text="Plot Listing is a responsive Bootstrap 5
                                    website template that included 4 different
                                    HTML pages. This template is provided by
                                    TemplateMo website. You can apply this
                                    layout for your static or dynamic CMS
                                    websites."
                          category="Activities"
                          imageURL="assets/images/tabs-image-02.jpg"
                        />
                      </li>
                    </ul>
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
