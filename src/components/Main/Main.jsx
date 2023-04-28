import {
  Button,
  MainHeaderText,
  MainSection,
  Text,
} from "./Main.styled";

export function Main() {
  return (
    <MainSection>
      <MainHeaderText>The Sky Is The Limit</MainHeaderText>
      <Text>
        We provide world class financial assistance
      </Text>
      <Button type="button">Read More</Button>
    </MainSection>
  );
}
