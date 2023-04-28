import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  height: 120px;
  padding: 0 22px 0 22px;
  border: 1px solid red;

  position: relative;

  top: -120%;

  transition: transform 0.3s ease;

  ${({ isScrolled }) =>
    isScrolled &&
    `
      position: fixed;
      top: 0;
      left: 0;
      transform: translateY(0%);
    `};
`;

export const LogoCompany = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  padding-top: 22px;
  margin-bottom: 16px;

  font-size: 28px;
  line-height: 1.36;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  color: #ffffff;
`;
