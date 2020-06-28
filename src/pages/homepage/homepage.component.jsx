import React from 'react';

import './homepage.styles.scss';

import {
  MainHeading,
  TertiaryHeading,
} from '../../styledComponents/typography';

import Container from '../../components/container/container'

const HomePage = () => (
  <Container className="home-page">
    <MainHeading>Saurabh</MainHeading>
    <TertiaryHeading>full Stack Developer</TertiaryHeading>
  </Container>
);

export default HomePage;
