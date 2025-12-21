import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => {
  // If title already starts with course number, use it as-is
  // Otherwise, format as "number: title"
  const displayText = data.title.startsWith(data.number)
    ? data.title
    : `${data.number}: ${data.title}`;

  return (
    <li className="course-container">
      {data.link ? (
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <span className="course-name">{displayText}</span>
        </a>
      ) : (
        <span className="course-name">{displayText}</span>
      )}
    </li>
  );
};

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
