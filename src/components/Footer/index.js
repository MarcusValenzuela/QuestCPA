import React from "react";
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import Logo from '../../images/Icon-WHT.png'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Submit Video</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}><img src={Logo} width='35' height='40'></img></SocialLogo>
            <WebsiteRights>Quest © 2022 All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com/QuestTaxAndBookkeepingServices" target="_blank" aria-label="Facebook">
                  <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/questcpa/?hl=en" target="_blank" aria-label="Instagram">
                  <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/in/tim-ewing-6806b01a/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
