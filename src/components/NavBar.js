import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <div className="mx-3">I am NavBar</div>
    <div>
      <NavLink
        to="/"
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
