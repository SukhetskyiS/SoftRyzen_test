import {
  CasesContainer,
  CasesHeader,
  CasesQuestion,
  CasesText,
  List,
  Image,
} from "./Cases.styled";
import { images } from "./images";

export function Cases() {
  return (
    <CasesContainer id="cases">
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
