import styled from "@emotion/styled";

export const CasesContainer = styled.section`
  background: #ffffff;
  padding: 48px 32px 40px 32px;
  text-align: center;
  color: #333333;

  @media screen and (min-width: 768px) {
    padding: 48px 32px 40px 32px;
  }

  @media screen and (min-width: 1200px) {
    padding: 80px 28px 80px 28px;
  }
`;

export const CasesQuestion = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;
export const CasesHeader = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;
  padding-left: 31px;
  padding-right: 30px;

  font-size: 32px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
  }
`;
export const CasesText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 31px;

  font-size: 16px;
  line-height: 1.38;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    margin-bottom: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 18px;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  min-width: 280px;
  opacity: 1;

  &:hover {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    min-width: 222px;
    flex-basis: calc(33.33% - 12px);
    max-width: calc(33.33% - 12px);
    width: 222px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 369px;
    width: 369px;
  }
`;

export const Item = styled.li``;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  padding: 0 230px;
  max-width: 100%;
  max-height: 100%;
`;

export const ModalArrowLeft = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 88px;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      filter: brightness(130%);
    }
  }
`;

export const ModalArrowRight = styled.img`
display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 88px;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      filter: brightness(130%);
    }
  }
}
`;

export const ModalCloseButton = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: -6%;
  right: 25%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.4;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
  }
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
