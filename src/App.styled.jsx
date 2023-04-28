import styled from "@emotion/styled";
import imgJpg from "./assets/bg.jpg";
import imgRetinaJpg from "./assets/bg2x.jpg";
import imgWebp from "./assets/bg.webp";
import imgRetinaWebp from "./assets/bg2x.webp";

export const BackgroundContainer = styled.div`
  position: relative;
  background-image: url(${imgJpg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;

  @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
    background-image: url(${imgRetinaJpg});
  }

  /* Для WEBP */
  @supports (
    background-image: -webkit-image-set(url(), url())
  ) {
    background-image: -webkit-image-set(
      url(${imgWebp}) 1x,
      url(${imgRetinaWebp}) 2x
    );
  }

  /* Затемнение */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    );
    z-index: 0;
  }
`;
