import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h2 class="navbar-brand" href="#">Music Teacher App</h2>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <p class="nav-link"><Link className="nav_link" to="/home">Home</Link></p>
            </li>
            <li class="nav-item">
              <p class="nav-link"><Link className="nav_link" to="/schedule">Schedule</Link></p>
            </li>
            <li class="nav-item">
              <p class="nav-link"><Link className="nav_link" to="/students">Students</Link></p>
            </li>
            <li class="nav-item">
                <p class="nav-link"><Link className="nav_link" to="/billing">Billing</Link></p>
            </li>  
          </ul>
        </div>
      </div>
    </nav>
    </React.Fragment>
  );
}

export default Header;