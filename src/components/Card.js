import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={0}
      p={0}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      backgroundColor="white"
      color="black"
      align="stretch"
    >
      <Image
        borderRadius="md"
        width="100%"
        src={imageSrc}
        alt={title}
        objectFit="cover"
      />
      <Box p={2}>
        <Box pl={5} pr={5} pb={5}>
          <Heading size="md" pb={5}>{title}</Heading>
          <Text>{description}</Text>
        </Box>
        <HStack spacing={4} pl={5} pr={5} pb={5}>
          <Text>Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
