import { Flex, Text } from "@chakra-ui/react";
import Skills from "./Skills";
import { useEffect, useState } from "react";

export default function About() {
  const [myAge, setMyAge] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyAge(getAge);
    }, 3200);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myDob = new Date(1980, 5, 17);
  const MsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const getAge = () => {
    const curr = new Date();
    const ageInMs = curr - myDob;
    const age = ageInMs / MsPerYear;
    return age.toFixed(7);
  };

  return (
    <Flex
      id="about"
      w={"100%"}
      backgroundImage={"about-bg.jpg"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      direction={"column"}
      align={"center"}
      className="raleway"
      paddingY={"50px"}
      paddingX={"30px"}
      gap={"20px"}
      color={"black"}
    >
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        About
      </Text>

      <Text fontSize={"32px"} fontWeight={"semibold"}>
        Hi, I&apos;m Sami. Nice to meet you.
      </Text>

      <Text maxW={"800px"} w={"100%"} fontSize={"22px"} padding={"5px"}>
        I'm a&nbsp;
        <Text as={"b"} className="space-mono">
          {myAge}
        </Text>
         - (years.second) old, Experienced IT Manager and specialist with a proven track record in large and complex environments. With over 24 years of experience, my career 
         encompasses IT management and project management in the oil and gas industry in one of the largest producers in this field in the Middle East. Throughout these roles, 
         I spearheaded initiatives that streamlined processes, enhanced productivity, and achieved strategic organizational objectives. Additionally, I've served as an IT manager 
         in a major healthcare facility during the COVID-19 pandemic, further honing my crisis management and IT solution deployment skills to address evolving challenges. With a 
         wealth of diverse and specialized experiences, I am well-equipped to excel in various roles within the fields of Information Technology and Project Management.
      </Text>

      <Skills />
    </Flex>
  );
}
