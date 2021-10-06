import styled from 'styled-components';

export const PricingList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  gap: 3em;
  margin-bottom: 5em;
`;

export const SingleService = styled.li`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  padding-bottom: 2em;
`;

export const ServiceName = styled.h3`
  color: ${({ theme: { colors } }) => colors.accent2};
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.xxlarge};
`;

export const ServiceDescription = styled.p`
  margin: 0.5em 0;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};
`;

export const ServiceFooter = styled.footer`
  display: flex;
  gap: 1em;
  font-size: ${({ theme: { fonts: { sizes } } }) => sizes.large};
`;

export const FooterItem = styled.span`
  display: inline-flex;
  align-items: center;

  > svg {
    margin-right: 0.5em;
  }
`;
