import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-3 bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>FoodieWeb</a>
         
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" style={{ color: "white",fontWeight: "bold", fontSize: "25px" }}>Add</Link>
              </li>
              <li className="nav-item">
                <Link to='/view' className="nav-link active" aria-current="page" style={{ color: "white",fontWeight: "bold", fontSize: "25px" }}>View</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
