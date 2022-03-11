import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <div className="col-6 row mx-2 my-1">
      <img src={planet} alt="planet-logo" className="planet-logo col-4" />
      <h1 className="title col-8">Space Travelers Hub</h1>
    </div>
    <div className="my-auto">
      <NavLink
        to="/spaceX"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
      >
        <span className="mx-3">Rockets</span>
      </NavLink>
      <NavLink
        to="/Missions"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
      >
        <span className="mx-3">Missions</span>
      </NavLink>
      <span>|</span>
      <NavLink
        to="/MyProfile"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
      >
        <span className="mx-3">My Profile</span>
      </NavLink>
    </div>
  </div>
);

export default NavBar;
