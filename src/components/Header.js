import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faFacebook,
    size: "2x",
    url: "https://www.facebook.com",
  },
  {
    icon: faGithub,
    size: "2x",
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    size: "2x",
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    size: "2x",
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    size: "2x",
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 200) { // also added a threshold
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => (e) => {
  };

  return (
    <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    transform={`translateY(${isScrollingDown ? "-200px" : "0"})`}
    transitionProperty="transform"
    transitionDuration=".3s"
    transitionTimingFunction="ease-in-out"
    backgroundColor="#18181b"
  >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section" onClick={handleClick("projects-section")}>
                Projects
              </a>
              <a href="/#contactme-section" onClick={handleClick("contactme-section")}>
              Contact Me 
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
