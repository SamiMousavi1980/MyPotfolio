import { Button, Link, Text, VStack } from "@chakra-ui/react";
import { projectsData, articlessData } from "./projectData";
import ProjectCard from "./ProjectCard";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Projects() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".project-image").forEach((image, i) => {
        gsap.from(image, {
          scrollTrigger: {
            trigger: image,
            start: "top 70%",
            end: "bottom top",
            toggleActions: "play complete none none",
            once: true,
          },
          duration: 1,
          x: () => (i % 2 === 0 ? "-50%" : "50%"),
          opacity: 0,
        });
      });

      gsap.utils.toArray(".project-info").forEach((project, i) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: () => (window.innerWidth >= 992 ? "top 70%" : "top 85%"),
            end: "bottom top",
            toggleActions: "play complete none none",
            once: true,
          },
          delay: 0.2,
          opacity: 0,
          duration: 1,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <VStack
      id="projects"
      py={"30px"}
      ref={container}
      className="project-section"
    >
      <Text
        className="space"
        fontSize={{ base: "312px", md: "42px" }}
        textDecor={"underline"}
      >
        Articles
      </Text>
      <VStack
        mt={"50px"}
        padding={{ base: "10px", md: "22px" }}
        gap={{ base: "50px", lg: "100px" }}
      >
        {articlessData.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </VStack>
      <Text
        className="space"
        fontSize={{ base: "18px", md: "42px" }}
        textDecor={"underline"}
      >
        Projects
      </Text>
      <VStack
        mt={"50px"}
        padding={{ base: "10px", md: "22px" }}
        gap={{ base: "50px", lg: "100px" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </VStack>
      <Text
        fontSize={{ base: "16px", md: "22px" }}
        className="raleway"
        mt={"30px"}
        fontWeight={"semibold"}
      >
        Visit my&nbsp;
        <Link isExternal href="https://github.com/Rif-7">
          <Button
            variant={"link"}
            fontSize={{ base: "16px", md: "22px" }}
            rightIcon={<ExternalLinkIcon />}
          >
            github
          </Button>
        </Link>
        &nbsp;to see more of my work.
      </Text>
    </VStack>
  );
}
