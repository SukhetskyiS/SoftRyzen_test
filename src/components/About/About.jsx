import foto from "../../assets/about_img.png";
import {
  AboutButton,
  AboutHeader,
  AboutInformation,
  AboutText,
  Question,
} from "./About.styled";

export function About() {
  return (
    <section>
      <img src={foto} alt="team" />
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
    </section>
  );
}
