import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal"></Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%"></SimpleGrid>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
