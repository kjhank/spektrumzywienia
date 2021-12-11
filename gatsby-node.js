/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require('dotenv').config({
  BACKEND_URL: `.env.${process.env.BACKEND_URL}`,
});

const fetch = require('node-fetch');
const path = require('path');

const endpoints = {
  globalOptions: 'acf/v3/options/globals',
  pages: 'wp/v2/pages',
  posts: 'wp/v2/posts',
};

const templates = {
  genericPage: path.resolve('./src/templates/genericPage.js'),
  homePage: path.resolve('./src/templates/homePage.js'),
};

exports.createPages = async ({
  actions: { createPage },
}) => {
  const getApiData = async sources => {
    const responses = Promise.all(Object.keys(sources).map(async source => {
      const url = `${process.env.BACKEND_URL}/${sources[source]}?per_page=100`;

      const response = await fetch(url);
      const data = await response.json();

      return data;
    }));

    return responses;
  };

  const [
    options,
    pages,
    posts,
  ] = await getApiData(endpoints);

  const globalData = await fetch(`${process.env.BACKEND_URL}`);
  const globalDataJson = await globalData.json();

  const { name: siteName } = globalDataJson;

  const getTemplate = ({
    slug, type,
  }) => {
    if (slug === 'strona-glowna') {
      return templates.homePage;
    }

    if (type === 'page') {
      return templates.genericPage;
    }

    return templates.genericPage;
  };

  const getPath = slug => {
    if (slug === 'strona-glowna') {
      return '/';
    }

    if (slug.includes('404')) {
      return '/404/';
    }

    return slug;
  };

  const getContext = page => {
    const {
      acf, slug, type, yoast_head_json,
    } = page;
    const title = acf.has_alt_heading ? acf.alt_title : page.title.rendered;

    const global = {
      cover: acf.cover,
      coverAuthor: acf.cover_author,
      coverHasAuthor: acf.cover_has_author,
      isCoverBlurred: acf.is_cover_blurred,
      isCoverDarkened: acf.is_cover_darkened,
      isHeaderWhite: acf.is_white,
      metadata: {
        description: acf.description,
        siteName,
        title,
        yoast: yoast_head_json,
      },
      subHeading: acf.subheading,
      title,
    };

    if (slug === 'strona-glowna') {
      return {
        ...global,
        sections: acf?.sections.map(section => (section.type === 'blog' ?
          ({
            ...section,
            blogPosts: posts.slice(0, section.posts.number_of_posts),
          }) :
          section)),
      };
    }

    if (slug === 'do-pobrania') {
      return {
        ...global,
        files: acf.downloads,
        hasFiles: true,
        sections: acf.sections,
      };
    }

    if (slug === 'cennik') {
      return {
        ...global,
        hasPrices: true,
        prices: acf.prices,
        sections: acf.sections,
      };
    }

    if (slug === 'blog') {
      return {
        ...global,
        blogPosts: posts,
        hasPosts: true,
      };
    }

    if (type === 'post') {
      return {
        ...global,
        sections: acf.sections,
        subHeading: 'Blog',
        title: page.title.rendered,
      };
    }

    return {
      sections: acf.sections,
      ...global,
    };
  };

  pages.forEach(page => {
    const {
      slug,
      title,
    } = page;

    const context = {
      options: {
        formFields: options.acf['contact-form'][0].post_content.split('[').map(item => item.split(']'))
          .flat()
          .filter(item => item.includes('* '))
          .map(item => item.split('* ')[1]),
        ...options?.acf,
      },
      siteName,
      title: title?.rendered,
      ...getContext(page),
    };

    const pageData = {
      component: getTemplate(page),
      context,
      path: getPath(slug),
    };

    createPage(pageData);
  });

  posts.forEach(post => {
    const { slug } = post;

    const context = {
      options: {
        formFields: options.acf['contact-form'][0].post_content.split('[').map(item => item.split(']'))
          .flat()
          .filter(item => item.includes('* '))
          .map(item => item.split('* ')[1]),
        ...options?.acf,
      },
      ...getContext(post),
    };

    const pageData = {
      component: templates.genericPage,
      context,
      path: getPath(slug),
    };

    createPage(pageData);
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
        os: require.resolve('os-browserify/browser'),
      },
    },
  });
};
