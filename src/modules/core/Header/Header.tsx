import React from "react";
import { Box, Text } from "grommet";
import { UserPopup } from "components/elements/UserPopup";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader justify="center">
      <Box justify="between" direction="row">
        <Box>search</Box>

        <Box justify="center" margin={{ left: "auto" }}>
          <Box
            direction="row"
            margin={{ horizontal: "spacing40" }}
            gap="spacing40"
          >
            <Box>M</Box>
            <Box>N</Box>
          </Box>
        </Box>

        <UserPopup
          userName="Taras"
          userLogo="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
          userLevel="9"
        />
      </Box>
    </StyledHeader>
  );
};

export default Header;
