import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import './CourseTopics.css';

function CourseTopics() {
  return (
    <NavDropdown title="Course Topics" id="collasible-nav-dropdown" className="course-topics">
      <NavDropdown.Item href="/section1">1. Introduction to Web3 and Cryptocurrencies</NavDropdown.Item>
      {/* Add other NavDropdown.Item components for each section */}
    </NavDropdown>
  );
}

export default CourseTopics;
