import {
  CasesContainer,
  CasesHeader,
  CasesQuestion,
  CasesText,
  List,
} from "./Cases.styled";

export function Cases() {
  return (
    <CasesContainer>
      <CasesQuestion>This is what we do</CasesQuestion>
      <CasesHeader>Business Cases</CasesHeader>
      <CasesText>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, sapiente!
      </CasesText>
      <List>Some images</List>
    </CasesContainer>
  );
}
