import styled from "@emotion/styled";

export const RequestSection = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const RequestImage = styled.img`
  @media screen and (min-width: 768px) {
    width: 368px;
    height: auto;
    object-fit: none;
    object-position: center;
  }

  @media screen and (min-width: 1200px) {
    width: 670px;
  }
`;

export const RequestContainer = styled.section`
  padding: 0 20px 20px 20px;
  color: #333333;
  background: #f4f4f4;

  @media screen and (min-width: 768px) {
    padding: 32px 32px 33px 32px;
    flex-grow: 1;
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    width: 670px;
    padding: 56px 28px 77px 20px;
  }
`;

export const RequestForm = styled.form`
  display: grid;
`;
export const RequestHeader = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-top: 51px;
  margin-bottom: 69px;

  font-size: 32px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
    margin-top: 0;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 31px;
    margin-right: auto;
  }
`;
export const RequestName = styled.input`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  width: 280px;
  height: 48px;
  padding-left: 8px;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.44;

  color: #808080;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 57px;
    font-size: 18px;
    line-height: 1.39;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 25px;
    width: 642px;
  }
`;
export const RequestEmail = styled.input`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  width: 280px;
  height: 48px;
  padding-left: 8px;

  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.44;

  color: #808080;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 57px;
    font-size: 18px;
    line-height: 1.39;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
    width: 642px;
  }
`;
export const RequestButton = styled.button`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 57px;
  margin-bottom: 25px;

  border: none;
  background: #28a745;
  border-radius: 5px;

  font-size: 18px;
  line-height: 1.39;

  text-align: center;

  color: #ffffff;

  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
