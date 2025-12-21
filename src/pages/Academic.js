import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import researchData from '../data/research';
import coursesData from '../data/courses';
import talksData from '../data/talks';

const placeholder = '/images/placeholder.png'; // Use a generic placeholder image

// Helper to format authors - supports both string and array formats
function formatAuthors(authors) {
  if (!authors) return null;

  // If authors is an array of objects with name and optional link
  if (Array.isArray(authors)) {
    return (
      <span className="research-authors">
        {authors.map((author, index) => {
          const isString = typeof author === 'string';
          const name = isString ? author : author.name;
          const link = isString ? null : author.link;
          const isBold = name === 'Anh-Quan Pham';
          const isLast = index === authors.length - 1;
          const key = `${name}-${index}`;

          const authorElement = isBold ? <b>{name}</b> : <span>{name}</span>;

          if (link) {
            return (
              <React.Fragment key={key}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {authorElement}
                </a>
                {!isLast && ', '}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={key}>
              {authorElement}
              {!isLast && ', '}
            </React.Fragment>
          );
        })}
      </span>
    );
  }

  // Legacy string format - split and bold "Anh-Quan Pham"
  return (
    <span className="research-authors">
      {authors.split(/(Anh-Quan Pham)/g).map((part, index) => {
        const key = `${part}-${index}`;
        if (part === 'Anh-Quan Pham') {
          return <b key={key}>{part}</b>;
        }
        return <span key={key}>{part}</span>;
      })}
    </span>
  );
}

const Academic = () => (
  <Main title="Academic" description="Anh-Quan Pham's academic activities including research, teaching, and invited talks.">
    <article className="post academic" id="academic">
      <header>
        <div className="title">
          <h2>
            <Link to="/academic">Academic</Link>
          </h2>
          <p>
            <a href="#research">Research</a>,{' '}
            <a href="#teaching">Teaching</a>, and{' '}
            <a href="#talks">Invited Talks</a>
          </p>
        </div>
      </header>
      {/* Research Projects Section */}
      <section id="research">
        <h3>Research</h3>
        <div className="research-container">
          {researchData.map((project) => (
            <div className="research-item" key={project.title}>
              <div className="research-image">
                <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                {(project.poster || project.arxiv || project.code || project.video
                  || project.x || project.bluesky) && (
                  <div className="research-btns">
                    {project.poster && (
                      <a
                        href={project.poster}
                        className="course-website-btn research-poster-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Poster
                      </a>
                    )}
                    {project.arxiv && (
                      <a
                        href={project.arxiv}
                        className="course-website-btn research-poster-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        arXiV
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        className="course-website-btn research-poster-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        className="course-website-btn research-poster-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Video
                      </a>
                    )}
                    {project.x && (
                      <a
                        href={project.x}
                        className="course-website-btn research-poster-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        X/Twitter
                      </a>
                    )}
                    {project.bluesky && (
                      <a
                        href={project.bluesky}
                        className="course-website-btn research-poster-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bluesky
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="research-content">
                <h4>{project.title}</h4>
                {/* Authors as subtitle style, bolded name */}
                {project.authors && (
                  <div className="research-subtitle">{formatAuthors(project.authors)}</div>
                )}
                {/* Date as before */}
                {project.date && <div className="research-date">{project.date}</div>}
                {/* Award line, if present */}
                {project.award && (
                  <div className="research-award">🏆 {project.award}</div>
                )}
                {/* Description as before */}
                <div className="research-desc">{project.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Taught Section */}
      <section id="teaching">
        <h3>Teaching</h3>
        <div className="research-container">
          {coursesData.map((course) => (
            <div className="research-item" key={course.code}>
              <div className="research-image">
                <img
                  src={course.image ? process.env.PUBLIC_URL + course.image : placeholder}
                  alt={course.title}
                />
                {course.link && (
                  <div className="research-btns">
                    <a
                      href={course.link}
                      className="course-website-btn research-poster-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Course Website
                    </a>
                  </div>
                )}
              </div>
              <div className="research-content">
                <h4>{course.code}: {course.title}</h4>
                <div className="course-role-term">{course.role}</div>
                {course.description && (
                  <div className="course-description">{course.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Invited Talks Section */}
      <section id="talks">
        <h3>Invited Talks</h3>
        <div className="research-container">
          {talksData.map((talk) => (
            <div className="research-item" key={talk.title}>
              <div className="research-image">
                <img
                  src={talk.image ? process.env.PUBLIC_URL + talk.image : placeholder}
                  alt={talk.title}
                />
              </div>
              <div className="research-content">
                <h4>{talk.title}</h4>
                <div className="talk-venue">{talk.venue}</div>
                <div className="talk-date">{talk.date}</div>
                {talk.description && (
                  <div className="talk-description">{talk.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  </Main>
);

export default Academic;
