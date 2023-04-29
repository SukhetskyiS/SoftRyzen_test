import styled from "@emotion/styled";

export const MainSection = styled.section`
  padding: 0 22px 104px 22px;
  position: relative;
  z-index: 2;
`;

export const MainHeaderText = styled.h1`
  padding: 0 20px 0 20px;
  margin-bottom: 16px;
  margin-top: 40px;

  font-weight: 600;
  font-size: 40px;
  line-height: 1.35;
  text-align: center;

  color: #ffffff;
`;

export const Text = styled.p`
  margin-bottom: 24px;

  font-size: 26px;
  line-height: 1.23;

  text-align: center;

  color: #ffffff;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 8px;
  width: 175px;
  height: 57px;

  background: #28a745;
  border-radius: 5px;
  border: none;

  font-size: 18px;
  line-height: 1.39;

  text-align: center;

  color: #ffffff;

  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }
`;
