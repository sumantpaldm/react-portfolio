import React, {useState} from "react";
import About from "./components/About"
import Navbar from "./components/Header"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"


function App() {


  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div className="App">
      <Navbar
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {!portfolioSelected &&
          !contactSelected &&
          !resumeSelected &&
          !aboutSelected && <About />}
        {aboutSelected && <About />}
        {portfolioSelected && <Portfolio />}
        {contactSelected && <Contact />}
        {resumeSelected && <Resume />}
      </main>
      <Footer />
    </div>
  );
}


export default App;
