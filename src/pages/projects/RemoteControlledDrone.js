import React from 'react';
import 'katex/dist/katex.min.css';
import Main from '../../layouts/Main';

const RemoteControlledDrone = () => (
  <Main title="Building a remote-controlled drone from scratch" description="Detailed description of the remote-controlled drone project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>Building a remote-controlled drone from scratch
          </h2>
          <p>February 2024</p>
          <a href="https://doi.org/10.5281/zenodo.17599019" target="_blank" rel="noopener noreferrer">
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
              View Documentation
            </button>
          </a>
        </div>
      </header>
      <div className="video-container" id="video-start">
        <iframe
          src="https://www.youtube.com/embed/kGgRyerX6J8"
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
        For the full project documentation and technical details, please
        refer to the documentation.
      </p>
      <div className="pdf-container" style={{ marginTop: '20px' }}>
        <h3>Project Documentation</h3>
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent('https://zenodo.org/record/17599019/files/drone_scratch.pdf')}&embedded=true`}
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Drone Project Documentation"
        />
      </div>
    </article>
  </Main>
);
export default RemoteControlledDrone;
