import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import researchData from '../data/research';
import coursesData from '../data/courses';
import talksData from '../data/talks';

const placeholder = '/images/placeholder.png'; // Use a generic placeholder image

// Helper to bold "Anh-Quan Pham" in authors string
function formatAuthors(authors) {
  if (!authors) return null;
  return (
    <span className="research-authors">
      {authors.split(/(Anh-Quan Pham)/g).map((part) => {
        if (part === 'Anh-Quan Pham') {
          return <b key={part}>Anh-Quan Pham</b>;
        }
        return part;
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
                {project.poster && (
                  <div className="research-btns">
                    <a
                      href={project.poster}
                      className="course-website-btn research-poster-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Poster
                    </a>
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
              </div>
              <div className="research-content">
                <h4>{course.code}: {course.title}</h4>
                <div className="course-role-term">{course.role}</div>
                {course.description && (
                  <div className="course-description">{course.description}</div>
                )}
                {course.link && (
                  <a
                    href={course.link}
                    className="course-website-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Course Website
                  </a>
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
