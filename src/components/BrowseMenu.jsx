export default function BrowseMenu(props) {
  return (
    <div className="thumb">
      <span className="icon">
        <img src={props.imageURL} alt={props.category} />
      </span>
      {props.category}
    </div>
  );
}
