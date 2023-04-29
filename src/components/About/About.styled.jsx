import styled from "@emotion/styled";

export const AboutSection = styled.section``;

export const AboutInformation = styled.div`
  text-align: start;

  padding: 79px 20px 79px 20px;

  background: #28a745;
`;

export const Question = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;

  color: #ffffff;
`;

export const AboutHeader = styled.h2`
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;

  color: #ffffff;
`;

export const AboutText = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.38;

  color: #ffffff;
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
`;
