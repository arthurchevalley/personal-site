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
          <h2><Link to="https://github.com/arthurchevalley/Improving-FSOD-on-RSI-using-Sub-Parts">Few-Shot Object Detection on Remote Sensing Images</Link></h2>
          <p> The aim of this project is to achieve the best accuracy possible
            on novel object with very limited samples in the 1-5-10 shots scenario.
            As remote sensing images are used,
            object refers to all kind of man-made element, from train station to vehicles.
            To improve the results, a sub-part approach has been investigated by having
            a contrastive training procedure.
            This work lead to an <Link to="https://ieeexplore.ieee.org/document/10282852">Conference paper</Link> that has been presented
            at <Link to="https://2023.ieeeigarss.org/">IGARSS 2023</Link>.
            Further details are available on the associated <Link to="https://github.com/arthurchevalley/Improving-FSOD-on-RSI-using-Sub-Parts">GitHub page</Link>.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
