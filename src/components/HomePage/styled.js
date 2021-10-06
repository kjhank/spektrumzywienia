import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';

import {
  Container, WPImage,
} from '@components';

/* stylelint-disable no-descending-specificity */

export const Hero = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xxlarge};
  font-family: ${({ theme: { fonts } }) => fonts.heading};
`;

export const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme: { fonts: { weights } } }) => weights.thin};
  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;
    height: 100%;

    :first-child:not(:only-child) {
      height: 70%;
    }

    :last-child:not(:only-child) {
      height: 30%;
      padding-bottom: 20%;
    }
  }

  h1 {
    font-size: ${({ theme: { fonts: { sizes } } }) => sizes.hero};
    font-family: ${({ theme: { fonts } }) => fonts.heading};
  }

  h2 {
    font-size: ${({ theme: { fonts: { sizes } } }) => sizes.huge};
    font-family: ${({ theme: { fonts } }) => fonts.heading};
  }
`;

export const HeroImage = styled(WPImage)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -2;
  filter: ${({ $isBlurred }) => $isBlurred && 'blur(10px)'};
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextImage = styled.section`
  ${({
    noGradient, theme,
  }) => !noGradient && theme.getSectionGradient()};
`;

export const TextImageContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5em;
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
  font-weight: 200;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};

  h2 {
    font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xxlarge};
  }

  h3 {
    font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xlarge};
  }

  h2,
  h3 {
    margin-bottom: 0.5em;
    font-family: ${({ theme: { fonts } }) => fonts.heading};
    line-height: 1.5;
  }

  > p {
    line-height: 1.3;
  }
`;

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
`;

export const SectionLink = styled(Link)`
  ${({ theme }) => theme.getLinkStyles()};
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme: { fonts: { weights } } }) => weights.normal};
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xlarge};

  > svg {
    margin: 0 0.5em;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
  }

  :hover {
    > svg {
      transform: translateX(0.5em);
    }
  }
`;

export const TextSection = styled.section`
  ${({ theme }) => theme.getSectionGradient()};
`;

export const BlogPostsSection = styled.section``;

export const PostsContainer = styled(Container)``;

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
  gap: 2em;
`;

export const SinglePost = styled.li`
  overflow: hidden;
  aspect-ratio: 1/1;
  box-shadow: ${({ theme }) => theme.getShadow()};
  border-radius: ${({ theme }) => theme.borderRadii.double};
`;

export const BlogPostImage = styled(WPImage)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'filter',
  ])};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BlogPostTitle = styled.h3`
  width: 100%;
  padding: 1em 1em;
  background-color: ${rgba('#fff', 0.75)};

  @supports (backdrop-filter: blur(5px)) {
    background-color: ${rgba('#fff', 0.5)};
    backdrop-filter: blur(10px);
  }
`;

export const PostLink = styled(Link)`
  ${({ theme }) => theme.getLinkStyles()};
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  font-size: ${({
    hasSmallerFont, theme: { fonts: { sizes } },
  }) => (hasSmallerFont ? sizes.xxlarge : sizes.large)};
  text-align: center;

  :hover {
    ::after {
      bottom: 0;
    }

    ${BlogPostImage} {
      filter: contrast(125%);
      transform: scale(1.05);
    }
  }
`;
