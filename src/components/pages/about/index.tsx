import React from 'react';
import { AboutDiv, ContainerAbout, TeamDiv, Text, Title, Texto} from './About';
import Card from './Card';

const About = () => {
  return (
  <>
    <ContainerAbout>
    <Title>About</Title>

      <AboutDiv>
        <Text>
          We are a start-up company that helps clients develop and create innovative products, platforms and digital experiences for today's world.

Our passion is to create sustainable businesses, new business channels and revenue streams.

We help our customers imagine and rethink their business and accelerate their transition to digital business.
        </Text>
      </AboutDiv>
      <Title>Our Team</Title>
      <Texto>Startup leaders bring industry experience, a global perspective, and a passion for achieving results.</Texto>
      <TeamDiv>
          <Card/>
          <Card/>
          <Card/>

      </TeamDiv>

    </ContainerAbout>
  </>
  );
};

export default About;
