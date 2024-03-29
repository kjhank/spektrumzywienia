import styled from 'styled-components';

import {
  Container, WPImage,
} from '@components';
import { queries } from '@utils/rwd';

export const Main = styled.main`
  > section + section {
    margin-top: 5em;
    padding: 2.5em 0;

    @media ${queries.xs} {
      margin-top: 2.5em
    }
  }
`;

export const Header = styled.header`
  position: relative;
  height: 37.96875vw;
  margin-top: 10vw;
  color: ${({
    isWhite, theme,
  }) => (isWhite ? theme.colors.sub : theme.colors.main)};
  font-family: ${({ theme: { fonts } }) => fonts.heading};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 0 5%;

    > h1, > h2 {
      width: 100%;
    }

    @media ${queries.xs} {
      > h1 {
        font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xxlarge};
      }

      > h2 {
        font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};
      }
    }
  }

  @media ${queries.huge} {
    margin-top: 11vw;
  }

  @media ${queries.xxl} {
    margin-top: 13vw;
  }

  @media ${queries.xl} {
    margin-top: 14vw;
  }

  @media ${queries.l} {
    margin-top: 16vw;
  }

  @media ${queries.m} {
    margin-top: 6rem;
  }
`;

export const Cover = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: ${({
    $isBlurred, $isDarkened,
  }) => {
    if ($isBlurred && $isDarkened) {
      return 'blur(10px), brightness(0.75)';
    }

    if ($isBlurred) {
      return 'blur(10px)';
    }

    if ($isDarkened) {
      return 'brightness(0.75)';
    }

    return 'none';
  }};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CoverAuthor = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0.5em 0.5em 0 0;
  padding: 0.5em 1em;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  color: inherit;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xsmall};
`;

export const ArticleBody = styled.article`
  margin-top: 5em;

  > section + section {
    margin-top: 3em;
  }
`;

export const TextImage = styled.section``;

export const TextImageContainer = styled(Container)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  gap: 5em;

  @media ${queries.s} {
    flex-direction: column-reverse;
  }
`;

export const TextWrapper = styled.div`
  width: ${({
    $isWider, $isNarrower,
  }) => {
    if ($isNarrower) {
      return '30%';
    }

    if ($isWider) {
      return '70%';
    }

    return '50%';
  }};

  @media ${queries.s} {
    width: 100%
  }
`;

export const ImageSection = styled.section``;

export const Image = styled(WPImage)`
  overflow: hidden;
  backface-visibility: hidden;
  width: ${({
    $isWIder, $isNarrower,
  }) => {
    if ($isNarrower) {
      return '30%';
    }

    if ($isWIder) {
      return '70%';
    }

    return '50%';
  }};
  box-shadow: ${({ theme }) => theme.getShadow()};
  border-radius: ${({
    $isRound, theme,
  }) => ($isRound ? '50%' : theme.borderRadii.double)};
  transition: ${({ theme }) => theme.getTransitions(['transform'])};

  > img {
    width: 100%;
  }

  :hover {
    transform: scale(1.01);
  }

  @media ${queries.s} {
    width: 100%
  }
`;

export const GenericTextSection = styled.section`
  ${({
    noGradient, theme,
  }) => !noGradient && theme.getSectionGradient()};
`;
