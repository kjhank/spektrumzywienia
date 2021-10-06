import React from 'react';
import PropTypes from 'prop-types';

export const ExternalLink = ({
  children, url, ...props
}) => (
  <a
    href={url}
    rel="noreferrer noopener nofollow"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
