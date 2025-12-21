import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.map((course) => (
  <Course
    data={course}
    key={course.title}
  />
));

const Courses = ({ data }) => {
  const graduateCourses = data.filter((course) => course.level === 'graduate');
  const undergraduateCourses = data.filter((course) => course.level === 'undergraduate');

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Selected Courses</h3>
      </div>
      {graduateCourses.length > 0 && (
        <div className="course-section">
          <h4 className="course-section-title">Graduate</h4>
          <ul className="course-list">
            {getRows(graduateCourses)}
          </ul>
        </div>
      )}
      {undergraduateCourses.length > 0 && (
        <div className="course-section">
          <h4 className="course-section-title">Undergraduate</h4>
          <ul className="course-list">
            {getRows(undergraduateCourses)}
          </ul>
        </div>
      )}
    </div>
  );
};

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
      level: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
