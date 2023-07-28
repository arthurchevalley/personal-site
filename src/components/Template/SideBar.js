import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_flou.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Arthur Chevalley</h2>
        <p><a href="mailto:chevalleyarthur@gmail.com">chevalleyarthur@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Arthur! I am a recently <a href="https://www.epfl.ch/fr/">EPFL</a> graduate in robotic engineering and currently doing my civil duty in switzerland while investigating coding and ML applications!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Arthur Chevalley <Link to="/">https://arthurchevalley.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
