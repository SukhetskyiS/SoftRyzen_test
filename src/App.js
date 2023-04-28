import "./App.css";
import { BackgroundContainer } from "./App.styled";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Cases } from "./components/Cases/Cases";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Request } from "./components/Request/Request";
import { Team } from "./components/Team/Team";

function App() {
  return (
    <>
      <BackgroundContainer>
        <Header />
        <Main />
      </BackgroundContainer>

      <About />
      <Cases />
      <Blog />
      <Team />
      <Request />
      <Contact />
    </>
  );
}

export default App;
