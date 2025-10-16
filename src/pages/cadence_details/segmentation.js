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
          <h2>Fully automatic left ventricle Segmentation on [82Rb] PET/CT</h2>
          <p> This work led by <Link to="https://www.linkedin.com/in/mohammadreza-amirian-03391584">Mohammadreza Amirian</Link> proposes
            a left ventricle delineation procedure as well as a
            deep learning model to automatically predict the left ventricle.
            Early rubidium PET blood pool is used to label the inner wall
            whereas the late rubidium PET and registered CT are used
            for the outer walls.
            A <Link to="https://github.com/MIC-DKFZ/nnUNet">nnU-Net</Link> model is trained on
            a challenging cohort with high necrosis reaching satisfactory results.
            This work was presented at <Link to="https://eanm25.eanm.org/">EANM 2025</Link> in a cutting edge science track organized by the AI Committee.
            The presentation slides are available the following <Link to="https://github.com/arthurchevalley/CADENCE-AI_for_Rubidium_Imaging/blob/main/Left%20Ventricle%20Segmentation/eanm_2025_LVSegmentation.pdf">GitHub page</Link>.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Projects;
