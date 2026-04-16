import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const isExternalLink = (url = '') => /^https?:\/\//.test(url);

const Cell = ({ data }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <article className="project-item">
      <div className="project-item__thumb">
        {isExternalLink(data.link) ? (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </a>
        ) : (
          <Link to={data.link}>
            <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          </Link>
        )}
      </div>
      <div className="project-item__body">
        <h3 className="project-item__title">
          {isExternalLink(data.link) ? (
            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
          ) : (
            <Link to={data.link}>{data.title}</Link>
          )}
        </h3>
        <div className="project-item__meta">
          <time className="project-item__date">
            {dayjs(data.date).format('MMMM, YYYY')}
          </time>
          {(data.desc || data.descPrefix) && (
            <a
              href="#description"
              className="project-item__toggle"
              onClick={(e) => {
                e.preventDefault();
                setIsDescriptionOpen((prev) => !prev);
              }}
            >
              Description
            </a>
          )}
          {isExternalLink(data.link) ? (
            <a href={data.link} target="_blank" rel="noopener noreferrer">Project Website</a>
          ) : (
            <Link to={data.link}>Project Website</Link>
          )}
        </div>
        {isDescriptionOpen && data.desc && (
          <p className="project-item__desc">{data.desc}</p>
        )}
        {isDescriptionOpen && !data.desc && (
          <p className="project-item__desc">
            {data.descPrefix}{' '}
            {data.descLink && data.descLinkText ? (
              <a href={data.descLink} target="_blank" rel="noopener noreferrer">
                {data.descLinkText}
              </a>
            ) : null}{' '}
            {data.descSuffix}
            {data.descHighlight && (
              <>
                {' '}
                <span className="project-item__desc-highlight">{data.descHighlight}</span>
              </>
            )}
            {data.descHighlightPrefix && (
              <>
                {' '}
                <span className="project-item__desc-highlight">
                  {data.descHighlightPrefix}{' '}
                  {data.descHighlightLink && data.descHighlightLinkText ? (
                    <a
                      href={data.descHighlightLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.descHighlightLinkText}
                    </a>
                  ) : null}
                  {' '}
                  {data.descHighlightSuffix}
                </span>
              </>
            )}
          </p>
        )}
      </div>
    </article>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
    descPrefix: PropTypes.string,
    descLinkText: PropTypes.string,
    descLink: PropTypes.string,
    descSuffix: PropTypes.string,
    descHighlight: PropTypes.string,
    descHighlightPrefix: PropTypes.string,
    descHighlightLinkText: PropTypes.string,
    descHighlightLink: PropTypes.string,
    descHighlightSuffix: PropTypes.string,
  }).isRequired,
};

export default Cell;
