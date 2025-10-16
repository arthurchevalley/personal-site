import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const Projects = () => (
  <Main
    title="Cadence"
    description="Learn more about Arthur Chevalley's shorter projects."
  >
    <article className="post" id="projects_study">
      <header>
        <div className="title">
          <h2>AI-based Prediction of Myocardium Viability Using Only [82Rb] PET/CT</h2>
          <p> This work tries to reduce radiation exposure and scan cost
            of myocardium viability assessment by using only one rubidium
            scan and AI compared to current clinical practice using a
            rubidium as well as an FDG exam.
            This is done by training multiple machine learning model
            using different signals defined on a polar map to predict
            the segment-wise classfication between normal, hibernating and
            fibrotic.
            This work was presented at <Link to="https://eanm25.eanm.org/">EANM 2025</Link> in a cutting edge science track organized by the AI Committee.
            The presentation slides are available the following <Link to="https://github.com/arthurchevalley/CADENCE-AI_for_Rubidium_Imaging/blob/main/Myocardium%20Viability/eanm2025_segmentwise_viability.pdf">GitHub page</Link>.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
