import styled from 'styled-components';

import { queries } from '@utils';

export const Container = styled.div`
  position: relative;
  display: ${({ isCentered }) => (isCentered ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  width: 70vw;
  max-width: 1536px;
  height: 100%;
  margin: 0 auto;

  @media ${queries.xl} {
    width: 100%;
    max-width: 80vw;
  }

  @media ${queries.xs} {
    max-width: 90vw;
  }
`;
