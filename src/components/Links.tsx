import * as React from "react";
import { Box, Link } from "@chakra-ui/react";

interface ILinks {
  links: any[];
}
export const Links = ({ links }: ILinks) => {
  return (
    <Box textAlign="left" width="100%">
      Links
    </Box>
  );
};
