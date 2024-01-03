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
         - (years.second) old Highly accomplished IT Professional with 24 years of technical, managerial,
        and research experience. Proven track record in project management, customer support,
        and process improvement. Adept at analyzing complex situations, driving productivity,
        and implementing strategic IT solutions. Strong leadership and communication skills,
        known for developing and leading high-performing teams. Seeking to leverage expertise as an IT Manager.      </Text>

      <Skills />
    </Flex>
  );
}
