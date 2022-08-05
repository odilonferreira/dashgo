import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsFill,
  RiDashboard2Line,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" marginTop="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboard2Line} fontSize="20"></Icon>
              <Text ml="4" fontSize="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsFill} fontSize="20"></Icon>
              <Text ml="4" fontSize="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" marginTop="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20"></Icon>
              <Text ml="4" fontSize="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20"></Icon>
              <Text ml="4" fontSize="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
