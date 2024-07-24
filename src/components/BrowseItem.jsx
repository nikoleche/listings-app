export default function BrowseItem(props) {
  return (
    <div>
      <div className="thumb">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="left-text">
              <h4>{props.title}</h4>
              <p>{props.text}</p>
              <div className="main-white-button">
                <a href="#">
                  <i className="fa fa-info"></i> Discover {props.category}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 align-self-center">
            <div className="right-image">
              <img src={props.imageURL} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
