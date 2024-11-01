import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Anh-Quan Pham</h2>
        <p>
          <a href="mailto:phamanhquanbill@gmail.com">phamanhquanbill@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi! I&apos;m Quan, a first-year Robotics Master&apos;s student at the{' '} <a href="https://www.grasp.upenn.edu/">GRASP Lab</a>,{' '} <a href="https://www.upenn.edu/">University of Pennsylvania</a> (UPenn).  Previously, I studied{' '}
        <a href="https://cecs.vinuni.edu.vn/">ECE</a>{' '} at {' '}
        <a href="https://vinuni.edu.vn/">VinUniversity</a>, and completed my research internship as a {' '}<a href="https://www.a-star.edu.sg/Scholarships/for-undergraduate-studies/singapore-international-pre-graduate-award-sipga">SIPGA</a> scholar
        at the{' '}
        <a href="https://www.a-star.edu.sg/Research/Institute-for-Infocomm-Research">Institute for Infocomm Research, A*STAR Singapore</a>.<br />
        I proudly come from the rice paddy fields of{' '}
        <a href="https://en.wikipedia.org/wiki/Can_Tho">Can Tho</a>, the heart of the Mekong Delta in Vietnam.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Anh-Quan Pham <Link to="/">anhquanpham.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
