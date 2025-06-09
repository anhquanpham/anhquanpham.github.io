import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
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
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <section>
        <h3>News & Updates</h3>
        <p>
          <strong>Jan 2025:</strong> Excited to share that I&apos;ve started as a Graduate
          Research Assistant
          at the GRASP Lab,
          University of Pennsylvania, working on various aspects of Reinforcement
          Learning for Robotics!
        </p>
        <p>
          <strong>Jan 2025:</strong> I will be working as a TA for CIS 5800 Machine
          Perception (Spring 2025) after earning an A+ in Fall 2024!
        </p>
        <p>
          <strong>Jan 2025:</strong> I just updated my latest {' '}
          <Link to="/projects">Projects</Link>. Go check them out!
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
