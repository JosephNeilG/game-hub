import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!isExpanded)}
        colorScheme="yellow"
        size="xs"
        fontWeight="bold"
        marginLeft={1}
      >
        {isExpanded ? "Show Less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
