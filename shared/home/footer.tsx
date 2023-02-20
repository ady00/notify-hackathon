import React from 'react';
import Image from 'next/image';

import { styled } from '@styled';
import Link from 'next/link';

const FooterContainer = styled('footer', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',

  flexWrap: 'wrap',

  padding: '8rem 6rem',
  paddingBottom: '2rem',
  marginTop: '35rem',

  '@laptop': {
    padding: '6rem 4rem',
  },

  '@tablet': {
    gap: '3rem',
    padding: '2rem',
    justifyContent: 'flex-start',
  },
});

const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',

  width: 'fit-content',
  height: 'fit-content',
});

const ListContainer = styled('div', {
  width: 'auto',
  height: 'auto',

  display: 'flex',
  gap: '10rem',

  '@laptop': {
    gap: '5rem',
    width: 'auto',
    margin: 'auto',
  },

  '@tablet': {
    margin: '4rem 0',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  '@mobile-small': {
    flexDirection: 'column',
  },
});

const ULContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '2rem',

  '@tablet': {
    gap: '2rem',
  },
});

const LI = styled('span', {
  fontSize: '1.4rem',
  color: '$grey-600',

  transition: '$fast',

  '&:hover': {
    cursor: 'pointer',
    color: '$grey-800',
  },
});

const LIHead = styled('span', {
  fontSize: '1.4rem',
  color: '$grey-700',
  fontWeight: 'bold',

  marginBottom: '3rem',

  '@tablet': {
    marginBottom: '2rem',
  },
});

const Text = styled('span', {
  fontSize: '1.4rem',
  color: '$grey-600',

  '& a': {
    fontWeight: '500',
    color: '$grey-700',

    margin: '0 0.5rem',
  },
});

const RightBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
});

const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      
    </FooterContainer>
  );
};

export default Footer;
