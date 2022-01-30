import React from 'react';
import { AboutDiv, ContainerAbout, TeamDiv, Text } from './About';

const About = () => {
  return (
  <>
    <ContainerAbout>
      <AboutDiv>
        <Text>
          We are a start-up company that helps clients develop and create innovative products, platforms and digital experiences for today's world.

Our passion is to create sustainable businesses, new business channels and revenue streams.

We help our customers imagine and rethink their business and accelerate their transition to digital business.
        </Text>
      </AboutDiv>
      <TeamDiv>
          <h1>our team</h1>
      </TeamDiv>

    </ContainerAbout>
  </>
  );
};

export default About;
