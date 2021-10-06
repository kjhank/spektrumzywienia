import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
  margin-bottom: ${({ hasBottomMargin }) => hasBottomMargin && '1em'};
  color:
    ${({
    color, theme,
  }) => theme.colors[color] || theme.colors.text};
  font-weight:
    ${({
    theme, variant, weight,
  }) => (variant === 'text' && !weight ? 300 : theme.fonts.weights[weight])};
  font-size:
    ${({
    size, theme,
  }) => theme.fonts.sizes[size]};
  font-family: ${({
    theme, variant,
  }) => (variant?.includes('heading') ? theme.fonts.heading : 'inherit')};
  text-align: ${({ align }) => align};
  text-transform: ${({ variant }) => (variant?.includes('uppercase') ? 'uppercase' : 'none')};

  b,
  strong {
    font-weight: 600;
  }
  ${({
    hasHighlights, highlightColor, theme,
  }) => hasHighlights && css`
    b,
    strong {
      display: block;
      margin: 1em 0;
      background-color: ${highlightColor};
      color: #fff;
      border-radius: ${theme.borderRadii.full};
      padding: 1vw 15%;
      font-weight: bold;
    }
  `};

  p {
    line-height: 1.3;
    text-indent: 1em;

    + p {
      margin-top: 1em;
    }
  }

  a {
    ${({ theme }) => theme.getLinkStyles()};
    color: ${({ theme: { colors } }) => colors.accent2};
    transition: ${({ theme }) => theme.getTransitions(['color'])};

    :hover {
      color: ${({ theme: { colors } }) => colors.accent1};
    }
  }

  h2,
  h3 {
    margin-bottom: 1em;
    font-weight: ${({ theme: { fonts: { weights } } }) => weights.semibold};
    font-family: ${({ theme: { fonts } }) => fonts.heading};
    text-align: left;
  }

  h2 {
    font-size: 150%;
  }

  h3 {
    font-size: 125%;
  }

  ul,
  ol {
    margin: 1em 0;

  }

  ul {
    padding-left: 2em;
    list-style-type: none;

    > li {
      display: flex;
      align-items: baseline;

      ::before {
        content: '•';
        margin-right: 0.25em;
      }
    }
  }
`;

export const Typography = ({
  align,
  as,
  children,
  color,
  dangerouslySetInnerHTML,
  hasBottomMargin,
  hasHighlights,
  highlightColor,
  size,
  variant,
  weight,
  ...props
}) => (
  <Text
    align={align}
    as={as}
    color={color}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    hasBottomMargin={hasBottomMargin}
    hasHighlights={hasHighlights}
    highlightColor={highlightColor}
    size={size}
    variant={variant}
    weight={weight}
    {...props}
  >
    {children}
  </Text>
);

Typography.propTypes = {
  align: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.shape({}),
  hasBottomMargin: PropTypes.bool,
  hasHighlights: PropTypes.bool,
  highlightColor: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  weight: PropTypes.string,
};

Typography.defaultProps = {
  align: null,
  as: null,
  children: null,
  color: null,
  dangerouslySetInnerHTML: null,
  hasBottomMargin: null,
  hasHighlights: false,
  highlightColor: null,
  size: null,
  variant: null,
  weight: null,
};
