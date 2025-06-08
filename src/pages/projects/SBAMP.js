import React from 'react';
import 'katex/dist/katex.min.css';
import Main from '../../layouts/Main';

const SBAMP = () => (
  <Main title="SBAMP: Sampling Based Adaptive Motion Planning" description="Detailed description of the Sampling Based Adaptive Motion Planning project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>SBAMP: Sampling Based Adaptive Motion Planning
          </h2>
          <p>May 2025</p>
          <a href="https://github.com/anhquanpham/SBAMP" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              style={{
                marginTop: '0px',
                padding: '10px 10px',
                backgroundColor: '#001F3F',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Centers text vertically
              }}
            >
              View on GitHub
            </button>
          </a>
        </div>
      </header>
      <div className="video-container" id="video-start">
        <iframe
          src="https://www.youtube.com/embed/mtq3qeJFjX0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p style={{ marginTop: '20px', textAlign: 'left' }}>
        For the simulation and hardware implementation instructions, please
        refer to the GitHub link provided above.
      </p>
      <div className="pdf-container" style={{ marginTop: '20px' }}>
        <h3>Project Poster</h3>
        <iframe
          src="/pdf/SBAMP-poster.pdf" // Replace with your actual PDF path
          width="100%"
          height="1300px"
          style={{ border: 'none' }}
          title="SBAMP PDF Document"
        />
      </div>
      <div className="pdf-container" style={{ marginTop: '20px' }}>
        <h3>Project Paper</h3>
        <iframe
          src="/pdf/SBAMP-paper.pdf" // Replace with your actual PDF path
          width="100%"
          height="1100px"
          style={{ border: 'none' }}
          title="SBAMP PDF Document"
        />
      </div>
    </article>
  </Main>
);
export default SBAMP;
