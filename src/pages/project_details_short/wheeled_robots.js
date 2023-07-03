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
          <h2><Link to="https://github.com/arthurchevalley/LOOMO-robot-navigation-alorigthm">Loomo Navigation</Link></h2>
          <p>The main goal of this project was to make a <Link to="https://store.segway.com/segway-loomo-mini-transporter-robot-sidekick">Loomo</Link> robot
            capable of detecting and following a specific person.
            This was achieved using <Link to="https://github.com/WongKinYiu/yolor">YoloR</Link> detector, <Link to="https://github.com/nwojke/deep_sort">DeepSORT</Link> algorithm
            as well as  <Link to="https://github.com/google/mediapipe">MediaPipe</Link> to detect a specific human pose.
            Before, conducting a robot race, the algorithm was developed
            to be launched on <Link to="https://colab.research.google.com/">Google Colab</Link> using a laptop webcam.
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/Thymio-Path-Planning-and-Control">Thymio Navigation</Link></h2>
          <p> This project is implementing three algorithm to navigate a <Link to="https://www.thymio.org/">Thymio</Link> robot in a semi-static environment.
            The first algorithm is detecting the robot, fixed obstacles and goal
            using a webcam providing global view.
            The second is the A* path planning algorithm to planned the best path possible.
            Finally, the robot navigation is controlled with the help
            of an <Link to="https://en.wikipedia.org/wiki/Extended_Kalman_filter">extended kalman filter</Link>
            to allow temporary webcam occlusion and movable obstacles avoidance using IR sensors.
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2><Link to="https://github.com/GusJea/Projet-micro-informatique">E-Puck 2 Navigation</Link></h2>
          <p> For this project the goal is to navigate an <Link to="https://www.gctronic.com/doc/index.php/e-puck2">epuck 2</Link> unicycle to a specific point.
            This point varying as it is defined by the source of emission of a 778 Hz sound.
            In addition, IR sensors are used to avoid obstacles on the vicinity of the robot
            while a TOF sensor is used to detect further obstacles and correct the trajectory.
            Note that there is no knowledge of the environment as the obstacles can have
            any shapes and position.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
