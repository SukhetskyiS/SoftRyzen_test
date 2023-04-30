import styled from "@emotion/styled";

export const CasesContainer = styled.section`
  background: #ffffff;
  padding: 56px 20px 40px 20px;
  text-align: center;
  color: #333333;
`;

export const CasesQuestion = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;
`;
export const CasesHeader = styled.h2`
  margin-bottom: 24px;
  padding-left: 31px;
  padding-right: 30px;

  font-size: 32px;
  line-height: 1.38;
`;
export const CasesText = styled.p`
  margin-bottom: 31px;

  font-size: 16px;
  line-height: 1.38;

  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Image = styled.img`
  min-width: 280px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 90%;
  height: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ModalArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
  &:before {
    content: "<";
    font-size: 2rem;
  }
`;

export const ModalArrowRight = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
  &:before {
    content: ">";
    font-size: 2rem;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  bottom: -20px;
  right: 10px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
  &:before {
    content: "X";
    font-size: 2rem;
  }
`;
