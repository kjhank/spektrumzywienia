import styled from 'styled-components';

import {
  Container as GenericContainer, WPImage,
} from '@components';

import { queries } from '@utils/rwd';

/* stylelint-disable no-descending-specificity */

export const Wrapper = styled.footer`
  margin-top: ${({ noMargin }) => (noMargin ? 0 : '5em')};
  padding-top: 2.5em;

  @media ${queries.xs} {
    margin-top: 0;
  }
`;

export const DataWrapper = styled.section`
  position: relative;
`;

export const MapFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 51%;
  width: calc(50vw - 1%);

  @media ${queries.xs} {
    position: static;
    width: 100%;
    height: 50vw;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  width: 49%;
  height: 100%;
  color: ${({ theme: { colors } }) => colors.main};
  font-family: ${({ theme: { fonts } }) => fonts.heading};

  @media ${queries.xs} {
    width: 100%;
    margin-bottom: 2em;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 8px;
  display: block;
  width: 100%;
  font-size: ${({
    isSmaller, theme,
  }) => (isSmaller ? theme.fonts.sizes.xsmall : theme.fonts.sizes.small)};
  transition: ${({ theme }) => theme.getTransitions([
    'font-size',
    'transform',
  ])};
  transform: ${({ isSmaller }) => (isSmaller ? 'translateY(-100%)' : 'none')};
  cursor: text;
`;

export const LabelText = styled.span`
  display: inline-block;
  padding: 2px;
  background-color: ${({ isSmaller }) => (isSmaller ? '#fff' : 'transparent')};
  transition: ${({ theme }) => theme.getTransitions(['background-color'])};
`;

export const Input = styled.input`
  width: 100%;
  height: ${({ as }) => (as === 'textarea' ? '200px' : 'auto')};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadii.default};
  padding: 8px;
  transition: ${({ theme }) => theme.getTransitions(['box-shadow'])};

  :focus {
    box-shadow: ${({ theme }) => theme.getShadow()};
  }
`;

export const SubmitButton = styled.button`
  ${({ theme }) => theme.getLinkStyles()};
  overflow: hidden;
  margin-left: auto;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  border-radius: ${({ theme: { borderRadii } }) => borderRadii.default};
  padding: 1em 2em;
  background-color: #fff;
  color: inherit;
  cursor: pointer;

  :disabled {
    background-color: ${({ theme: { colors } }) => colors.sub};
    color: ${({ theme: { colors } }) => colors.border};
    cursor: not-allowed
  }

  ::after {
    bottom: 0;
  }

  :disabled:hover {
    ::after {
      content: unset;
    }
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: ${({ isSmaller }) => (isSmaller ? '48%' : '100%')};

  :not(:last-of-type) {
    margin-bottom: 1em;
  }

  :focus-within {
    > label {
      font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
      transform: translateY(-100%);

      > span {
        background-color: #fff;
      }
    }
  }

  @media ${queries.xl} {
    width: 100%;
  }
`;

export const Container = styled(GenericContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 400px;

  @media ${queries.xs} {
    flex-direction: column-reverse;
  }
`;

export const Contact = styled.div`
  width: 50%;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  padding: 2em;

  @media ${queries.xxl} {
    width: 75%;
  }

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const Avatar = styled(WPImage)`
  display: block;
  aspect-ratio: 1/1;
  width: 33%;
  margin-bottom: 1em;

  > img {
    height: auto;
    box-shadow: ${({ theme }) => theme.getShadow()};
    border-radius: 50%;
  }

  @media ${queries.xs} {
    width: 50%;
  }
`;
