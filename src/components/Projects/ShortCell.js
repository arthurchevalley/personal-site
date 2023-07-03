import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ShortCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><Link to={data.page}>{data.title}</Link></h3>
      </header>
      <a href={data.page} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={' '} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

ShortCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    page: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShortCell;
