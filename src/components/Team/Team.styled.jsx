import styled from "@emotion/styled";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

export const TeamContainer = styled.section`
  padding: 0 20px 20px 20px;
  color: #333333;
  background: #ffffff;
`;
export const TeamQuestion = styled.p`
  padding-top: 72px;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;
`;
export const TeamHeader = styled.h2`
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;
`;
export const TeamText = styled.p`
  margin-bottom: 63px;

  font-size: 16px;
  line-height: 1.38;
`;
export const TeamFoto = styled.img`
  margin-bottom: 16px;
  z-index: 1; // добавляем эту строку
  transition: filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    props.isHovered &&
    `
    filter: brightness(0.6);
  `}
`;

export const TeamName = styled.h3`
  margin-bottom: 8px;

  font-size: 20px;
  line-height: 1.35;
`;
export const TeamPosition = styled.p`
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 1.38;
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
