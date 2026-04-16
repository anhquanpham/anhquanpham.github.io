import React from 'react';
import 'katex/dist/katex.min.css';
import Main from '../../layouts/Main';

const DOC_URL = 'https://drive.google.com/file/d/1nCEWW72aznGb3MUIVO4i2qw-xAprxAjD/view?usp=sharing';

const BuildAudioAmplifier = () => (
  <Main title="Building an Audio Amplifier from scratch" description="Detailed description of the audio amplifier project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>Building an Audio Amplifier from scratch</h2>
          <p>January 2024</p>
          <a href={DOC_URL} target="_blank" rel="noopener noreferrer">
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
              VIEW DOCUMENTATION
            </button>
          </a>
        </div>
      </header>
      <div className="video-container" id="video-start">
        <iframe
          src="https://www.youtube.com/embed/kMlqtnKZqfU"
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
          src="https://drive.google.com/file/d/1nCEWW72aznGb3MUIVO4i2qw-xAprxAjD/preview"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Audio Amplifier Documentation"
        />
      </div>
    </article>
  </Main>
);

export default BuildAudioAmplifier;
