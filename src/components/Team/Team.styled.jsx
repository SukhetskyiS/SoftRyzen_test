import styled from "@emotion/styled";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

export const TeamContainer = styled.section`
  padding: 0 20px 20px 20px;
  color: #333333;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    padding: 50px 32px 40px 32px;
  }
`;
export const TeamQuestion = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  padding-top: 72px;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
    padding-top: 0;
  }
`;
export const TeamHeader = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
  }
`;
export const TeamText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 63px;

  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    margin-bottom: 24px;
  }
`;

export const TeamList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 18px;
  }
`;

export const TeamFoto = styled.img`
  margin-bottom: 16px;
  z-index: 1;
  transition: filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    props.isHovered &&
    `
    filter: brightness(0.6);
  `}

  @media screen and (min-width: 768px) {
    width: 223px;
  }
`;

export const TeamName = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 8px;

  font-size: 20px;
  line-height: 1.35;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`;
export const TeamPosition = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  position: relative;

  scale: 1;
  transition: all 0.5s ease-in-out;

  ${(props) =>
    props.isHovered &&
    `
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      transform: scale(1.03);
      transition: all 0.5s ease-in-out;
    }
  `}
`;

export const ContactFacebook = styled(Facebook)`
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }
`;
export const ContactTwitter = styled(Twitter)`
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }
`;
export const ContactYoutube = styled(Youtube)`
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }
`;
export const ContactLinkedin = styled(Linkedin)`
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }
`;

export const SocialList = styled.ul`
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isHovered }) =>
    isHovered ? "flex" : "none"};
`;
