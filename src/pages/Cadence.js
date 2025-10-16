import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

import data from '../data/cadence';

const Cadence = () => (
  <Main
    title="CADENCE"
    description="Learn about Arthur Chevalley's PhD."
  >
    <article className="post" id="Cadence">
      <header>
        <div className="title">
          <h2><Link to="/cadence/">CADENCE</Link></h2>
          <p><Link to="https://data.snf.ch/grants/grant/219430">CADENCE</Link> is a project on the use of deep learning methods on a variety of tasks
            using rubidium PET volumes. My PhD is a large part of this project.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Cadence;
