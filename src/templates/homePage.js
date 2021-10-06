import React from 'react';
import PropTypes from 'prop-types';

import { Main } from '@genericPage/GenericPage.styled';

import { renderHomePage } from '@utils/helpers';

const HomePage = ({ pageContext: { sections } }) => (
  <Main>
    {renderHomePage(sections)}
  </Main>
);

HomePage.propTypes = {
  pageContext: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default HomePage;
