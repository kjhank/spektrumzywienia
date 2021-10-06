import React from 'react';
import PropTypes from 'prop-types';
import {
  css, ThemeProvider,
} from 'styled-components';
import { rgba } from 'polished';

const theme = {
  borderRadii: {
    default: '4px',
    double: '8px',
  },
  colors: {
    accent1: '#ffcc00',
    accent2: '#7cb61a',
    accent3: '#e42224',
    border: '#bbb',
    main: '#424b54',
    shadow: rgba('#424b54', 0.25),
    sub: '#e0e0e2',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    sizes: {
      /* eslint-disable sort-keys */
      xxsmall: '10px',
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
      xxlarge: '32px',
      huge: '48px',
      hero: '64px',
    },
    text: 'Source Sans Pro, serif',
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
      /* eslint-enable sort-keys */
    },
  },
  getLinkStyles: () => css`
    position: relative;

    ::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -2px;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(to right, ${theme.colors.accent1} 0 33%, ${theme.colors.accent2} 0 67%, ${theme.colors.accent3} 0 100%);
      background-position: center;
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: ${theme.getTransitions(['background-size'])};
    }

  :hover {
    ::after {
      background-size: 100% 100%;
    }
  }
  `,
  getSectionGradient: () => css`
    background-image: linear-gradient(to bottom,
    #fff,
    ${rgba(theme.colors.accent1, 0.1)},
    ${rgba(theme.colors.accent2, 0.1)},
    ${rgba(theme.colors.accent3, 0.1)},
    #fff);
  `,
  getShadow: () => {
    const color = rgba(theme.colors.shadow, 0.125);

    return `0 0.2em 0.2em ${color},
    0 0.4em 0.4em ${color},
    0 0.6em 0.6em ${color},
    0 0.8em 0.8em ${color},
    0 1em 1em ${color}
    `;
  },
  getTransitions: properties => properties.map(property => `${property} ${theme.transitions.duration}`).join(', '),
  transitions: {
    duration: '0.4s',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
