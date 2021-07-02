import React from 'react';
import { FaRss, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { rhythm } from '../utils/typography';

import './Footer.css';
class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
          display: `flex`,
          fontSize: `20px`,
          justifyContent: `space-between`,
        }}
      >
        <div className="social">
          <a
            href="https://mobile.twitter.com/ratulmaharaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedIn.com/in/ratulmaharaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RatulMaharaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="rss">
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            <FaRss />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
