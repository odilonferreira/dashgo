import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { RiContactsFill, RiDashboard2Line } from "react-icons/ri";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontSize="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
