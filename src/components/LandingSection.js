import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Jim!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    
    <VStack spacing={4} align="center">
      <Avatar size="3xl" src="https://blackhillshomesales.com/wp-content/uploads/2013/08/jim-whittaker-platinum-cropped-161x204-1.jpg" />
      <Heading as='h1' size="2x1" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio2}
      </Heading>
  </VStack>
    
  </FullScreenSection>
);

export default LandingSection;

