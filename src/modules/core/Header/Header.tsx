import React from "react";
import { Box, Text } from "grommet";
import { UserPopup } from "components/elements/UserPopup";
import userLogo from "assets/userLogo.jpg";
import {
  MessageIcon,
  NotificationIcon,
  BurgerMenuIcon,
} from "components/icons";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader justify="center">
      <Box align="center" justify="between" direction="row">
        <Box align="center">
          <BurgerMenuIcon size="18px" color="textPrimary" />
        </Box>

        <Box justify="center" margin={{ left: "auto" }}>
          <Box
            direction="row"
            margin={{ horizontal: "spacing40" }}
            gap="spacing40"
            align="center"
          >
            <Box>
              <NotificationIcon />
            </Box>
            <Box>
              <MessageIcon />
            </Box>
          </Box>
        </Box>

        <UserPopup userName="Тарас Цуприк" userLogo={userLogo} userLevel="1" />
      </Box>
    </StyledHeader>
  );
};

export default Header;
