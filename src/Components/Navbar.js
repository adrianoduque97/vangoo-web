import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
function Navbar() {
  const [clicked, setclick] = useState(false);
  function handleClick() {
    setclick(!clicked);
  }

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          VANGOO <i className="fab fa-react"></i>
        </h1>
        {/* Para cuando sea responsive */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button title="Únete"></Button>
      </nav>
    </>
  );
}

export default Navbar;

// function Nav(props) {
//   return (
//     <li className="nav-item">
//       <Link to={"/" + `${props.site}`} className="nav-links">
//         {props.indicator}
//       </Link>
//     </li>
//   );
// }
