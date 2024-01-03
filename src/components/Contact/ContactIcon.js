import { Center, Icon, Link } from "@chakra-ui/react";

export default function ContactIcon({ icon, class_, link }) {
  return (
    <Link href={link} isExternal>
      <Center
        className={class_}
        border={"5px solid white"}
        padding={"8px"}
        rounded={"full"}
        transform={{ base: "scale(.8)", md: "scale(1)" }}
        _hover={{
          color: "#0075F2",
          bg: "white",
        }}
      >
        <Icon as={icon} boxSize={{ base: "10", md: "8" }} />
      </Center>
    </Link>
  );
}
