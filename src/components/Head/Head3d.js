import { useLayoutEffect, useRef, useState } from "react";
import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import SocialLinks from "./SocialLinks";
import gsap from "gsap";
import Loading from "./Loading";

export default function Head() {
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = () => {
    setIsLoading(false);
  };

  const container = useRef(null);
  useLayoutEffect(() => {
    if (isLoading) return;
    let ctx = gsap.context(() => {
      gsap.from(".header-logo", {
        duration: 1.5,
        x: "-100%",
        delay: 0.5,
      });

      gsap.from(".social-icon", {
        duration: 1.5,
        y: "100%",
        opacity: 0,
        delay: 0.5,
      });
    }, container);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <Box id="head" position={"relative"} ref={container}>
      {!isLoading && (
        <>
          <HStack
            position={"absolute"}
            paddingX={"30px"}
            paddingY={"15px"}
            className="header-logo"
          >
            <Image
              src="header-logo.png"
              qalt="logo"
              w={{ base: "60px", md: "70px" }}
            />
            <VStack
              gap={"0px"}
              className="raleway"
              fontSize={"18px"}
              color={"white"}
              fontWeight={"semibold"}
            ></VStack>
          </HStack>
          <SocialLinks />
        </>
      )}
      {isLoading && <Loading />}
      <Spline
        onLoad={onLoad}
        style={{
          height: "100vh",
        }}
        scene={"splinefile.spline"}
      />
    </Box>
  );
}
