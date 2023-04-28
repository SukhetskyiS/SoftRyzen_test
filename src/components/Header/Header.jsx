import { useState, useEffect } from "react";
import {
  HeaderContainer,
  List,
  LogoCompany,
  HeaderContainerFixed,
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
      </HeaderContainerFixed>

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
    </>
  );
}
