import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HI THERE! <br />
        I'M Duwesh kumar
      </SectionTitle>
      <SectionText>
        Tech Enthusiast with excellent Problem Solving Skills and the ability to
        perform well in a team. Passionate about web development, coding, and
        learning new Technologies.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
