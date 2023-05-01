import React, { useState } from "react";
import {
  TeamContainer,
  TeamQuestion,
  TeamHeader,
  TeamText,
  TeamName,
  TeamPosition,
  TeamFoto,
  Container,
  ContactFacebook,
  ContactTwitter,
  ContactYoutube,
  ContactLinkedin,
  SocialList,
  TeamList,
} from "./Team.styled";
import { employees } from "./employees";

export function Team() {
  const [isHovered, setIsHovered] = useState(
    employees.map(() => false)
  );

  const handleMouseEnter = (index) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <TeamContainer>
      <TeamQuestion>Who we are</TeamQuestion>
      <TeamHeader>Our Professional Team</TeamHeader>
      <TeamText>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, sapiente!
      </TeamText>
      <TeamList>
        {employees.map((employee, index) => (
          <li key={index}>
            <Container
              isHovered={isHovered[index]}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <TeamFoto
                isHovered={isHovered[index]}
                src={employee.src}
                srcSet={`${employee.srcSet}, ${employee.webpSrcSet}`}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                alt={`Employee ${index + 1}`}
              />
              {isHovered[index] && (
                <SocialList isHovered={isHovered[index]}>
                  <li>
                    <ContactFacebook />
                  </li>
                  <li>
                    <ContactTwitter />
                  </li>
                  <li>
                    <ContactYoutube />
                  </li>
                  <li>
                    <ContactLinkedin />
                  </li>
                </SocialList>
              )}
            </Container>

            <TeamName>{employee.name}</TeamName>
            <TeamPosition>{employee.position}</TeamPosition>
          </li>
        ))}
      </TeamList>
    </TeamContainer>
  );
}
