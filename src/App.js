import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Theme';
import Hero from "./Components/HeroSection/index";
import Skills from "./Components/Skills/index";
import Navbar from "./Components/Navbar/index";
import Education from "./Components/Education/index";
import Experience from "./Components/Experience/index";
import Projects from "./Components/Projects/index";
import { BrowserRouter, } from "react-router-dom";
import TimeLines from './Components/TimeLine';
import Footer from './Components/Footer';


const Body=styled.div`
background-color:${({theme})=>theme.bg};
width:100%;
overflow-x:hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  return (
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
    <Navbar/>
    <Body>
    <Hero/>
    <Wrapper>
    <Skills/>
    <Experience/>
    </Wrapper>
    <Projects/>
    <Wrapper>
    <Education/>
    <TimeLines/>
    </Wrapper>
 <Footer/>
    </Body>
    </BrowserRouter>
    
  </ThemeProvider>
  );
}

export default App;
