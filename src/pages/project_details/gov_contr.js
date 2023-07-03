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
    </article>
  </Main>
);

export default Projects;
