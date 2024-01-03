import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Head from "./components/Head/Head";

function App() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".menu-icon", {
        scrollTrigger: {
          trigger: ".project-section",
          scrub: 1,
          start: "top 50px",
          end: "bottom, top",
          toggleActions: "play none none reverse",
        },
        rotate: "40",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <ChakraProvider>
      <Box ref={container} scrollBehavior={"smooth"}>
        <Navbar />
        <Head />
        <About />
        <Projects />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
