import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Listen. Explore. Discover. Lead.</HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <Button to="signin" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
