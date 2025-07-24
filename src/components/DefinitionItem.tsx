import { Box, Heading } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box paddingY={5}>
      <Heading as="dt" color="gray.600" fontSize="md">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
