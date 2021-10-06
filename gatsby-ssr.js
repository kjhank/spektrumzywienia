/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./src/components/Layout/Layout').default;

exports.wrapPageElement = ({
  element, props,
}) => <Layout {...props}>{element}</Layout>;

exports.wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.shape({}).isRequired,
};
