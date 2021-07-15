import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I am<br />
          Hakan Eröztekin
        </SectionTitle>
        <SectionText>
          Software Development Engineer <br />@ <a href="a.com">Trendyol.com</a>
        </SectionText>
        <Button onClick={props.handleClick}>Download CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;