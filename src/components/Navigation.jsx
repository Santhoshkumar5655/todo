import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/incomplete" className="">
            Incomplete Todo
          </Link>
        </li>
        <li>
          <Link to="/complete" className="">
            Complete Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
