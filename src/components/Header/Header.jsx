import { useState, useEffect } from "react";
import {
  HeaderContainer,
  List,
  LogoCompany,
  HeaderContainerFixed,
  Item,
  FirstText,
  SecondText,
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

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <HeaderContainerFixed isScrolled={isScrolled}>
        <LogoCompany href="/">
          <Logo />
          <FirstText>Finance</FirstText>
          <SecondText>Ledger</SecondText>
        </LogoCompany>

        <nav>
          <List>
            <Item
              href="#main"
              onClick={() => scrollToSection("main")}
            >
              Home
            </Item>
            <Item
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              About
            </Item>
            <Item
              href="#cases"
              onClick={() => scrollToSection("cases")}
            >
              Cases
            </Item>
            <Item
              href="#blog"
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </Item>
            <Item
              href="#contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Item>
          </List>
        </nav>
      </HeaderContainerFixed>

      <HeaderContainer>
        <LogoCompany href="/">
          <Logo />
          <FirstText>Finance</FirstText>
          <SecondText>Ledger</SecondText>
        </LogoCompany>

        <nav>
          <List>
            <Item
              href="#main"
              onClick={() => scrollToSection("main")}
            >
              Home
            </Item>
            <Item
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              About
            </Item>
            <Item
              href="#cases"
              onClick={() => scrollToSection("cases")}
            >
              Cases
            </Item>
            <Item
              href="#blog"
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </Item>
            <Item
              href="#contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Item>
          </List>
        </nav>
      </HeaderContainer>
    </>
  );
}
