import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Tech from "../components/About/Tech";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Contributions from "../components/Contributions/Contributions";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Contributions />
      <Projects />
      {/* <Contact />       */}
      {/* <FixSocialIcon /> */}


      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
