import React from "react";
import { Box, Text } from "grommet";
import { CodeIcon } from "components/icons";

const SidebarHeader = () => (
  <Box>
    <Box pad="spacing16" margin={{ vertical: 'spacing24' }} direction="row" align="center">
      <CodeIcon color="white" size="spacing36" />
      <Box margin={{ left: "spacing8" }}>
        <Text color="white" weight="bold" size="28px">
          CodeMaster
        </Text>
      </Box>
    </Box>
  </Box>
);

export default SidebarHeader;
