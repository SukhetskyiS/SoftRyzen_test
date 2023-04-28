import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  height: 120px;
  padding: 0 22px 0 22px;
  opacity: 1;
  position: relative;
  z-index: 2;
`;
export const HeaderContainerFixed = styled.header`
  position: fixed;
  left: 0;
  height: 120px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 22px 0 22px;
  opacity: 0.8;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  transform: translateY(
    ${({ isScrolled }) => (isScrolled ? "0" : "-120px")}
  );
  transition: transform 0.3s ease-in-out;

  z-index: 3;
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
