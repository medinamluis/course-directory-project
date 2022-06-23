import React from 'react';
import {
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import NotFound from './NotFound';  
import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = () => {
    return (
    <div className="main-content courses">

      <div className="course-header group">
        <h2>Courses</h2> 
        <ul className="course-nav">
          <li><NavLink to='html'>HTML</NavLink></li>
          <li><NavLink to='css'>CSS</NavLink></li>
          <li><NavLink to='js'>JavaScript</NavLink></li>
        </ul>
      </div>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="html" />} />
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="js" element={<CourseContainer data={JSCourses} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
};

export default Courses;