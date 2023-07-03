import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Arthur Chevalley's personal website. Ecole Polytechnique Fédérale de Lausanne graduate in robotic engineering."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my website!</Link></h2>
          <p>
            Please feel free to read more <Link to="/about">about me</Link>,
            check out my {' '}
            <Link to="/resume">resume</Link> and {' '}
            <Link to="/projects">projects</Link>, {' '}
            or simply <Link to="/contact">contact me</Link>.
          </p>
        </div>
      </header>
      <p>
        I am a freshly graduated robotic engineer passionate about Machine Learning, Space Technologies, Mobile Robot Control and Art!{' '}
      </p>
      <p>
        Browsing this website you will find information about me, my work and projects!
      </p>
    </article>
  </Main>
);

export default Index;
