import React from 'react';
import PropTypes from 'prop-types';

import {
  ArticleBody, Cover, CoverAuthor, Header, Main,
} from '@genericPage/GenericPage.styled';
import {
  Container, Typography,
} from '@components';
import {
  Files, Pricing,
} from '@genericPage';
import { BlogPosts } from '@components/HomePage/BlogPosts';

import { renderGenericPage } from '@utils/helpers';

const GenericPage = ({
  pageContext: {
    blogPosts,
    cover,
    coverAuthor,
    coverHasAuthor,
    files,
    hasFiles,
    hasPosts,
    hasPrices,
    isCoverBlurred,
    isCoverDarkened,
    isHeaderWhite,
    prices,
    sections,
    subHeading,
    title,
  },
}) => (
  <Main>
    <Header isWhite={isHeaderWhite}>
      <Cover
        $isBlurred={isCoverBlurred}
        $isDarkened={isCoverDarkened}
        image={cover}
      />
      <Container centered>
        <Typography
          as="h1"
          size="hero"
        >
          {title}
        </Typography>
        <Typography
          as="h2"
          size="xlarge"
        >
          {subHeading}
          {coverHasAuthor && (
          <CoverAuthor>
            autor zdjęcia:
            {' '}
            {coverAuthor}
          </CoverAuthor>
          )}
        </Typography>
      </Container>
    </Header>
    <ArticleBody>
      {hasPosts && (
        <BlogPosts
          $hasSmallerFont
          columns={3}
          posts={blogPosts}
        />
      )}
      {hasPrices && <Pricing prices={prices} />}
      {hasFiles && <Files files={files} />}
      {sections && renderGenericPage(sections)}
    </ArticleBody>
  </Main>
);

GenericPage.propTypes = {
  pageContext: PropTypes.shape({
    blogPosts: PropTypes.arrayOf(PropTypes.shape({})),
    cover: PropTypes.shape({}),
    coverAuthor: PropTypes.string,
    coverHasAuthor: PropTypes.bool,
    files: PropTypes.arrayOf(PropTypes.shape({})),
    hasFiles: PropTypes.bool,
    hasPosts: PropTypes.bool,
    hasPrices: PropTypes.bool,
    isCoverBlurred: PropTypes.bool,
    isCoverDarkened: PropTypes.bool,
    isHeaderWhite: PropTypes.bool,
    prices: PropTypes.arrayOf(PropTypes.shape({})),
    sections: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.shape({})),
    ]),
    subHeading: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default GenericPage;
