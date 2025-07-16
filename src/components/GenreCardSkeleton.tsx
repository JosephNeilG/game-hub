import {
  HStack,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <>
      <ListItem paddingY="5px">
        <HStack>
          <SkeletonCircle boxSize="32px" borderRadius={8} />
          <SkeletonText noOfLines={1} width="40%" />
        </HStack>
      </ListItem>
    </>
  );
};

export default GenreCardSkeleton;
