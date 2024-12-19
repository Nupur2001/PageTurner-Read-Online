import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>

      <div className="card">
        <figure>
          <img
            src={item.image}
            alt={item.title || "Book"}
            className="card-image"
          />
        </figure>
        <div className="card-body  dark:text-slate-900">
          <h2 className="card-title">
            {item.category}
            <div className="badge badge-success text-white">NEW</div>
          </h2>
          <p className="card-description">{item.description}</p>
          <div className="card-actions">
            <div className="badge badge-outline">{item.age_group}</div>
            <div className="badge badge-outline">{item.available_languages.join(", ")}</div>
          </div>
        </div>
        <div className="card-details">
          <Link to={`/details/${item.category}`}>
            <button className="btn btnChange text-white">Details</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cards;
