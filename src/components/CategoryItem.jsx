export default function CategoryItem(props) {
  return (
    <div className="thumb">
      <span className="icon">
        <img src={props.iconURL} alt={props.category} />
        <h4>{props.category}</h4>
      </span>
    </div>
  );
}
