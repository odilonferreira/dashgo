import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiContactsFill, RiDashboard2Line } from "react-icons/ri";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <>
      <Link display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontSize="medium">
          {children}
        </Text>
      </Link>
    </>
  );
}
