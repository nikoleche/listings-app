export default function SearchItem(props) {
  return (
    <div className="recent-listing" ref={scrollRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="item">
                <div className="row">
                  {listings.map((listing) => (
                    <ListingItem key={listing._id} {...listing} />
                  ))}
                  {listings.length === 0 && (
                    <p className="lead">
                      There are no listings from this category yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
