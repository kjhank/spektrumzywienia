import styled from 'styled-components';
import { queries } from '@utils/rwd';

export const FilesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  gap: 3em;
  margin-bottom: 5em;

  @media ${queries.xs} {
    width: 100%;
  }
`;

export const SingleFile = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  padding-bottom: 2em;
`;

export const FileName = styled.h3`
  color: ${({ theme: { colors } }) => colors.accent2};
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xxlarge};

  > svg {
    margin-left: 0.5em;
  }
`;

export const FileDescription = styled.p`
  margin: 0.5em 0;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};
  `;

export const FileLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 0.5em;
  color: ${({ theme: { colors } }) => colors.accent2};
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};
  transition: ${({ theme }) => theme.getTransitions(['color'])};

  > span {
    ${({ theme }) => theme.getLinkStyles()};
  }

  > svg {
    margin-right: 0.5em;
  }

  :hover {
    color: ${({ theme: { colors } }) => colors.accent1};
  }
`;
