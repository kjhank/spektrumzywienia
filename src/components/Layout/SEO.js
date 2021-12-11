import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const SEO = ({
  metadata, path, siteUrl,
}) => {
  const {
    siteName, yoast,
  } = metadata;

  const htmlAttributes = {
    lang: 'pl-PL',
  };

  const title = path === '/' ? siteName : yoast.title;

  return (
    <Helmet htmlAttributes={htmlAttributes}>
      <meta
        content={`${siteUrl}${path}`}
        property="og:url"
      />
      {title && [
        <title>{title}</title>,
        <meta
          content={title}
          property="og:title"
        />,
      ]}
      {yoast.og_locale && (
        <meta
          content={yoast.og_locale}
          property="og:locale"
        />
      )}
      {yoast.og_type && (
        <meta
          content={yoast.og_type}
          property="og:type"
        />
      )}
      {yoast.og_site_name && (
        <meta
          content={yoast.og_site_name}
          property="og:site_name"
        />
      )}
      {yoast.og_description && (
        <meta
          content={yoast.og_description}
          property="og:description"
        />
      )}
      {yoast.twitter_card && (
        <meta
          content={yoast.twitter_card}
          property="twitter:card"
        />
      )}
      {yoast.twitter_description && (
        <meta
          content={yoast.twitter_description}
          property="twitter:description"
        />
      )}
      {yoast.twitter_image && (
        <meta
          content={yoast.twitter_image}
          property="twitter:image"
        />
      )}
      {yoast.twitter_title && (
        <meta
          content={yoast.twitter_title}
          property="twitter:title"
        />
      )}
      {yoast?.og_image?.length > 0 && yoast.og_image.map(image => (
        [
          <meta
            content={image.height}
            property="og:image:height"
          />,
          <meta
            content={image.url}
            property="og:image"
          />,
          <meta
            content={image.type}
            property="og:image:type"
          />,
          <meta
            content={image.width}
            property="og:image:width"
          />,
        ]
      ))}
    </Helmet>
  );
};

SEO.propTypes = {
  metadata: PropTypes.shape({
    siteName: PropTypes.string,
    yoast: PropTypes.shape({
      og_description: PropTypes.string,
      og_image: PropTypes.arrayOf(PropTypes.shape({})),
      og_locale: PropTypes.string,
      og_site_name: PropTypes.string,
      og_type: PropTypes.string,
      title: PropTypes.string,
      twitter_card: PropTypes.string,
      twitter_description: PropTypes.string,
      twitter_image: PropTypes.string,
      twitter_title: PropTypes.string,
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
};
