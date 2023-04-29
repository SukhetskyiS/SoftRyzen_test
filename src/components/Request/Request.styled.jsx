import styled from "@emotion/styled";

export const RequestContainer = styled.section`
  padding: 0 20px 20px 20px;
  color: #333333;
  background: #f4f4f4;
`;
export const RequestHeader = styled.h2`
  margin-top: 51px;
  margin-bottom: 69px;

  font-size: 32px;
  line-height: 1.5;
`;
export const RequestName = styled.input`
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
`;
export const RequestEmail = styled.input`
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
`;
export const RequestButton = styled.button`
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
`;
