import {
  HeaderContainer,
  List,
  LogoCompany,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <LogoCompany href="/">
        <Logo />
        <span style={{ color: "#28A745" }}>Finance</span>
        <span style={{ color: "#FFFFFF" }}>Ledger</span>
      </LogoCompany>

      <nav>
        <List>
          <li>
            <div>Home</div>
          </li>
          <li>
            <div>About</div>
          </li>
          <li>
            <div>Cases</div>
          </li>
          <li>
            <div>Blog</div>
          </li>
          <li>
            <div>Contact</div>
          </li>
        </List>
      </nav>
    </HeaderContainer>
  );
}
