import React from 'react';
import PropTypes from 'prop-types';

import LanguageForm from './Languages/language';

const Language = ({ data }) => (
  <div className="languages">
    <div className="link-to" id="languages" />
    <div className="title">
      <h3>Languages</h3>
    </div>
    <div className="language-list">
      {data.map((aa) => (
        <LanguageForm
          data={aa}
          key={aa.tongue}
        />
      ))}
    </div>
  </div>
);

Language.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    tongue: PropTypes.string,
    level: PropTypes.string,
  })),
};

Language.defaultProps = {
  data: [],
};

export default Language;
