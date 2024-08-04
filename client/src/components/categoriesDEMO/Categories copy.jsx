import { useRef } from "react";
import CategoryData from "./category-data/CategoryData";
import CategoryItem from "./category-item/CategoryItem";
import { useScroll } from "../../hooks/useScroll";
import Browse from "../Browse";

export default function Categories() {
  const scrollRef = useRef(null);
  useScroll(scrollRef);
  return (
    <>
      <div className="page-heading" ref={scrollRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                {/* top-text header-text */}
                <h2>Various categories handpicked just for you</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Browse />

      <div className="category-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div className="first-thumb active">
                          <CategoryItem
                            iconURL="http://localhost:5173/assets/images/search-icon-restaurants.png"
                            category="Restaurants"
                            sublink="restaurants"
                          />
                        </div>
                        <div>
                          <CategoryItem
                            iconURL="http://localhost:5173/assets/images/search-icon-nightlife.png"
                            category="Nightlife"
                            sublink="nightlife"
                          />
                        </div>
                        <div>
                          <CategoryItem
                            iconURL="http://localhost:5173/assets/images/search-icon-shops.png"
                            category="Shops"
                            sublink="shops"
                          />
                        </div>
                        <div>
                          <CategoryItem
                            iconURL="http://localhost:5173/assets/images/search-icon-museums.png"
                            category="Museums"
                            sublink="museums"
                          />
                        </div>
                        <div className="last-thumb">
                          <CategoryItem
                            iconURL="http://localhost:5173/assets/images/search-icon-activities.png"
                            category="Activities"
                            sublink="activities"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        <li className="active">
                          <CategoryData
                            iconURL="http://localhost:5173/assets/images/search-icon-restaurants.png"
                            category="Restaurants"
                            description="Restaurants in the city encompass a rich and diverse culinary landscape, providing a multitude of dining options to cater to various tastes, preferences, and occasions. This vibrant urban dining scene is characterized by its wide range of restaurant types, each offering a unique experience to its patrons."
                          />
                        </li>
                        <li>
                          <CategoryData
                            iconURL="http://localhost:5173/assets/images/search-icon-nightlife.png"
                            category="Nightlife"
                            description="This dynamic category includes bustling bars, energetic nightclubs, intimate live music venues, and stylish lounges. Whether you're looking for a lively place to socialize, catch a live show, or enjoy a cocktail in a chic setting, the city's nightlife has something to offer for everyone seeking evening excitement and social engagement."
                          />
                        </li>
                        <li>
                          <CategoryData
                            iconURL="http://localhost:5173/assets/images/search-icon-shops.png"
                            category="Shops"
                            description="This category includes everything from high-end boutiques and department stores to unique local shops and specialty stores. City shops offer a wide array of products, such as fashion, electronics, home goods, and artisanal items. "
                          />
                        </li>
                        <li>
                          <CategoryData
                            iconURL="http://localhost:5173/assets/images/search-icon-museums.png"
                            category="Museums"
                            description="Museums in the city offer a rich cultural and educational experience through diverse collections and exhibitions. This category includes art museums showcasing classic and modern works, history museums presenting artifacts and stories from the past, science museums, and specialized institutions focusing on specific topics such as natural history or technology."
                          />
                        </li>
                        <li>
                          <CategoryData
                            iconURL="http://localhost:5173/assets/images/search-icon-activities.png"
                            category="Activities"
                            description="Whether you're interested in sports, arts, or simply exploring the city's vibrant neighborhoods, the range of activities provides diverse opportunities for entertainment, relaxation, and discovery."
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
    </>
  );
}
