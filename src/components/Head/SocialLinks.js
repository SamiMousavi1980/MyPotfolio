import { Center, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import socials from "../../links";

import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoLinkedin, BiSolidUserDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function SocialLinks() {
  return (
    <HStack position={"absolute"} top={"30px"} left={"10px"} width={"100%"}>
      <Flex direction={"column"} gap={"10px"} padding={"5px"} rounded={"md"}>
        <SocialIcon
          link={socials.github}
          name={"Github"}
          icn={TbBrandGithubFilled}
        />
        <SocialIcon
          link={socials.linkedin}
          name={"Linkedin"}
          icn={BiLogoLinkedin}
        />
        <SocialIcon link={socials.email} name={"Email"} icn={MdEmail} />
        <SocialIcon
          link={socials.resume}
          name={"Resume"}
          icn={BiSolidUserDetail}
        />
      </Flex>
    </HStack>
  );
}

function SocialIcon({ link, icn, name }) {
  const [showName, setShowName] = useState(false);

  return (
    <Link
      href={link}
      color={"gray.700"}
      isExternal
      pos={"relative"}
      onMouseOver={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <Center
        padding={"4px"}
        border={"6px solid #2D3748"}
        rounded={"full"}
        className="social-icon"
      >
        <Icon as={icn} boxSize={{ base: "6", md: "8" }} />
      </Center>
      <Text
        fontSize={"15px"}
        top={"20%"}
        pos={"absolute"}
        left={"60px"}
        visibility={showName ? "visible" : "hidden"}
      >
        {name}
      </Text>
    </Link>
  );
}
