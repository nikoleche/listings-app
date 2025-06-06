import BrowseItem from "./browse-item/BrowseItem";
import BrowseMenu from "./browse-menu/BrowseMenu";

export default function Browse() {
  return (
    <div className="popular-categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="menu">
                      <div className="first-thumb active">
                        <BrowseMenu
                          iconURL="http://localhost:5173/assets/images/search-icon-restaurants.png"
                          category="Restaurants"
                        />
                      </div>
                      <div>
                        <BrowseMenu
                          iconURL="http://localhost:5173/assets/images/search-icon-nightlife.png"
                          category="Nightlife"
                        />
                      </div>
                      <div>
                        <BrowseMenu
                          iconURL="http://localhost:5173/assets/images/search-icon-shops.png"
                          category="Shops"
                        />
                      </div>
                      <div>
                        <BrowseMenu
                          iconURL="http://localhost:5173/assets/images/search-icon-museums.png"
                          category="Museums"
                        />
                      </div>
                      <div className="last-thumb">
                        <BrowseMenu
                          iconURL="http://localhost:5173/assets/images/search-icon-activities.png"
                          category="Activities"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 align-self-center">
                    <ul className="nacc">
                      <li className="active">
                        <BrowseItem
                          title="Restaurants"
                          text="Restaurants in the city encompass a rich and diverse culinary landscape, providing a multitude of dining options to cater to various tastes, preferences, and occasions. This vibrant urban dining scene is characterized by its wide range of restaurant types, each offering a unique experience to its patrons."
                          category="restaurants"
                          imageURL="http://localhost:5173/assets/images/browse-restaurant.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Nightlife"
                          text="This dynamic category includes bustling bars, energetic nightclubs, intimate live music venues, and stylish lounges. Whether you're looking for a lively place to socialize, catch a live show, or enjoy a cocktail in a chic setting, the city's nightlife has something to offer for everyone seeking evening excitement and social engagement."
                          category="nightlife"
                          imageURL="http://localhost:5173/assets/images/browse-nightlife.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Shops"
                          text="This category includes everything from high-end boutiques and department stores to unique local shops and specialty stores. City shops offer a wide array of products, such as fashion, electronics, home goods, and artisanal items."
                          category="shops"
                          imageURL="http://localhost:5173/assets/images/browse-shops.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Museums"
                          text="Museums in the city offer a rich cultural and educational experience through diverse collections and exhibitions. This category includes art museums showcasing classic and modern works, history museums presenting artifacts and stories from the past, science museums, and specialized institutions focusing on specific topics such as natural history or technology."
                          category="museums"
                          imageURL="http://localhost:5173/assets/images/browse-museums.jpg"
                        />
                      </li>
                      <li>
                        <BrowseItem
                          title="Activities"
                          text="Whether you're interested in sports, arts, or simply exploring the city's vibrant neighborhoods, the range of activities provides diverse opportunities for entertainment, relaxation, and discovery."
                          category="activities"
                          imageURL="http://localhost:5173/assets/images/browse-activities.jpg"
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
