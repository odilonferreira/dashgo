import {
  Flex,
  Icon,
  Input,
  Text,
  Stack,
  HStack,
  Box,
  Avatar,
} from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      marginTop="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" marginLeft="auto">
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine}></Icon>
          <Icon as={RiUserAddLine}></Icon>
        </HStack>
        <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text>Odilon Ferreira</Text>
            <Text color="gray.300" fontSize="small">
              odilon.aferreira@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Odilon Ferreira" />
        </Flex>
      </Flex>
    </Flex>
  );
}
