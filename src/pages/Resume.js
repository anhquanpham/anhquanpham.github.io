import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import PDFViewer from '../components/PDFViewer';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  CV: () => (
    <div className="cv-section">
      <div className="link-to" id="cv-pdf" />
      <div className="title">
        <h3>CV</h3>
      </div>
      <PDFViewer
        src="https://drive.google.com/file/d/1_QaYK7ndZCRf2AkhupB2XZBuSZCL8CuF/view?usp=sharing"
        title=""
        height={1000}
      />
    </div>
  ),
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="CV"
    description="Anh-Quan Pham's CV"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="#resume">CV</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => {
              const linkId = sec === 'CV' ? 'cv-pdf' : sec.toLowerCase();
              return (
                <h4 key={sec}>
                  <a href={`#${linkId}`}>{sec}</a>
                </h4>
              );
            })}
            <h4>
              <a
                href="https://drive.google.com/file/d/11tyuVUQtAkpt8VsQfA_KSCexRhEDkwcV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 15px',
                  backgroundColor: '#001F3F',
                  color: 'white',
                  border: '2px solid #001F3F',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontSize: '11px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow
                }}
              >
                Download 1-Page Resume
              </a>
            </h4>
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
