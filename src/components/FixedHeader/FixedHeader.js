import React, {
  createRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes,
} from '@fortawesome/pro-light-svg-icons';

import { Container } from '@components';
import {
  Header, HomeLink, Link, LinksList, Logo, MenuToggle, Navigation, SingleItem,
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
        <HomeLink
          title="przejdź do strony głównej"
          to="/"
        >
          <Logo image={logo} />
        </HomeLink>
        <Navigation isOpen={isNavOpen}>
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
        <MenuToggle
          isToggled={isNavOpen}
          onClick={() => setNavOpen(previous => !previous)}
        >
          <FontAwesomeIcon
            className="toggle-icon"
            icon={faBars}
          />
          <FontAwesomeIcon
            className="toggle-icon"
            icon={faTimes}
          />
        </MenuToggle>
      </Container>
    </Header>
  );
};

FixedHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  logo: PropTypes.shape({}).isRequired,
  path: PropTypes.string.isRequired,
};
