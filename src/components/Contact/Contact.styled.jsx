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
  padding-bottom: 12px;

  gap: 25px;
`;
export const ContactFacebook = styled(Facebook)``;
export const ContactTwitter = styled(Twitter)``;
export const ContactYoutube = styled(Youtube)``;
export const ContactLinkedin = styled(Linkedin)``;
export const ContactText = styled.p`
  font-size: 16px;
  line-height: 1.38;
`;
