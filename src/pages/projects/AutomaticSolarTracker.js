import React from 'react';
import 'katex/dist/katex.min.css';
import Main from '../../layouts/Main';

const AutomaticSolarTracker = () => (
  <Main title="Automatic Solar Tracker" description="Detailed description of the automatic solar tracker project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>Automatic Solar Tracker</h2>
          <p>December 2024</p>
          <a href="https://github.com/anhquanpham/auto-solar-tracker" target="_blank" rel="noopener noreferrer">
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
                alignItems: 'center',
              }}
            >
              VIEW ON GITHUB
            </button>
          </a>
        </div>
      </header>
      <div className="video-container" id="video-start">
        <iframe
          src="https://www.youtube.com/embed/_dyrXfN8FHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p />
      <p />
      <p />
      <p style={{ marginTop: '20px', textAlign: 'left' }}>
        For the full project documentation and technical details, please refer to the documentation.
      </p>
      <div className="pdf-container" style={{ marginTop: '20px' }}>
        <h3>Project Documentation</h3>
        <iframe
          src="https://drive.google.com/file/d/1sabMstdeyxob41TUutL-DRe9vm23T5BZ/preview"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Automatic Solar Tracker Documentation"
        />
      </div>
    </article>
  </Main>
);

export default AutomaticSolarTracker;
