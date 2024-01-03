import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import ContactIcon from "./ContactIcon";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import socials from "../../links";

export default function Contact() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const defaults = {
        start: "top 90%",
        delay: 0.3,
        duration: 1,
        opacity: 0,
        toggleActions: "play none none none",
      };

      gsap.from(".email-contact", {
        scrollTrigger: {
          trigger: ".email-contact",
          start: defaults.start,
          toggleActions: defaults.toggleActions,
          once: true,
        },
        delay: defaults.delay,
        duration: defaults.duration,
        opacity: defaults.opacity,
      });

      gsap.from(".github-contact", {
        scrollTrigger: {
          trigger: ".github-contact",
          start: defaults.start,
          toggleActions: defaults.toggleActions,
          once: true,
        },
        delay: defaults.delay,
        x: "-70px",
        duration: defaults.duration,
        opacity: defaults.opacity,
      });

      gsap.from(".linkedin-contact", {
        scrollTrigger: {
          trigger: ".linkedin-contact",
          start: defaults.start,
          toggleActions: defaults.toggleActions,
          once: true,
        },
        delay: defaults.delay,
        duration: defaults.duration,
        x: "70px",
        opacity: defaults.opacity,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <VStack
      id="contact"
      ref={container}
      bg={"#0075F2"}
      borderTop={"75px solid #0075F2"}
      clipPath={"polygon(0 0,100% 90px, 100% 100%,0 100%)"}
      color={"white"}
      py={"30px"}
      gap={"30px"}
    >
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Contact
      </Text>

      <HStack gap={{ base: "0px", md: "8px" }}>
        <ContactIcon
          class_="github-contact"
          icon={FiGithub}
          link={socials.github}
        />
        <ContactIcon
          class_="email-contact"
          icon={MdEmail}
          link={socials.email}
        />
        <ContactIcon
          class_="linkedin-contact"
          icon={FaLinkedinIn}
          link={socials.linkedin}
        />
      </HStack>

      <Link href={socials.resume} isExternal>
        <Button
          variant={"outline"}
          color={"white"}
          colorScheme="whiteAlpha"
          className="raleway"
          rightIcon={<ExternalLinkIcon />}
        >
          View Resume
        </Button>
      </Link>

      <Text
        borderBottom={"2px solid white"}
        padding={"2px"}
        className="raleway"
        fontSize={{ base: "12px", lg: "16px" }}
      >
        Images taken from&nbsp;
        <Link isExternal href="https://icons8.com/">
          Icons8
        </Link>
        ,&nbsp;
        <Link isExternal href="https://flaticon.com">
          Flaticon
        </Link>
        &nbsp;and&nbsp;
        <Link isExternal href="https://pexels.com">
          Pexels
        </Link>
      </Text>

      <Text
        className="raleway"
        fontSize={{ base: "12px", md: "16px", lg: "18px" }}
        fontWeight={"semibold"}
      >
        Copyright © 2023 Created by Rifan N. A / Sami
      </Text>
    </VStack>
  );
}
