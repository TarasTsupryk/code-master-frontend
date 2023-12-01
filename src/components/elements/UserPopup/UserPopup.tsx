import React, { useState, useCallback } from "react";
import { Box, Text } from "grommet";
import { UserLogo } from "./UserPopup.styles";

interface Props {
  userLogo?: string;
  userName?: string;
  userLevel?: string;
}

const UserPopup: React.FC<Props> = ({ userLogo, userName, userLevel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Box direction="row" align="center" onClick={handleOpen}>
      <UserLogo
        src={userLogo}
        alt="user-logo"
      />
      <Box margin={{ left: 'spacing16' }}>
        <Text
          size="medium"
          color="text"
        >
          {userName}
        </Text>
        <Text
          color="textSecondary"
          size="xsmall"
        >
          Level - {userLevel}
        </Text>
      </Box>
    </Box>
  );
};

export default UserPopup;
