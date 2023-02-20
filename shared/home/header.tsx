import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@styled';

import Button from '@components/button';
import { Annotation, AnnoGroup } from '@components/annotation';
import Ellipse from '@components/annotations/ellipse';
import Badge from '@components/badge';
import ThemeButton from '@components/themeButton';

const HeaderContainer = styled('header', {
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  zIndex: 10,
});

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  width: 'fit-content',
  height: 'fit-content',
});

const ULContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6rem',

  '@desktop': {
    gap: '4rem',
  },
});

const LI = styled('span', {
  display: 'flex',
  alignItems: 'center',

  fontSize: '1.4rem',
  color: '$grey-600',

  '& a': {
    color: '$grey-600',
    transition: '$fast',

    '&:hover': {
      cursor: 'pointer',
      color: '$grey-800',
    },
  },
});

const RightBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
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

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Annotation
          css={{
            annoPos: '150% unset unset -40%',
          }}
        >
          <Image
            className="logo"
            alt="Notify"
            src="/assets/icon-192x192.png"
            width={40}
            height={40}
          />

        </Annotation>
        
      </LogoContainer>
      <ULContainer>
        <LI
          css={{
            '@tablet': {
              display: 'none',
            },
          }}
        >
        </LI>
        <Annotation
          css={{
            annoPos: '120% 0% 0% -15%',
            '@tablet': {
              annoPos: '120% 0% 0% -25%',
            },
          }}
        >
          <Link href="/notes/home" passHref>
            <a>
              <Button color="dark" size="medium">
                <h1>Get Right In</h1>
              </Button>
            </a>
          </Link>

        </Annotation>

      </ULContainer>

      <RightBox>
        <ThemeButton />

       
      </RightBox>
    </HeaderContainer>
  );
};

export default Header;
