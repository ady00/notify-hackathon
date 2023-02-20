import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { darkTheme, styled } from '@styled';

import { FeatureBox, MidBox, LeftBox, RightBox } from '@shared/home/featureBox';
import CircularArow from '@components/annotations/circularArrow';
import Repeat from '@components/annotations/repeat';

const AllFeaturesContainer = styled('div', {
  width: 'auto',
  height: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const CheckMarkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '2rem',

  [`.${darkTheme} &`]: {
    opacity: 0.3,
  },
});

const Text = styled('p', {
  fontFamily: '$indie',
  fontSize: '2rem',
  color: '$grey-500',
  marginBottom: '2rem',
});

const AllFeatures: React.FC = () => {
  const [currentCount, setCount] = useState(19);
  const timer = () => setCount(currentCount - 0.01);

  useEffect(() => {
    if (currentCount <= 0) {
      return;
    }

    // Every second, decrease the count by 0.01, so 18.45 -> 18.44, etc. 18min, 44sec
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCount]);

  return (
    <div></div>
  );
};

export default AllFeatures;
