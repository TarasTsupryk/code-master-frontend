import React from "react";
import { Box, Text } from "grommet";
import { UserPopup } from "components/elements/UserPopup";
import userLogo from "assets/userLogo.jpg";
import {
  MessageIcon,
  NotificationIcon,
  BurgerMenuIcon,
  SearchIcon,
  PlusIcon,
} from "components/icons";
import { Button } from "components/elements/Button";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader justify="center">
      <Box align="center" justify="between" direction="row">
        <Box align="center" direction="row">
          <BurgerMenuIcon size="18px" color="textPrimary" />
          <Box margin={{ left: "50px" }}>
            <SearchIcon color="grayShade2" />
          </Box>
          <Text color="grayShade2" margin={{ left: "spacing12" }}>
            Пошук
          </Text>
        </Box>

        <Box justify="center" margin={{ left: "auto" }} direction="row">
          <Button style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <Box margin={{ right: "spacing8" }}>
              <PlusIcon size="12px" />
            </Box>
            <Text size="xsmall">Створити курс</Text>
          </Button>
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
