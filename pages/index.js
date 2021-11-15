import React from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import ChristmasCountdown from '../src/ChristmasCountdown';

const Snowfall = dynamic({ loader: () => import('react-snowfall') },{ loading: () => <div></div>, ssr: false })

export default function Index() {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-status-bar-style" content="#070026" />

        <meta name="og:title" content="Yet Another Christmas Countdown!" />
        <meta name="tiwtter:title" content="Yet Another Christmas Countdown!" />

        <meta name="og:url" content="https://YetAnotherChristmasCountdown.com" />

        <meta name="og:description" content="A Christmas Countdown with no ads or social media icons, only the countdown!" />
        <meta name="description" content="A Christmas Countdown with no ads or social media icons, only the countdown!" />
        <meta name="twitter:description" content="A Christmas Countdown with no ads or social media icons, only the countdown!" />

        <meta name="twitter:image" content="https://yetanotherchristmascountdown.com/social-media-picture.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:image" content="https://yetanotherchristmascountdown.com/social-media-picture.jpg" />

        <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
      </Head>
      <Snowfall />
      <ChristmasCountdown />
    </>
  );
}
