import {
  CasesContainer,
  CasesHeader,
  CasesQuestion,
  CasesText,
  List,
  Image,
} from "./Cases.styled";

import cases1 from "../../assets/cases/cases1.jpg";
import cases1_2x from "../../assets/cases/cases1@2x.jpg";
import cases1_webp from "../../assets/cases/cases1.webp";
import cases1_webp2x from "../../assets/cases/cases1@2x.webp";
import cases2 from "../../assets/cases/cases2.jpg";
import cases2_2x from "../../assets/cases/cases2@2x.jpg";
import cases2_webp from "../../assets/cases/cases2.webp";
import cases2_webp2x from "../../assets/cases/cases2@2x.webp";
import cases3 from "../../assets/cases/cases3.jpg";
import cases3_2x from "../../assets/cases/cases3@2x.jpg";
import cases3_webp from "../../assets/cases/cases3.webp";
import cases3_webp2x from "../../assets/cases/cases3@2x.webp";
import cases4 from "../../assets/cases/cases4.jpg";
import cases4_2x from "../../assets/cases/cases4@2x.jpg";
import cases4_webp from "../../assets/cases/cases4.webp";
import cases4_webp2x from "../../assets/cases/cases4@2x.webp";
import cases5 from "../../assets/cases/cases5.jpg";
import cases5_2x from "../../assets/cases/cases5@2x.jpg";
import cases5_webp from "../../assets/cases/cases5.webp";
import cases5_webp2x from "../../assets/cases/cases5@2x.webp";
import cases6 from "../../assets/cases/cases6.jpg";
import cases6_2x from "../../assets/cases/cases6@2x.jpg";
import cases6_webp from "../../assets/cases/cases6.webp";
import cases6_webp2x from "../../assets/cases/cases6@2x.webp";

export function Cases() {
  const images = [
    {
      src: cases1,
      srcSet: `${cases1} 1x, ${cases1_2x} 2x`,
      webpSrcSet: `${cases1_webp} 1x, ${cases1_webp2x} 2x`,
    },
    {
      src: cases2,
      srcSet: `${cases2} 1x, ${cases2_2x} 2x`,
      webpSrcSet: `${cases2_webp} 1x, ${cases2_webp2x} 2x`,
    },
    {
      src: cases3,
      srcSet: `${cases3} 1x, ${cases3_2x} 2x`,
      webpSrcSet: `${cases3_webp} 1x, ${cases3_webp2x} 2x`,
    },
    {
      src: cases4,
      srcSet: `${cases4} 1x, ${cases4_2x} 2x`,
      webpSrcSet: `${cases4_webp} 1x, ${cases4_webp2x} 2x`,
    },
    {
      src: cases5,
      srcSet: `${cases5} 1x, ${cases5_2x} 2x`,
      webpSrcSet: `${cases5_webp} 1x, ${cases5_webp2x} 2x`,
    },
    {
      src: cases6,
      srcSet: `${cases6} 1x, ${cases6_2x} 2x`,
      webpSrcSet: `${cases6_webp} 1x, ${cases6_webp2x} 2x`,
    },
  ];

  return (
    <CasesContainer>
      <CasesQuestion>This is what we do</CasesQuestion>
      <CasesHeader>Business Cases</CasesHeader>
      <CasesText>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, sapiente!
      </CasesText>
      <List>
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={image.src}
              srcSet={`${image.srcSet}, ${image.webpSrcSet}`}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              alt={`Cases ${index + 1}`}
            />
          </li>
        ))}
      </List>
    </CasesContainer>
  );
}
