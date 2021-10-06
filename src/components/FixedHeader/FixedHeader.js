import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components';
import {
  Header, HomeLink, Link, LinksList, Logo, Navigation, SingleItem,
} from './FixedHeader.styled';
import { ContactBar } from './ContactBar';
import { menu } from './static';

export const FixedHeader = ({
  data, logo, path,
}) => {
  const [
    isPageScrolled,
    setPageScrolled,
  ] = useState(false);

  const [
    isNavOpen,
    setNavOpen,
  ] = useState(false);

  const headerRef = createRef();

  useEffect(() => {
    let headerHeight;

    const scrollHandler = () => {
      const { scrollY } = window;

      setPageScrolled(scrollY > headerHeight);
    };

    if (headerRef?.current) {
      headerHeight = headerRef?.current?.getBoundingClientRect().height;

      document.addEventListener('scroll', scrollHandler);
    }

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [path]);

  return (
    <Header
      isScrolled={isPageScrolled}
      ref={headerRef}
    >
      <Container>
        <Navigation isOpen={isNavOpen}>
          <HomeLink
            title="przejdź do strony głównej"
            to="/"
          >
            <Logo image={logo} />
          </HomeLink>
          <LinksList>
            {menu.map(link => (
              <SingleItem key={link.to}>
                <Link to={link.to}>
                  {link.text}
                </Link>
              </SingleItem>
            ))}
          </LinksList>
          <ContactBar data={data} />
        </Navigation>
      </Container>
    </Header>
  );
};

FixedHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  logo: PropTypes.shape({}).isRequired,
  path: PropTypes.string.isRequired,
};
