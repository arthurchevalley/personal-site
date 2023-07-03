import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Projects = () => (
  <Main
    title="Projects"
    description="Learn more about my projects."
  >
    <article className="post" id="projects_study">
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/Improving-FSOD-on-RSI-using-Sub-Parts">Unicycle robot controller using Governor in dynamic environment</Link></h2>
          <p> Development of a second order controller for a unicycle
            robot in a highly dynamical environment using
            power diagrams and governor approach. This allows to have smooth dynamics
            and optimize the motion resulting on faster goal reaching than classical control.
          </p>
        </div>
      </header>
      <div className="cell-container">
        <article className="mini-post">
          <a href="https://github.com/arthurchevalley/Improving-FSOD-on-RSI-using-Sub-Parts" className="image">
            <img src={`${PUBLIC_URL}/images/projects/Three_Agents.gif`} alt="Three Agents Setup" />
          </a>
        </article>
      </div>
    </article>
  </Main>
);

export default Projects;
