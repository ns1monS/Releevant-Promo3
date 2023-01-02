import { Link } from "react-router-dom";
import { HomeMenu } from "../Const/HomeMenu";
export default function Navbar(menuItems) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="izq">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="container" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {HomeMenu.map((menuItem, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={menuItem.path}
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="der">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav2"></div>
        </div>
      </div>
    </nav>
  );
}
