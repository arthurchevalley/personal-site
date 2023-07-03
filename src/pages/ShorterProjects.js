import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import ShortCell from '../components/Projects/ShortCell';

import datapersoShort from '../data/personnal_projects_short';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Arthur Chevalley's projects."
  >
    <article className="post" id="projects_study">
      <header>
        <div className="title">
          <h2><Link to="/ShorterProjects">Shorter Projects</Link></h2>
          <p>A selection of shorter projects on which I worked.
            For now, it mainly includes work done during my master but is,
            and will, be increasing as time goes!
          </p>
        </div>
      </header>
      {datapersoShort.map((projectperso) => (
        <ShortCell
          data={projectperso}
          key={projectperso.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
