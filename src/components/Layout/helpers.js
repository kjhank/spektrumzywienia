import React from 'react';
import { Helmet } from 'react-helmet';

const htmlAttributes = {
  lang: 'pl-PL',
};

export const renderMetaData = metadata => {
  const { siteName } = metadata;
  const title = metadata.title ? `${metadata.title} - ${siteName}` : siteName;

  return (
    <Helmet htmlAttributes={htmlAttributes}>
      <title>{title}</title>
      <link
        href={metadata.canonicalUrl}
        rel="canonical"
      />
      {metadata.description && (
      <>
        <meta
          content={metadata.description}
          name="description"
        />
        <meta
          content={metadata.description}
          name="og:description"
        />
      </>
      )}
      <meta
        content={title}
        name="og:title"
      />
      <meta
        content="pl_PL"
        name="og:locale"
      />
      <meta
        content={metadata.canonicalUrl}
        name="og:url"
      />
    </Helmet>
  );
};
