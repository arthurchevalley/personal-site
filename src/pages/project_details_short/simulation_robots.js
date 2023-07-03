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
          <h2><Link to="https://github.com/arthurchevalley/Legged-Robots-Projects">Bi-Pedal Navigation</Link></h2>
          <p> Control of a bi-pedal robot, i.e. ATLAS, using a simple controller in PyBullet.</p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/Legged-Robots-Projects">Quadruped Navigation</Link></h2>
          <p> Multiple controller designs to control a spot-like robot. One controller
            uses CPG, one Virtual Model Control approach, one simple PID and one
            using reinforcement learning.
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/MCCS-Project">Autonomous Racetrack following</Link></h2>
          <p> Implementation of a controller to complete path following of a car.
            It is done using MATLAB, a LQR approach using an observer.
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2><Link to="/projects/SimulationRobots/">Autonomous Quadcopter flight</Link></h2>
          <p>  Development of MPC controller to achieve path following of a quadcopter.
            There is one implementation in <Link to="https://github.com/arthurchevalley/MPC-Quadcopter-Simulation">MATLAB</Link> and one in <Link to="https://github.com/arthurchevalley/ControlFun/blob/main/MPC_Python.py">Python</Link>.
            Note that the python implementation is only for the basic controller.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
