import styled from "@emotion/styled";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

export const ContactFooter = styled.footer`
  padding: 20px;
  color: #ffffff;
  background: #333333;
`;
export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  gap: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const ContactFacebook = styled(Facebook)`
  path {
    transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover path {
    fill: #28a745;
  }
`;
export const ContactTwitter = styled(Twitter)`
  path {
    transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover path {
    fill: #28a745;
  }
`;
export const ContactYoutube = styled(Youtube)`
  path {
    transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover path {
    fill: #28a745;
  }
`;
export const ContactLinkedin = styled(Linkedin)`
  path {
    transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover path {
    fill: #28a745;
  }
`;
export const ContactText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;
