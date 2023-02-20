import Link from 'next/link';
import { darkTheme, styled } from '@styled';

import SettingSvg from '@assets/svg/Setting.svg';

import RocketSvg from '@assets/svg/Rocket.svg';
import MixerHorizontalSvg from '@assets/svg/MixerHorizontal.svg';
import StarSvg from '@assets/svg/Star.svg';
import ExclamationSvg from '@assets/svg/Exclamation.svg';
import ShareSvg from '@assets/svg/Share.svg';

import GithubSvg from '@assets/svg/GitHub.svg';
import DiscordSvg from '@assets/svg/Discord.svg';
import TwitterSvg from '@assets/svg/Twitter.svg';

import {
  Root,
  StyledTrigger,
  Anchor,
  StyledContent,
} from '@components/popover';

const SettingsButton: React.FC = () => {
  return (
    <Root>
      <StyledTrigger>
        <SettingsStyledSvg />
      </StyledTrigger>
      <Anchor />
      <StyledPopoverContent
        color="light"
        dropShadow
        alignOffset={10}
        sideOffset={20}
      >
        <Link href="/settings" passHref>
          <LI>
            <MixerHorizontalSvg /> Settings
          </LI>
        </Link>
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
          <LI>
            <RocketSvg /> Don't Click{process.env.NEXT_PUBLIC_VERSION}
          </LI>
        </Link>



        

      </StyledPopoverContent>
    </Root>
  );
};

export default SettingsButton;

const SettingsStyledSvg = styled(SettingSvg, {
  width: 25,
  height: 25,
  fill: '$grey-700',

  transition: '$medium',

  '&:hover': {
    cursor: 'pointer',
    transform: 'rotate(40deg)',
  },
});

const StyledPopoverContent = styled(StyledContent, {
  width: '20rem',
  flexDirection: 'column',
  padding: '1rem 0 0.5rem 0',

  gap: '0.4rem',

  '@mobile': {
    width: '22rem',
  },
});

const LI = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  width: '90%',
  padding: '1rem 2rem',
  paddingLeft: '1.2rem',

  borderRadius: '0.8rem',

  fontSize: '1.4rem',
  fontWeight: '500',
  color: '$grey-800',

  transition: '$fast',

  svg: {
    width: '20',

    fill: '$grey-600',
  },

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$grey-200',
    color: '$grey-800',

    svg: {
      fill: '$grey-700',
    },

    [`.${darkTheme} &`]: {
      backgroundColor: '$grey-200',
      color: '$grey-700',

      svg: {
        fill: '$grey-700',
      },
    },
  },
});

const SocialBox = styled('div', {
  width: '100%',
  padding: '0.4rem 1rem',
  marginTop: '0.5rem',

  borderTop: '1px solid $grey-200',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [`${LI}`]: {
    padding: '1rem',
    gap: 0,
    width: 'min-content',

    ['svg']: {
      fill: '$grey-600',
      opacity: 0.8,

      transition: '$medium',
    },

    '&:hover svg': {
      fill: '$grey-700',

      [`.${darkTheme} &`]: {
        fill: '$grey-800',
      },

      cursor: 'pointer',
      transform: 'rotateZ(20deg)',
    },
  },
});
