import Image from 'next/image';
import Link from 'next/link';

import Page from '@layouts/page';

import { styled } from '@styled';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100%',
  minHeight: '100vh',
});

const Heading = styled('h2', {
  fontFamily: '$indie',
  fontSize: '6rem',
  color: '$grey-700',

  marginBottom: '3rem',
});

const Text = styled('span', {
  fontSize: '1.6rem',
  color: '$grey-600',

  '& a': {
    fontWeight: 'bold',
    color: '$grey-700',
    textDecoration: 'underline',

    margin: '0 0.5rem',
  },
});

const NotFound: React.FC = () => {
  return (
    <Page>
      <Container>
        <Image
          src="/assets/images/404.webp"
          alt="Not Found"
          width={600}
          height={600}
        />

      </Container>
    </Page>
  );
};

export default NotFound;
