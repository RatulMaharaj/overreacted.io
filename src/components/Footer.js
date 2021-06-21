import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/ratulmaharaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/RatulMaharaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedIn
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/RatulMaharaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
      </footer>
    );
  }
}

export default Footer;
