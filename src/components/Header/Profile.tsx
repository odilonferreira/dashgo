import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Odilon Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            odilon.aferreira@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Odilon Ferreira" />
    </Flex>
  );
}
