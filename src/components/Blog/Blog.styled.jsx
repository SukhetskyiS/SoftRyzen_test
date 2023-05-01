import styled from "@emotion/styled";

export const BlogSection = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
`;

export const BlogImage = styled.img`
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 493px;
    object-fit: none;
    object-position: center;
    order: 2;
  }
`;

export const BlogContainer = styled.section`
  text-align: start;
  padding: 0 20px;
  color: #ffffff;
  background: #0284d0;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const BlogInformation = styled.div`
  padding: 48px 0 58px 0;

  @media screen and (min-width: 768px) {
    flex-grow: 1;
    width: 336px;
    padding: 59px 0;
  }
`;

export const BlogDate = styled.p`
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
export const BlogHeader = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
  }
`;
export const BlogText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;

  font-size: 16px;
  line-height: 1.38;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
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

  @media screen and (min-width: 768px) {
    width: 186px;
    height: 57px;
    font-size: 18px;
    line-height: 1.39;
  }
`;
