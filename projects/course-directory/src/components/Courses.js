import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='HTML'>HTML</NavLink></li>
        <li><NavLink to='CSS'>CSS</NavLink></li>
        <li><NavLink to='JavaScript'>JavaScript</NavLink></li>
      </ul>
    </div>
    <Outlet />
  </div>
);

export default Courses;