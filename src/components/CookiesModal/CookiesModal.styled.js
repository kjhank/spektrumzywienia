import styled from 'styled-components';
import { rgba } from 'polished';

import { mediaQueries } from '@utils/rwd';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 666;
  display: grid;
  place-items: center;
  min-height: 100vh;
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => rgba(theme.colors.shadow, 0.5)};
`;

export const Wrapper = styled.aside`
  position: relative;
  z-index: 667;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(50%, 75%, 90%);
  max-height: 90vh;
  border-radius: ${({ theme }) => theme.borderRadii.double};
  padding: 5%;
  background-color: #fff;

  > button {
    line-height: 1.2;
    @media ${mediaQueries.xs} {
      font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
    }
    @media ${mediaQueries.tiny} {
      font-size: ${({ theme }) => theme.fonts.sizes.tiny};
    }
  }
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;

  > h2 {
    margin-bottom: 1em;

    @media ${mediaQueries.xs} {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
    }
  }

  > div {
    @media ${mediaQueries.xs} {
      font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
    }

    @media ${mediaQueries.tiny} {
      font-size: ${({ theme }) => theme.fonts.sizes.xxsmall};
    }
  }
`;
