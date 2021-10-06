import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';
import { rgba } from 'polished';

import { WPImage } from '@components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.getShadow()};
  padding: ${({ isScrolled }) => (isScrolled ? '0.5em 0' : '2em 0;')};
  background-color: ${({ isScrolled }) => (isScrolled ? rgba('#fff', 0.9) : rgba('#fff', 0.5))};
  color: #000;
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: ${({ theme }) => theme.getTransitions([
    'background-color',
    'backdrop-filter',
    'padding',
  ])};

  @supports (backdrop-filter: blur(10px)) {
    background-color: ${rgba('#fff', 0.25)};
    backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'blur(5px)')};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};
`;

export const HomeLink = styled(GenericLink)`
  height: 5vw;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};

  :hover {
    transform: scale(1.1);
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2em;
  margin-left: 1em;
`;

export const SingleItem = styled.li``;

export const Link = styled(GenericLink)`
  ${({ theme }) => theme.getLinkStyles()};
`;

export const Logo = styled(WPImage)`
  display: block;
  width: auto;
  height: 100%;

  > img {
    height: 100%;
  }
`;
