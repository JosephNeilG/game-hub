import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

/** Dropdown component that lets user select a platfor. */
const PlatformSelector = () => {
  // fetch all platforms
  const { data, error } = usePlatforms();

  // update selected platform id in store
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  // get currently selected platform id from store
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  // get platform data from ID
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
