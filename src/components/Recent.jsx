import ListingItem from "./ListingItem";

export default function Recent() {
  return (
    <div className="recent-listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Recent Listings</h2>
              <h6>Check Them Out</h6>
            </div>
          </div>
          <div className="col-lg-12">
            {/* "owl-carousel owl-listing */}
            <div className="">
              <div className="item">
                <div className="row">
                  <ListingItem
                    category="Apartments"
                    imageURL="assets/images/listing-01.jpg"
                    title="Cozy apartment in Downtown area"
                    // author="Food Author"
                    price="2900 / night"
                    location="Times Square"
                    bed="2"
                    bath="2"
                  />
                  <ListingItem
                    category="Retail"
                    imageURL="assets/images/listing-02.jpg"
                    title="Sightseeing"
                    // author="Sightseeing Author"
                    price="2900 / night"
                    location="MadeUp Street Avenue"
                    bed="2"
                    bath="2"
                  />
                  <ListingItem
                    category="Storage Units"
                    imageURL="assets/images/listing-04.jpg"
                    title="Shopping"
                    // author="Shopping Author"
                    price="2900 / night"
                    location="MadeUp Street Avenue"
                    bed="2"
                    bath="2"
                  />
                  <ListingItem
                    category="Venues"
                    imageURL="assets/images/listing-04.jpg"
                    title="Rentals"
                    // author="Rentals Author"
                    price="2900 / night"
                    location="Big Apple Avenue"
                    bed="2"
                    bath="2"
                  />
                  <ListingItem
                    category="Houses"
                    imageURL="assets/images/listing-04.jpg"
                    title="Entertainment"
                    // author="Entertainment Author"
                    location="Sweet Avenue"
                    price="2900 / night"
                    bed="2"
                    bath="2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
