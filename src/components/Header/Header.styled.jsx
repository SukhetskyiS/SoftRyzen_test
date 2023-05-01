import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  height: 120px;
  padding: 0 22px;
  opacity: 1;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    height: 70px;
  }
`;
export const HeaderContainerFixed = styled.header`
  position: fixed;
  left: 0;
  height: 120px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 22px;
  opacity: 0.8;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  transform: translateY(
    ${({ isScrolled }) => (isScrolled ? "0" : "-120px")}
  );
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 3;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    height: 70px;
    transform: translateY(
      ${({ isScrolled }) => (isScrolled ? "0" : "-70px")}
    );
  }
`;

export const LogoCompany = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  padding-top: 22px;

  font-size: 28px;
  line-height: 1.36;

  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top left;

  &:hover {
    transform: scale(1.1);
    filter: brightness(130%);
  }

  @media screen and (min-width: 768px) {
    padding-left: 0;
    padding-top: 23px;
  }
`;

export const FirstText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.36;
  color: #28a745;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    line-height: 1.37;
  }
`;

export const SecondText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.36;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    line-height: 1.37;
  }
`;

export const List = styled.ul`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding-top: 28px;
    gap: 20px;
  }
`;

export const Item = styled.li`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;
  cursor: pointer;

  color: #ffffff;

  position: relative;

  &:hover {
    &:after {
      content: "";
      position: absolute;
      left: -15px;
      bottom: -5px;
      width: calc(100% + 30px);
      height: 4px;
      background-color: #28a745;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;
