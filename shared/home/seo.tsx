import { NextSeo } from 'next-seo';

const LandingPageSEO: React.FC = () => {
  return (
    <NextSeo
      title="Notify"
      description="Simple Productivity & Management App."
      openGraph={{
        url: 'https://notify-advay.netlift.app/',
        title: 'Notify',
        description: 'Simple Productivity & Management App.',
        site_name: 'Notify',
      }}
    />
  );
};

export default LandingPageSEO;
