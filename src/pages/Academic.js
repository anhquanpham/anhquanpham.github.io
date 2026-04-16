import React, { useState } from 'react';
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
          const equalContribution = !isString && author.equalContribution;
          const coAdvisor = !isString && author.coAdvisor;
          const projectLead = !isString && author.projectLead;
          const customSymbol = !isString ? author.symbol : null;
          const isBold = name === 'Anh-Quan Pham';
          const isLast = index === authors.length - 1;
          const key = `${name}-${index}`;
          const nameDisplay = name.replace(/ /g, '\u00A0');

          let suffix = null;
          if (customSymbol) suffix = customSymbol;
          else if (equalContribution) suffix = '§';
          else if (coAdvisor) suffix = '†';
          else if (projectLead) suffix = '‡';
          const authorElement = (
            <>
              {isBold ? <b>{nameDisplay}</b> : <span>{nameDisplay}</span>}
              {suffix && <sup className="author-suffix">{suffix}</sup>}
            </>
          );

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

const Academic = () => {
  const [expandedSummaries, setExpandedSummaries] = useState({});

  const toggleSummary = (title) => {
    setExpandedSummaries((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
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
              <a href="#talks">Talks</a>
            </p>
          </div>
        </header>
        {/* Research Projects Section */}
        <section id="research">
          <div className="research-heading">
            <h3>Research</h3>
            <p className="research-legend">
              § Equal contribution (unless noted). † Equal advising. ‡ Project lead.
            </p>
          </div>
          <div className="research-container">
            {researchData.map((project) => {
              const hasLinks = project.website || project.journal || project.arxiv
              || project.pdf || project.code || project.openreview || project.poster
              || project.video || project.x || project.bluesky;
              const hasActions = project.desc || hasLinks;
              const isSummaryOpen = !!expandedSummaries[project.title];
              return (
                <div className="research-item" key={project.title}>
                  <div className="research-image">
                    <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                  </div>
                  <div className="research-content">
                    <h4>{project.title}</h4>
                    {/* Authors as subtitle style, bolded name */}
                    {project.authors && (
                    <div className="research-subtitle">{formatAuthors(project.authors)}</div>
                    )}
                    {project.authorNote && (
                    <div className="research-author-note">{project.authorNote}</div>
                    )}
                    {/* Date as before */}
                    {project.date && <div className="research-date">{project.date}</div>}
                    {/* Award line, if present */}
                    {project.award && (
                    <div className="research-award">🏆 {project.award}</div>
                    )}
                    {hasActions && (
                      <div className="research-actions">
                        {project.desc && (
                          <a
                            href="#summary"
                            className="summary-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSummary(project.title);
                            }}
                          >
                            Summary
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website
                          </a>
                        )}
                        {project.journal && (
                          <a
                            href={project.journal}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Journal/Publisher
                          </a>
                        )}
                        {project.arxiv && (
                          <a
                            href={project.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            arXiv
                          </a>
                        )}
                        {project.pdf && (
                          <a
                            href={project.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            PDF
                          </a>
                        )}
                        {project.code && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code
                          </a>
                        )}
                        {project.openreview && (
                          <a
                            href={project.openreview}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            OpenReview
                          </a>
                        )}
                        {project.poster && (
                          <a
                            href={project.poster}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Poster
                          </a>
                        )}
                        {project.video && (
                          <a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Video
                          </a>
                        )}
                        {project.x && (
                          <a
                            href={project.x}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            X
                          </a>
                        )}
                        {project.bluesky && (
                          <a
                            href={project.bluesky}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Bluesky
                          </a>
                        )}
                      </div>
                    )}
                    {isSummaryOpen && project.desc && (
                      <div className="research-desc">{project.desc}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Courses Taught Section */}
        <section id="teaching">
          <div className="teaching-heading">
            <h3>Teaching</h3>
          </div>
          <div className="research-container">
            {coursesData.map((course) => {
              const courseKey = course.code;
              const isCourseOpen = !!expandedSummaries[courseKey];
              return (
                <div className="research-item" key={courseKey}>
                  <div className="research-image">
                    <img
                      src={course.image ? process.env.PUBLIC_URL + course.image : placeholder}
                      alt={course.title}
                    />
                  </div>
                  <div className="research-content">
                    <h4>{course.code}: {course.title}</h4>
                    <div className="course-role-term">{course.role}</div>
                    <div className="research-actions">
                      {course.description && (
                        <a
                          href="#summary"
                          className="summary-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSummary(courseKey);
                          }}
                        >
                          Summary
                        </a>
                      )}
                      {course.link && (
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Course Website
                        </a>
                      )}
                    </div>
                    {isCourseOpen && course.description && (
                      <div className="research-desc">{course.description}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Talks Section */}
        <section id="talks">
          <div className="talks-heading">
            <h3>Talks</h3>
          </div>
          <div className="research-container">
            {talksData.map((talk) => {
              const talkKey = talk.title;
              const isTalkOpen = !!expandedSummaries[talkKey];
              return (
                <div className="research-item" key={talkKey}>
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
                      <div className="research-actions">
                        <a
                          href="#summary"
                          className="summary-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSummary(talkKey);
                          }}
                        >
                          Summary
                        </a>
                      </div>
                    )}
                    {isTalkOpen && talk.description && (
                      <div className="research-desc">{talk.description}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Academic;
