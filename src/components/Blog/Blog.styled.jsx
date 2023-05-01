import styled from "@emotion/styled";

export const BlogContainer = styled.section`
  text-align: start;
  padding: 0 20px 0 20px;
  color: #ffffff;
  background: #0284d0;
`;

export const BlogInformation = styled.div`
  padding: 48px 0 58px 0;
`;

export const BlogDate = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.38;
`;
export const BlogHeader = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;
`;
export const BlogText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.38;
`;
export const BlogButton = styled.button`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  width: 172px;
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
    color: #0284d0;
    border-color: #0284d0;
    background: #ffffff;
  }
`;
