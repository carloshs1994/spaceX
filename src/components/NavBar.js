import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="d-flex flex-row justify-content-between border-bottom">
      <div className="mx-3">I am NavBar</div>
      <div>
        <NavLink to="/" activeClassName="active-link "><span className="mx-3">Rockets</span></NavLink>
        <NavLink to="/Missions" activeClassName="active-link "><span className="mx-3">Missions</span></NavLink>
        <NavLink to="/MyProfile" activeClassName="active-link "><span className="mx-3">My Profile</span></NavLink>
        
      </div>
    </div>
  )
};

export default NavBar