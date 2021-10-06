import styled from 'styled-components';
import { ExternalLink } from '@components';

export const Wrapper = styled.div`
  margin-left: auto;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
  align-items: flex-end;
`;

export const LinkText = styled.span``;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  /* & + & {
    margin-top: 0.5em;
  } */
`;

export const Link = styled(ExternalLink)`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  ${({ theme }) => theme.getLinkStyles()};

  > svg.contact-bar__icon {
    aspect-ratio: 1/1;
    width: auto;
    height: ${({ theme }) => theme.fonts.sizes.medium};
    margin-left: 0.5em;
  }
`;
