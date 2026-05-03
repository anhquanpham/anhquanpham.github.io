import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import researchData from '../data/research';

// Selected Work: entries in research.js with featured: true (order follows research.js)
const selectedWork = researchData.filter((p) => p.featured);

function formatAuthors(authors) {
  if (!authors || !Array.isArray(authors)) return null;
  return (
    <span className="research-authors">
      {authors.map((author, idx) => {
        const name = typeof author === 'string' ? author : author.name;
        const link = typeof author === 'string' ? null : author.link;
        const equalContribution = typeof author !== 'string' && author.equalContribution;
        const coAdvisor = typeof author !== 'string' && author.coAdvisor;
        const projectLead = typeof author !== 'string' && author.projectLead;
        const customSymbol = typeof author !== 'string' ? author.symbol : null;
        let suffix = null;
        if (customSymbol) suffix = customSymbol;
        else if (equalContribution) suffix = '§';
        else if (coAdvisor) suffix = '†';
        else if (projectLead) suffix = '‡';
        const isBold = name === 'Anh-Quan Pham';
        const key = link ? `${name}-${link}` : name;
        const nameDisplay = name.replace(/ /g, '\u00A0');
        const authorEl = (
          <>
            {isBold ? <b>{nameDisplay}</b> : <span>{nameDisplay}</span>}
            {suffix && <sup className="author-suffix">{suffix}</sup>}
          </>
        );
        const isLast = idx === authors.length - 1;
        if (link) {
          return (
            <React.Fragment key={key}>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                {authorEl}
              </a>
              {!isLast && <span className="research-authors-sep">, </span>}
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={key}>
            {authorEl}
            {!isLast && <span className="research-authors-sep">, </span>}
          </React.Fragment>
        );
      })}
    </span>
  );
}

const Index = () => {
  const [expandedSummaries, setExpandedSummaries] = useState({});

  const toggleSummary = (title) => {
    setExpandedSummaries((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Main
      description={
        "Anh-Quan (Bill) Pham's personal website. MS Robotics at the University of Pennsylvania (UPenn)."
        + 'Email: phamanhquanbill@gmail.com'
      }
    >
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">Anh-Quan (Bill) Pham</Link>
            </h2>
            <p>
              You can just call me Bill or Quan.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">CV</Link>, <Link to="/projects">projects</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <p>
          I am a final-year master&apos;s student in Robotics at the{' '}
          <a href="https://www.grasp.upenn.edu/" target="_blank" rel="noopener noreferrer">GRASP Lab, University of Pennsylvania</a>. I am also currently the President of the Penn Robotics Entrepreneurs Club (PREC).
          <br /><br />
          I enjoy thinking about problems in scalable robot learning and reinforcement learning. I am fortunate to be advised by Professors{' '}
          <a href="https://www.seas.upenn.edu/~dineshj/" target="_blank" rel="noopener noreferrer">Dinesh{'\u00A0'}Jayaraman</a>,{' '}
          <a href="https://www.seas.upenn.edu/~eeaton/" target="_blank" rel="noopener noreferrer">Eric{'\u00A0'}Eaton</a>, and{' '}
          <a href="https://www.cis.upenn.edu/~kostas/" target="_blank" rel="noopener noreferrer">Kostas{'\u00A0'}Daniilidis</a>, and to collaborate closely with Professors{' '}
          <a href="https://jorge-a-mendez.github.io/" target="_blank" rel="noopener noreferrer">Jorge{'\u00A0'}Méndez{'\u2011'}Méndez</a>,{' '}
          <a href="https://complexsystemsupenn.com/personal" target="_blank" rel="noopener noreferrer">Dani{'\u00A0'}S.{'\u00A0'}Bassett</a>, and{' '}
          <a href="https://obastani.github.io/" target="_blank" rel="noopener noreferrer">Osbert{'\u00A0'}Bastani</a>. I am incredibly grateful to be mentored by{' '}
          <a href="https://marcelhussing.github.io/" target="_blank" rel="noopener noreferrer">Marcel{'\u00A0'}Hussing</a>
          {' '}in reinforcement learning, and by{' '}
          <a href="https://junyaoshi.github.io/" target="_blank" rel="noopener noreferrer">Junyao{'\u00A0'}Shi</a>
          {' '}and{' '}
          <a href="https://ksb21st.github.io/" target="_blank" rel="noopener noreferrer">Subin{'\u00A0'}Kim</a>
          {' '}in robot learning in my day-to-day research.
          <br /><br />
          Before that, I studied interpretable reinforcement learning at the{' '}
          <a href="https://www.a-star.edu.sg/i2r" target="_blank" rel="noopener noreferrer">A*STAR Institute{'\u00A0'}for{'\u00A0'}Infocomm{'\u00A0'}Research{'\u00A0'}</a> Singapore under{' '}
          <a href="https://sites.google.com/site/jsenthilnath/" target="_blank" rel="noopener noreferrer">Dr. Senthilnath Jayavelu</a>. During my 2.5 years of undergrad at{' '}
          <a href="https://vinuni.edu.vn/" target="_blank" rel="noopener noreferrer">VinUniversity</a>, I applied RL to next-generation telecommunication networks under Professor{' '}
          <a href="https://www.tcd.ie/scss/people/academic-staff/nguyenva/" target="_blank" rel="noopener noreferrer">Van{'\u2011'}Dinh{'\u00A0'}Nguyen</a>, exploring resource allocation and network slicing.
        </p>
        <section id="selected-work" className="selected-work">
          <div className="selected-work__heading">
            <h3>Selected Work</h3>
            <p className="selected-work__legend">
              § Equal contribution (unless noted). † Equal advising. ‡ Project lead.
            </p>
          </div>
          <div className="selected-work__list">
            {selectedWork.map((project) => {
              const hasLinks = project.website || project.journal || project.arxiv
              || project.pdf || project.code || project.openreview || project.poster
              || project.video || project.x || project.bluesky;
              const hasActions = project.desc || hasLinks;
              const isFirst = project.title === selectedWork[0].title;
              const isSummaryOpen = !!expandedSummaries[project.title];
              return (
                <article className="selected-work__item" key={project.title}>
                  <div className={`selected-work__thumb ${isFirst ? 'selected-work__thumb--crop' : ''}`}>
                    <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                  </div>
                  <div className="selected-work__body">
                    <h4 className="selected-work__title">{project.title}</h4>
                    {project.authors && (
                    <div className="selected-work__authors">{formatAuthors(project.authors)}</div>
                    )}
                    {project.authorNote && (
                    <div className="selected-work__note">{project.authorNote}</div>
                    )}
                    {project.date && <div className="selected-work__date">{project.date}</div>}
                    {project.award && (
                    <div className="selected-work__award">🏆 {project.award}</div>
                    )}
                    {hasActions && (
                    <div className="selected-work__actions">
                      {project.desc && (
                        <a
                          href="#summary"
                          className="selected-work__action-btn summary-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSummary(project.title);
                          }}
                        >
                          Summary
                        </a>
                      )}
                      {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a>
                      )}
                      {project.journal && (
                        <a href={project.journal} target="_blank" rel="noopener noreferrer">Journal/Publisher</a>
                      )}
                      {project.arxiv && (
                        <a href={project.arxiv} target="_blank" rel="noopener noreferrer">arXiv</a>
                      )}
                      {project.pdf && (
                        <a href={project.pdf} target="_blank" rel="noopener noreferrer">PDF</a>
                      )}
                      {project.code && (
                        <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
                      )}
                      {project.openreview && (
                        <a href={project.openreview} target="_blank" rel="noopener noreferrer">OpenReview</a>
                      )}
                      {project.poster && (
                        <a href={project.poster} target="_blank" rel="noopener noreferrer">Poster</a>
                      )}
                      {project.video && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer">Video</a>
                      )}
                      {project.x && (
                        <a href={project.x} target="_blank" rel="noopener noreferrer">X</a>
                      )}
                      {project.bluesky && (
                        <a href={project.bluesky} target="_blank" rel="noopener noreferrer">Bluesky</a>
                      )}
                    </div>
                    )}
                    {isSummaryOpen && project.desc && (
                    <div className="selected-work__summary">{project.desc}</div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="news-updates">
          <div className="news-updates__heading">
            <h3>News & Updates</h3>
          </div>
          <p>
            <strong>April 2026:</strong>{' '}
            <span style={{ color: '#ffb020' }}>
              🚀 I&apos;m joining the AI Research team at{' '}
              <a href="https://www.dyna.co/mission" target="_blank" rel="noopener noreferrer">
                DYNA Robotics
              </a>
              {' '}this June to build commercial-grade physical AGI. 🧠
            </span>
          </p>
          <p style={{ color: '#f2c94c' }}>
            <strong>April 2026:</strong> 🎉 Excited to share that{' '}
            <a href="https://doi.org/10.48550/arXiv.2511.12022" target="_blank" rel="noopener noreferrer">
              SBAMP: Sampling-Based Adaptive Motion Planning
            </a>
            {' '}has been accepted to the{' '}
            <a
              href="https://sites.google.com/robotics.utias.utoronto.ca/icra26-frontiers-optimization"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workshop on Frontiers of Optimization for Robotics (2nd Edition)
            </a>
            {' '}at ICRA 2026! 🤖 This marks my first project in a research leadership role (last author).
            Grateful for the team that made this possible. 🦾
          </p>
          <p style={{ color: '#f2c94c' }}>
            <strong>April 2026:</strong> 🎉 Exciting news: {' '}
            <a href="https://arxiv.org/pdf/2512.10891" target="_blank" rel="noopener noreferrer">
              Iterative Compositional Data Generation for Robot Control
            </a>
            {' '}has been accepted to{' '}
            <a href="https://jmlr.org/tmlr/" target="_blank" rel="noopener noreferrer">
              Transactions on Machine Learning Research (TMLR)
            </a>
            ! Really grateful to the TMLR reviewers and action editor for their sharp, constructive feedback. 🙌 Check out our{' '}
            <a href="https://anhquanpham.github.io/iterative-comp-rl-generation/" target="_blank" rel="noopener noreferrer">
              project website
            </a>
            {' '}and the open discussion on{' '}
            <a href="https://openreview.net/forum?id=cASorO1kiy" target="_blank" rel="noopener noreferrer">
              OpenReview
            </a>
            .
          </p>
          <p>
            <strong>December 2025:</strong> Our new paper,{' '}
            <a href="https://arxiv.org/abs/2512.10891" target="_blank" rel="noopener noreferrer">
              Iterative Compositional Data Generation for Robot Control
            </a>
            , is out! We are excited to open-source the code and share the work. Try it out on{' '}
            <a href="https://github.com/anhquanpham/iterative-comp-rl-generation" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' '}and join the discussion on{' '}
            <a href="https://x.com/_anhquanpham/status/2002083468633911806?s=20" target="_blank" rel="noopener noreferrer">
              Twitter/X
            </a>
            {' '}and{' '}
            <a href="https://bsky.app/profile/anhquanpham.bsky.social/post/3maeb7a7y5s2f" target="_blank" rel="noopener noreferrer">
              Bluesky
            </a>
            .
          </p>
          <p>
            <strong>May 2025:</strong> I will serve as President of the Penn Robotics
            Entrepreneurs Club (PREC) during the 2025–2026 year!
          </p>
          <p>
            <strong>January 2025:</strong> Excited to share that I&apos;ve started as a Graduate
            Research Assistant
            at the GRASP Lab,
            University of Pennsylvania, working on various aspects of Reinforcement
            Learning for Robotics!
          </p>
          <p>
            <strong>January 2025:</strong> I will be working as a TA for CIS 5800 Machine
            Perception (Spring 2025) after earning an A+ in Fall 2024!
          </p>
        </section>
      </article>
    </Main>
  );
};

export default Index;
