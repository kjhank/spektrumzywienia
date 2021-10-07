import React from 'react';
import sanitize from 'sanitize-html';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { queries } from '@utils/rwd';
import {
  Hero,
  HeroContainer,
  HeroImage,
  Image,
  SectionLink,
  TextImage,
  TextImageContainer,
  TextSection,
  TextWrapper,
} from '@components/HomePage/styled';
import {
  Container, Typography,
} from '@components';
import { BlogPosts } from '@components/HomePage/BlogPosts';
import { TextImageSection } from '@components/GenericPage';
import {
  Image as GenericImage, GenericTextSection,
} from '@genericPage/GenericPage.styled';
import { ImageSection } from '../components/GenericPage/GenericPage.styled';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const isMobile = () => isBrowser && window.matchMedia(queries.xs).matches;

export const renderHomePage = sections => sections.map(section => {
  const {
    has_url: hasUrl, type, url,
  } = section;

  const key = JSON.stringify(section).slice(0, 123);

  switch (type) {
    case 'hero': {
      const {
        hero: {
          image, is_image_blurred: isImageBlurred, text,
        },
      } = section;

      return (
        <Hero key={key}>
          <HeroContainer>
            <div dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
            {hasUrl && (
              <div>
                <SectionLink to={url.link}>
                  {url.label}
                  <FontAwesomeIcon icon={faArrowRight} />
                </SectionLink>
              </div>
            )}
          </HeroContainer>
          <HeroImage
            $isBlurred={isImageBlurred}
            image={image}
          />
        </Hero>
      );
    }

    case 'textImage': {
      const {
        textImage: {
          text, image, is_round: isRound, variant,
        },
      } = section;

      return (
        <TextImage key={key}>
          <TextImageContainer>
            <TextWrapper
              $isNarrower={variant === 'largerImage'}
              $isWider={variant === 'largerText'}
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
            />
            <Image
              $isNarrower={variant === 'largerText'}
              $isRound={isRound}
              $isWider={variant === 'largerImage'}
              image={image}
            />
          </TextImageContainer>
          {hasUrl && (
            <Container isCentered>
              <SectionLink to={url.link}>
                {url.label}
                <FontAwesomeIcon icon={faArrowRight} />
              </SectionLink>
            </Container>
          )}
        </TextImage>
      );
    }
    case 'text': {
      const { text } = section;

      return (
        <TextSection key={key}>
          <Container>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
              size="huge"
              weight="light"
            />
          </Container>
        </TextSection>
      );
    }
    case 'blog': {
      const {
        blogPosts, posts: { title },
      } = section;

      return (
        <BlogPosts
          posts={blogPosts}
          title={title}
        />
      );
    }
    default:
      return null;
  }
});

export const renderGenericPage = sections => sections.map(section => {
  const { type } = section;
  const key = JSON.stringify(section).slice(0, 123);

  switch (type) {
    case 'textImage': {
      const {
        no_gradient: noGradient, text_image: textImage,
      } = section;

      return (
        <TextImageSection
          content={textImage}
          key={key}
          noGradient={noGradient}
        />
      );
    }

    case 'lead':
    case 'text': {
      const {
        no_gradient: noGradient, text,
      } = section;

      return (
        <GenericTextSection
          key={key}
          noGradient={noGradient}
        >
          <Container>
            <Typography
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
              size={type === 'lead' ? 'xxlarge' : 'xlarge'}
              variant={type}
              weight={type === 'lead' ? 'normal' : 'light'}
            />
          </Container>
        </GenericTextSection>
      );
    }

    case 'image': {
      const {
        no_gradient: noGradient, image,
      } = section;

      return (
        <ImageSection
          key={key}
          noGradient={noGradient}
        >
          <Container>
            <GenericImage
              image={image}
              isFullWidth
            />
          </Container>
        </ImageSection>
      );
    }

    case 'footnotes': {
      const {
        no_gradient: noGradient, text,
      } = section;

      return (
        <GenericTextSection
          key={key}
          noGradient={noGradient}
        >
          <Container>
            <Typography
              as="footer"
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
              size="small"
              weight="light"
            />
          </Container>
        </GenericTextSection>
      );
    }

    default:
      return null;
  }
});
