import {
  TeamContainer,
  TeamQuestion,
  TeamHeader,
  TeamText,
  TeamName,
  TeamPosition,
  TeamFoto,
} from "./Team.styled";

import person1 from "../../assets/team/person1.jpg";
import person1_2x from "../../assets/team/person1@2x.jpg";
import person1_webp from "../../assets/team/person1.webp";
import person1_webp2x from "../../assets/team/person1@2x.webp";
import person2 from "../../assets/team/person2.jpg";
import person2_2x from "../../assets/team/person2@2x.jpg";
import person2_webp from "../../assets/team/person2.webp";
import person2_webp2x from "../../assets/team/person2@2x.webp";
import person3 from "../../assets/team/person3.jpg";
import person3_2x from "../../assets/team/person3@2x.jpg";
import person3_webp from "../../assets/team/person3.webp";
import person3_webp2x from "../../assets/team/person3@2x.webp";

export function Team() {
  const images = [
    {
      src: person1,
      srcSet: `${person1} 1x, ${person1_2x} 2x`,
      webpSrcSet: `${person1_webp} 1x, ${person1_webp2x} 2x`,
      name: "John Doe",
      position: "President",
    },
    {
      src: person2,
      srcSet: `${person2} 1x, ${person2_2x} 2x`,
      webpSrcSet: `${person2_webp} 1x, ${person2_webp2x} 2x`,
      name: "Jane Doe",
      position: "Vice President",
    },
    {
      src: person3,
      srcSet: `${person3} 1x, ${person3_2x} 2x`,
      webpSrcSet: `${person3_webp} 1x, ${person3_webp2x} 2x`,
      name: "Steve Smith",
      position: "Marketing Head",
    },
  ];

  return (
    <TeamContainer>
      <TeamQuestion>Who we are</TeamQuestion>
      <TeamHeader>Our Professional Team</TeamHeader>
      <TeamText>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, sapiente!
      </TeamText>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <TeamFoto
              src={image.src}
              srcSet={`${image.srcSet}, ${image.webpSrcSet}`}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              alt={`Cases ${index + 1}`}
            />
            <TeamName>{image.name}</TeamName>
            <TeamPosition>{image.position}</TeamPosition>
          </li>
        ))}
      </ul>
    </TeamContainer>
  );
}
