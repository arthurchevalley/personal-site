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
          <h2><Link to="https://github.com/arthurchevalley/Vaihingen-Segmentation">Hypercolumns, UNet and GSUnet comparison</Link></h2>
          <p> Comparison of multiple method to perform segmentation on <Link to="https://www.isprs.org/education/benchmarks/UrbanSemLab/default.aspx">Vaihingen</Link> dataset. Three models with increasing complexity were tested:
            Hypercolumns, UNet ans Gated-Shaped UNet.
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/Voices-and-Faces-Matching">Voice and Face matching using MobileNet</Link></h2>
          <p> Classification of persons based on their voice and faces.
            To do so, multiple processes were compared from basic VGG network
            to transformer based MobileNet V2.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
