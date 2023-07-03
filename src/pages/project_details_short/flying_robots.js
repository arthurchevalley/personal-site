import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn more about Arthur Chevalley's shorter projects."
  >
    <article className="post" id="projects_study">
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/Autonomous-Crazyflies-Quadcopter-Navigation">Crazyflie Navigation</Link></h2>
          <p> This program allows a <Link to="https://www.bitcraze.io/products/old-products/crazyflie-2-0/">crazyflie</Link> to take off from a 0.3x0.3x0.1 meters pad with a previously known location.
            It then goes through an unknown zone filled with obstacles that are avoided using IR
            sensors to reach the search area.
            In this search area, of known dimensions, a landing pad is randomly
            located and must be found.
            Then, after landing, the quadcopter takes off again an regain the original take-off pad.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
