import React from 'react';

import './homepage.styles.scss';

import {ReactComponent as GithubSvg} from '../../assets/svg/github.svg';
import {ReactComponent as TwitterSvg} from '../../assets/svg/twitter.svg';
import {ReactComponent as MailSvg} from '../../assets/svg/mail.svg';

import Container from '../../components/container/container';

const HomePage = () => (
  <Container className="home-page">
    <div> 
      <h2 className="main-heading">Saurabh</h2>
      <h6 className="secondary-heading">Full Stack Developer</h6>
    </div>
    <div className="left-content">
      <a href="https://github.com/Saurabh-FullStackDev" target="_blank"><GithubSvg /></a>
      <a href="https://twitter.com/Saurabh50798764" target="_blank"><TwitterSvg /></a>
      <a href="mailto:saurabh.fullstackdev@outlook.com"><MailSvg /></a>
    </div>
  </Container>
);

export default HomePage;
