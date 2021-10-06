import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import { Typography } from '@components';

import {
  Image, TextImage, TextImageContainer, TextWrapper,
} from './GenericPage.styled';

export const TextImageSection = ({
  content, key,
}) => (
  <TextImage key={key}>
    <TextImageContainer direction={content.variant === 'textRight' ? 'row-reverse' : 'row'}>
      <TextWrapper
        $isNarrower={content.type === 'largerImage'}
        $isWider={content.type === 'largerText'}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: sanitize(content.text) }}
          size="large"
          weight="light"
        />
      </TextWrapper>
      <Image
        $isNarrower={content.type === 'largerText'}
        $isRound={content.is_round}
        $isWider={content.type === 'largerImage'}
        image={content.image}
      />
    </TextImageContainer>
  </TextImage>
);

TextImageSection.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.shape({}).isRequired,
    is_round: PropTypes.bool.isRequired,
    text: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string,
  }).isRequired,
  key: PropTypes.string.isRequired,
};

