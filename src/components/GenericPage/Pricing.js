import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEuroSign, faStopwatch,
} from '@fortawesome/pro-light-svg-icons';

import { Container } from '@components';

import {
  FooterItem, PricingList, ServiceDescription, ServiceFooter, ServiceName, SingleService,
} from './Pricing.styled';

export const Pricing = ({ prices }) => (
  <Container>
    <PricingList>
      {prices.map(price => (
        <SingleService key={price.name}>
          <ServiceName>{price.name}</ServiceName>
          <ServiceDescription>{price.description}</ServiceDescription>
          <ServiceFooter>
            {price.duration && (
              <FooterItem>
                <FontAwesomeIcon icon={faStopwatch} />
                {price.duration}
              </FooterItem>
            )}
            {price.price && (
              <FooterItem>
                <FontAwesomeIcon icon={faEuroSign} />
                {price.price}
              </FooterItem>
            )}
          </ServiceFooter>
        </SingleService>
      ))}
    </PricingList>
  </Container>
);

Pricing.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
