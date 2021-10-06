import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';
import {
  faEnvelopeOpen, faLocation, faPhone,
} from '@fortawesome/pro-light-svg-icons';
import {
  faFacebookF, faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { Theme } from '@theme/main';
import { GlobalStyle } from '@utils';
import {
  FixedHeader, GlobalFooter,
} from '@components';

import '../../../static/fonts/stylesheet.css';

const COOKIES_LS_KEY = 'cookies-agreed';

const Layout = ({
  children, pageContext, path,
}) => {
  const htmlAttributes = {
    lang: 'pl',
  };

  const {
    options,
  } = pageContext;

  const contactLinks = [
    {
      icon: faEnvelopeOpen,
      text: options?.contact_data?.email,
      url: `mailto:${options?.contact_data?.email}`,
    },
    {
      icon: faPhone,
      text: options?.contact_data?.phone,
      url: `tel:${options?.contact_data?.phone}`,
    },
    {
      icon: faLocation,
      text: options?.contact_data?.address,
      url: options?.contact_data?.location,
    },
    {
      icon: faInstagram,
      isSocial: true,
      text: options?.contact_data?.instagram.split('.com/')[1],
      url: options?.contact_data?.instagram,
    },
    {
      icon: faFacebookF,
      isSocial: true,
      text: options?.contact_data?.facebook.split('.com/')[1],
      url: options?.contact_data?.facebook,
    },
  ];

  const footerData = {
    about: options?.about,
    address: options?.contact_data?.address,
    hours: options?.contact_data?.working_hours,
    logo: options?.contact_data?.logo,
    mapUrl: options?.contact_data?.location,
  };

  const [
    isCookiesModalOpen,
    setCookiesModalOpen,
  ] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    const hasUserAgreed = localStorage.getItem(COOKIES_LS_KEY);

    setCookiesModalOpen(!hasUserAgreed);
  }, []);

  return (
    <Theme>
      <Helmet htmlAttributes={htmlAttributes} />
      <GlobalStyle shouldScroll={!isCookiesModalOpen} />
      <FixedHeader
        data={contactLinks}
        logo={options?.logo}
        path={path}
      />
      {children}
      <GlobalFooter
        data={footerData}
        noHeading={path === '/kontakt'}
        noMargin={path === '/kontakt'}
      />
    </Theme>

  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  pageContext: PropTypes.shape({
    options: PropTypes.shape({
      about: PropTypes.shape({}),
      contact_data: PropTypes.shape({
        address: PropTypes.string,
        email: PropTypes.string,
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        location: PropTypes.string,
        logo: PropTypes.shape({}),
        phone: PropTypes.string,
        working_hours: PropTypes.string,
      }),
      logo: PropTypes.shape({}),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
