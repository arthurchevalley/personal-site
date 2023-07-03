import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn more about my projects."
  >
    <article className="post" id="projects_study">
      <header>
        <div className="title">
          <h2><Link to="https://github.com/arthurchevalley/MAML-RSI-Classification">Model-Agnostic Meta-Learning few-shot Classification</Link></h2>
          <p> Investigation of self-supervised model using a model agnostic meta-learning (MAML)
            approach for few-shot landcover classification using similarity based task creation.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
