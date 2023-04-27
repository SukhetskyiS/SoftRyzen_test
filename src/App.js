// import logo from './logo.svg';
import './App.css';
import { About } from './components/About/About';
import { Blog } from './components/Blog/Blog';
import { Cases } from './components/Cases/Cases';
import { Contact } from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Request } from './components/Request/Request';
import { Team } from './components/Team/Team';

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <div>asdasdasd</div>
    // </div>
    <>
      <Header />
      <Main />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Request/>
      <Contact/>
    </>
  );
}

export default App;
