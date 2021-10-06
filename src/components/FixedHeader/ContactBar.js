import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Link, LinksList, LinkText, ListItem, Wrapper,
} from './ContactBar.styled';

export const ContactBar = ({ data }) => (
  <Wrapper>
    <LinksList>
      {data.map(link => (
        <ListItem key={link.url}>
          <Link
            $noMargin={link.isSocial}
            url={link.url}
          >
            <LinkText>{link.text}</LinkText>
            <FontAwesomeIcon
              className="contact-bar__icon"
              icon={link.icon}
            />
          </Link>
        </ListItem>
      ))}
    </LinksList>
  </Wrapper>
);

ContactBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

