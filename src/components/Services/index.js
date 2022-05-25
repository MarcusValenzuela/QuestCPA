import React from "react";
import Icon1 from '../../images/second.png'
import Icon2 from '../../images/first.png'
import Icon3 from '../../images/third.png'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Profit & Growth Advisory</ServicesH2>
          <ServicesP>
            Cash flow growth strategies & more
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Bookkeeping</ServicesH2>
          <ServicesP>
          Automate your bookkeeping and data
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Tax Planning/Preparation</ServicesH2>
          <ServicesP>
            We are here to help you resolve your tax problems
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
