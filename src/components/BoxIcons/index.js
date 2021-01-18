import "./style.css";
import { Link } from "react-router-dom";

export default function Boxicon(props) {
  return (
    <div>
      <div className="styles-box-icons"> {props.icon} </div>
      <h1 className="style-box-title "> {props.title} </h1>
      <Link to={props.redirect}>
        <p className="style-box-description"> {props.description} </p>
      </Link>
    </div>
  );
}
