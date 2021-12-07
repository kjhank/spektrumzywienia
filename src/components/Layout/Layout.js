import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
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
import { renderMetaData } from './helpers';

const COOKIES_LS_KEY = 'cookies-agreed';

const Layout = ({
  children, location, pageContext, path,
}) => {
  const {
    metadata, options,
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
      {renderMetaData(({
        ...metadata,
        canonicalUrl: `https//spektrumzywienia.pl${location.pathname}`,
      }))}
      <GlobalStyle shouldScroll={!isCookiesModalOpen} />
      <FixedHeader
        data={contactLinks}
        logo={options?.logo}
        path={path}
      />
      {children}
      <GlobalFooter
        data={footerData}
        formFields={options?.formFields}
        // formId={options['contact-form'][0].ID}
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pageContext: PropTypes.shape({
    metadata: PropTypes.shape({}),
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
      'contact-form': PropTypes.arrayOf(PropTypes.shape({
        ID: PropTypes.number,
      })),
      formFields: PropTypes.arrayOf(PropTypes.string),
      logo: PropTypes.shape({}),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default Layout;
