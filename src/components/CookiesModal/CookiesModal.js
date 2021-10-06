import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  ButtonLink, Typography,
} from '@components';

import {
  Backdrop,
  Body,
  Wrapper,
} from './CookiesModal.styled';

export const CookiesModal = ({
  content, isOpen, localStorageKey, setOpen,
}) => {
  const handleClick = () => {
    setOpen(false);
    localStorage.setItem(localStorageKey, true);
  };

  return isOpen ?
    createPortal(
      <Backdrop>
        <Wrapper>
          <Body>
            <Typography
              as="h2"
              size="xxlarge"
            >
              {content.heading}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: sanitize(content.content) }}
            />
          </Body>
          <ButtonLink
            customAs="button"
            onClick={handleClick}
          >
            {content.button_text}
          </ButtonLink>
        </Wrapper>
      </Backdrop>,
      document.body
    ) :
    null;
};

CookiesModal.propTypes = {
  content: PropTypes.shape({
    button_text: PropTypes.string,
    content: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  localStorageKey: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
};
