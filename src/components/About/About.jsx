import aboutImg1xJpg from "../../assets/about.jpg";
import aboutImg2xJpg from "../../assets/about2x.jpg";
import aboutImg1xWebp from "../../assets/about.webp";
import aboutImg2xWebp from "../../assets/about2x.webp";
import {
  AboutButton,
  AboutHeader,
  AboutInformation,
  AboutText,
  Question,
  AboutSection,
  AboutPicture,
} from "./About.styled";

export function About() {
  const smallImage = `(max-width: 600px) ${aboutImg1xJpg}, ${aboutImg2xJpg} 2x`;
  const largeImage = `(min-width: 601px) ${aboutImg1xJpg}, ${aboutImg2xJpg} 2x`;
  const smallImageWebp = `(max-width: 600px) ${aboutImg1xWebp}, ${aboutImg2xWebp} 2x`;
  const largeImageWebp = `(min-width: 601px) ${aboutImg1xWebp}, ${aboutImg2xWebp} 2x`;

  return (
    <AboutSection id="about">
      <AboutPicture>
        <source
          media={smallImage}
          srcSet={smallImageWebp}
          type="image/webp"
        />
        <source
          media={largeImage}
          srcSet={largeImageWebp}
          type="image/webp"
        />
        <img
          src={aboutImg1xJpg}
          srcSet={`${aboutImg2xJpg} 2x`}
          alt="team"
        />
      </AboutPicture>
      <AboutInformation>
        <Question>What you are looking for</Question>
        <AboutHeader>
          We provide bespoke solutions
        </AboutHeader>
        <AboutText>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate, ipsum dignissimos
          quae laudantium asperiores nam aliquid impedit
          harum illum dolore explicabo ab dolores itaque
          rerum temporibus doloribus iste maiores deleniti?
        </AboutText>
        <AboutButton type="button">Read More</AboutButton>
      </AboutInformation>
    </AboutSection>
  );
}
