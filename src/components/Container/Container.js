import styled from 'styled-components';

import { mediaQueries } from '@utils';

export const Container = styled.div`
  position: relative;
  display: ${({ isCentered }) => (isCentered ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  width: 70vw;
  max-width: 1536px;
  height: 100%;
  margin: 0 auto;

  @media ${mediaQueries.xl} {
    max-width: 80vw;
  }

  @media ${mediaQueries.xs} {
    max-width: 90vw;
  }
`;
