import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Anh-Quan Pham via email @phamanhquanbill@gmail.com "
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <div className="booking-section" style={{ margin: '3em 0' }}>
        <p>Or schedule a meeting with me directly:</p>
        <div
          className="booking-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            height: '800px',
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            margin: '20px 0',
          }}
        >
          <iframe
            src="https://calendar.app.google/zdhuZezvTMyWKcUP8"
            title="Book a Meeting"
            frameBorder="0"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
      <p>
        I strongly encourage students from underrepresented or underprivileged backgrounds to
        reach out with any questions or if you think I might be helpful. I grew up in
        Vietnam&#39;s Mekong Delta, a region with the lowest proportion of trained labor in the
        country, where economic pressure often takes priority over long-term educational planning.
        Navigating international research, education, and career paths can feel confusing and
        intimidating, and in many ways I am still navigating them myself.
        I was extremely fortunate to meet many exceptional people who helped and guided me along
        the way. While I do not have all the answers, I am always happy to talk, listen, and share
        what I have learned. Starting points matter, and access is uneven, but with the right
        exposure, sustained effort, and openness, meaningful opportunities can still emerge, often
        with a more interesting story along the way.
      </p>
      <p>I&#39;m also very responsive on the platforms listed below:</p>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
