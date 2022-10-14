import React, { useState } from 'react';

import dynamic from 'next/dynamic';

import Countdown from '../src/Countdown';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false }) // eslint-disable-line

export default function Index() {
  const [showFooter, setShowFotter] = useState(true);

  return (
    <>
      <Snowfall />
      <Countdown />
      {
        showFooter ? (
          <footer>
            <a href="https://plbrault.com">&copy; 2022 P-L.Brault</a>
            <button type="button" className="hide-footer" onClick={() => setShowFotter(false)}>hide</button>
          </footer>
        ) : ''
      }
    </>
  );
}
