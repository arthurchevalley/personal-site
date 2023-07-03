import React from 'react';
import PropTypes from 'prop-types';

const LanguageForm = ({ data }) => (
  <article className="Language-container">
    <header>
      <h4 className="tongue">{data.tongue}:</h4>
      <p className="level">{data.level}</p>
    </header>
  </article>
);

LanguageForm.propTypes = {
  data: PropTypes.shape({
    tongue: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default LanguageForm;
