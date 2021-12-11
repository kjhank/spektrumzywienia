import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@components';
import {
  BlogPostImage, BlogPostsSection, BlogPostTitle, PostLink, PostsContainer, PostsList, SinglePost,
} from './styled';

export const BlogPosts = ({
  columns, $hasSmallerFont, posts, title,
}) => (
  <BlogPostsSection>
    <PostsContainer>
      {title && (
      <Typography
        align="center"
        as="h2"
        hasBottomMargin
        size="xxlarge"
      >
        {title}
      </Typography>
      )}
      <PostsList columns={columns}>
        {posts.map(post => {
          const {
            acf: { cover },
            slug, title: { rendered: postTitle },
          } = post;

          const url = `/${slug}`;

          return (
            <SinglePost key={postTitle}>
              <PostLink
                $hasSmallerFont={$hasSmallerFont}
                to={url}
              >
                <BlogPostImage image={cover} />
                <BlogPostTitle>{postTitle}</BlogPostTitle>
              </PostLink>
            </SinglePost>
          );
        })}
      </PostsList>
    </PostsContainer>
  </BlogPostsSection>
);

BlogPosts.propTypes = {
  $hasSmallerFont: PropTypes.bool,
  columns: PropTypes.number,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string,
};

BlogPosts.defaultProps = {
  $hasSmallerFont: false,
  columns: 2,
  title: null,
};
