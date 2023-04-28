import {
  TeamContainer,
  TeamQuestion,
  TeamHeader,
  TeamText,
  TeamName,
  TeamPosition,
  TeamFoto,
} from "./Team.styled";

export function Team() {
  return (
    <TeamContainer>
      <TeamQuestion>Who we are</TeamQuestion>
      <TeamHeader>Our Professional Team</TeamHeader>
      <TeamText>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, sapiente!
      </TeamText>
      <ul>
        <li>
          <TeamFoto
            width={280}
            height={186}
            alt="TeamFoto"
          />
          <TeamName>John Doe</TeamName>
          <TeamPosition>President</TeamPosition>
        </li>
        <li>
          <TeamFoto
            width={280}
            height={186}
            alt="TeamFoto"
          />
          <TeamName>Jane Doe</TeamName>
          <TeamPosition>Vice President</TeamPosition>
        </li>
        <li>
          <TeamFoto
            width={280}
            height={186}
            alt="TeamFoto"
          />
          <TeamName>Steve Smith</TeamName>
          <TeamPosition>Marketing Head</TeamPosition>
        </li>
      </ul>
    </TeamContainer>
  );
}
