import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import {
  Container as GenericContainer, Typography,
} from '@components';
import {
  About, Avatar, Container, DataWrapper, MapFrame, Wrapper,
} from './GlobalFooter.styled';

import { ContactForm } from './ContactForm';

export const GlobalFooter = ({
  data, formFields, formId, noHeading, noMargin,
}) => (
  <Wrapper noMargin={noMargin}>
    {!noHeading && (
    <GenericContainer>
      <Typography
        align="center"
        as="h2"
        hasBottomMargin
        size="huge"
        variant="heading"
      >
        Kontakt
      </Typography>
    </GenericContainer>
    )}
    <DataWrapper>
      <Container>
        <MapFrame
          height="100%"
          loading="lazy"
          src={data?.mapUrl}
          width="100%"
        />
        <ContactForm
          fields={formFields}
          formId={formId}
        />
      </Container>
      <GenericContainer>
        <About>
          <Typography
            align="center"
            as="h3"
            dangerouslySetInnerHTML={{ __html: sanitize(data?.about?.heading) }}
            hasBottomMargin
            size="xxlarge"
            variant="heading"
          />
          <Avatar image={data?.about?.image} />
          <Typography
            align="center"
            dangerouslySetInnerHTML={{ __html: sanitize(data?.about?.description) }}
            size="large"
            variant="heading"
          />
        </About>
      </GenericContainer>
    </DataWrapper>
  </Wrapper>
);

GlobalFooter.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.shape({
      description: PropTypes.string,
      heading: PropTypes.string,
      image: PropTypes.shape({}),
    }),
    hours: PropTypes.string,
    mapUrl: PropTypes.string,
  }).isRequired,
  formFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  formId: PropTypes.number.isRequired,
  noHeading: PropTypes.bool,
  noMargin: PropTypes.bool,
};

GlobalFooter.defaultProps = {
  noHeading: false,
  noMargin: false,
};
