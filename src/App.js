// import Experience from "./components/Experience"

// const App = () => {
//   return (

//       <Experience/>

//   )
// }

// export default App



import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import DotGroup from "./components/dotGroup";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Background from "./effects/Background";
import Project from "./components/Project";
import Experience from "./components/Experience";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="cont main">
      <Background />
      {/* navbar is starting  */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* landing dot symbols followed by landing page */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <LandingPage setSelectedPage={setSelectedPage} />
          <About />
        </motion.div>

        {/* contact me page from here */}
      </div>
      <div className="cont w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          className="cont"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <div className="">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          className="projectsection "
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Project />
        </motion.div>
      </div>
      <div className="">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("experience")}
        >
          <Experience/>
        </motion.div>
      </div>
      <div className="cont w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          className="cont"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
