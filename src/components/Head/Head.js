import { HStack, Text, VStack } from "@chakra-ui/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import SocialLinks from "./SocialLinks";

export default function Head() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".right", {
        x: "100%",
        duration: 1.5,
        delay: 0.5,
      });
      gsap.from(".social-icon", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        scale: 0,
        stagger: 0.2,
      });
      gsap.from(".left-name", {
        opacity: 0,
        x: "300px",
        duration: 2,
        delay: 2,
      });
      gsap.from(".right-name", {
        opacity: 0,
        rotate: "90",
        duration: 2,
        x: "300px",
        delay: 2,
      });
      gsap.from(".left-role", {
        opacity: 0,
        delay: 4,
      });
      gsap.from(".right-role", {
        opacity: 0,
        delay: 4,
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <HStack
      id="head"
      bg={"gray.100"}
      ref={container}
      h="100vh"
      w="100%"
      gap={"0px"}
      overflow={"hidden"}
      position={"relative"}
      className="space"
      color={"white"}
      fontSize={{ base: "60px", md: "100px" }}
      fontWeight={"bold"}
    >
      <VStack
        align={"flex-end"}
        justify={"center"}
        w={"100%"}
        className="left"
        h={"100%"}
        bg={"gray.100"}
        color={"gray.700"}
      >
        <Text className="left-name">Sami.</Text>
        <Text className="left-role" fontSize={{ base: "20", md: "30px" }}>
          Developer
        </Text>
      </VStack>

      <VStack
        align={"flex-start"}
        justify={"center"}
        w={"100%"}
        className="right"
        paddingY={"40px"}
        roundedLeft={"md"}
        bg={"gray.700"}
        color={"gray.100"}
        boxShadow={"dark-lg"}
      >
        <Text className="right-name">S.Mousavi</Text>
        <Text className="right-role" fontSize={{ base: "20", md: "30px" }}>
          &Manager
        </Text>
      </VStack>

      <HStack position={"absolute"}></HStack>
      <SocialLinks />
    </HStack>
  );
}
