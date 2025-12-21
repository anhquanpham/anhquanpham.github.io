import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link}>{data.school}</a>, {data.year}
      </p>
      {data.thesis && (
        <p className="thesis">
          Thesis: {data.thesisLink ? (
            <a href={data.thesisLink} target="_blank" rel="noopener noreferrer">
              {data.thesis}
            </a>
        ) : (
          data.thesis
        )}
        </p>
      )}
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    thesis: PropTypes.string,
    thesisLink: PropTypes.string,
  }).isRequired,
};

export default Degree;
