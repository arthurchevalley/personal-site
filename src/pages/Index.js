import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Index = () => (
  <Main
    description={"Arthur Chevalley's personal website. Ecole Polytechnique Fédérale de Lausanne graduate in robotic engineering."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my website!</Link></h2>
        </div>
      </header>
      <p>
        Hi, I&apos;m Arthur, a graduated <a href="https://www.epfl.ch/fr/">EPFL</a> robotic engineer and about to start a PhD. My main passions are about Machine Learning, Space Technologies, Mobile Robot Control and Art!{' '}
      </p>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>,
        check out my {' '}
        <Link to="/resume">resume</Link> and {' '}
        <Link to="/projects/">projects</Link>, {' '}
        or simply <Link to="/contact">contact me</Link>.
      </p>
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me_flou.jpeg`} alt="" />
        </Link>
        <header>
          <h2>Arthur Chevalley</h2>
          <p>Robotic engineer, programmer & climbing enthusiast</p>
        </header>
      </section>
    </article>
  </Main>
);

export default Index;
