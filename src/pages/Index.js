import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Anh-Quan (Bill) Pham's personal website. MS Robotics at the University of Pennsylvania."
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
    </article>
  </Main>
);

export default Index;