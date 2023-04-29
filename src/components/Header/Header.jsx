import { useState, useEffect } from "react";
import {
  HeaderContainer,
  List,
  LogoCompany,
  HeaderContainerFixed,
  Item,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      if (position > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainerFixed isScrolled={isScrolled}>
        <LogoCompany href="/">
          <Logo />
          <span style={{ color: "#28A745" }}>Finance</span>
          <span style={{ color: "#FFFFFF" }}>Ledger</span>
        </LogoCompany>

        <nav>
          <List>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Cases</Item>
            <Item>Blog</Item>
            <Item>Contact</Item>
          </List>
        </nav>
      </HeaderContainerFixed>

      <HeaderContainer>
        <LogoCompany href="/">
          <Logo />
          <span style={{ color: "#28A745" }}>Finance</span>
          <span style={{ color: "#FFFFFF" }}>Ledger</span>
        </LogoCompany>

        <nav>
          <List>
            <Item>Home</Item>
            <Item>About</Item>
            <Item>Cases</Item>
            <Item>Blog</Item>
            <Item>Contact</Item>
          </List>
        </nav>
      </HeaderContainer>
    </>
  );
}
