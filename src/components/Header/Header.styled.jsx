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
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 3;
`;

export const LogoCompany = styled.a`
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
`;

export const List = styled.ul`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  color: #ffffff;
`;

export const Item = styled.li`
  font-size: 16px;
  line-height: 1.38;

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
`;
