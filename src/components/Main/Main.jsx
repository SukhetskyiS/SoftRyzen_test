import {
  Button,
  MainHeaderText,
  MainSection,
  Text,
} from "./Main.styled";

import { ReactComponent as Vector } from "../../assets/vector.svg";

export function Main() {
  return (
    <MainSection id="main">
      <MainHeaderText>The Sky Is The Limit</MainHeaderText>
      <Text>
        We provide world class financial assistance
      </Text>
      <Button type="button">
        <Vector /> Read More
      </Button>
    </MainSection>
  );
}
