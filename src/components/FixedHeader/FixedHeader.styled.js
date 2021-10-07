import styled from 'styled-components';
import { Link as GenericLink } from 'gatsby';
import { rgba } from 'polished';

import { WPImage } from '@components';

import { queries } from '@utils/rwd';

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

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media ${queries.m} {
    height: 6rem;
    padding: 2em 0;
    background-color: #fff;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 5vw);
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};

  @media ${queries.huge} {
    font-size: ${({ theme: { fonts: { sizes } } }) => sizes.medium};
  }

  @media ${queries.l} {
    font-size: ${({ theme: { fonts: { sizes } } }) => sizes.small};
  }

  @media ${queries.m} {
    position: fixed;
    top: 6rem;
    right: 0;
    overflow: scroll;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    max-height: 80vh;
    box-shadow: ${({ theme }) => theme.getShadow()};
    padding: 2rem;
    background-color: #fff;
    transition: ${({ theme }) => theme.getTransitions(['transform'])};
    transform: ${({ isOpen }) => (isOpen ? 'none' : 'translateX(100%)')};
  }
`;

export const HomeLink = styled(GenericLink)`
  height: 5vw;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};

  > picture {
    height: 5vw;
  }

  :hover {
    transform: scale(1.1);
  }

  @media ${queries.m} {
    position: fixed;
    top: 1rem;
    left: 2rem;
    width: 4rem;
    height: 4rem;

    > picture {
      height: inherit;
    }
  }
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2em;
  margin-left: 1em;

  @media ${queries.m} {
    flex-direction: column;
    align-items: flex-end;
    padding-right: calc(0.5em + 16px);
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }
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

export const MenuToggle = styled.button.attrs({ type: 'button' })`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2;
  display: none;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background-color: transparent;
  transition: ${({ theme }) => theme.getTransitions(['transform'])};
  transform: ${({ isToggled }) => (isToggled ? 'rotateY(180deg)' : 'none')};
  transform-style: preserve-3d;

  @media ${queries.m} {
    display: block;
  }

  > svg.toggle-icon { /* stylelint-disable-line no-descending-specificity */
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
  }
  > svg.toggle-icon:last-child {
    transform: rotateY(180deg);
  }
`;
