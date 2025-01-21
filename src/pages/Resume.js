import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Anh-Quan Pham's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>
            <Link to="resume">Resume</Link>
          </h2>
          <a href="https://drive.google.com/file/d/11tyuVUQtAkpt8VsQfA_KSCexRhEDkwcV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              style={{
                padding: '0px 10px',
                backgroundColor: '#001F3F',
                color: 'white',
                border: 'none',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              Download PDF
            </button>
          </a>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
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
