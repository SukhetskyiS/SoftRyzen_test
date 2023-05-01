import styled from "@emotion/styled";

export const AboutSection = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
  }
`;

export const AboutPicture = styled.picture`
  @media screen and (min-width: 768px) {
    width: 368px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 670px;
  }
`;

export const AboutInformation = styled.div`
  text-align: start;

  padding: 79px 20px 79px 20px;

  background: #28a745;

  @media screen and (min-width: 768px) {
    max-width: 336px;
    height: 465px;
    padding: 62px 32px;
  }

  @media screen and (min-width: 1200px) {
    padding: 80px 28px 86px 20px;
    max-width: 642px;
    width: 642px;
    height: 294px;
  }
`;

export const Question = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const AboutHeader = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const AboutText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.38;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const AboutButton = styled.button`
  width: 146px;
  height: 54px;

  background: transparent;

  border: 1px solid #ffffff;
  border-radius: 5px;

  font-size: 16px;
  line-height: 1.38;

  color: #ffffff;

  transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #28a745;
    border-color: #28a745;
    background: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 156px;
    height: 57px;
    font-size: 18px;
    line-height: 1.39;
  }
`;
