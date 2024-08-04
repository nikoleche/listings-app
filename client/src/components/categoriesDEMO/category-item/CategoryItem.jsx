export default function CategoryItem(props) {
  return (
    // <Link to={props.sublink}>
    <div className="thumb">
      <span className="icon">
        <img src={props.iconURL} alt={props.category} />
        <h4>{props.category}</h4>
      </span>
    </div>
    // </Link>
  );
}
