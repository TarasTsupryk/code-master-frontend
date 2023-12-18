import React from "react";
import { Box, Text } from "grommet";
import { CheckItem } from "common/types";
import styled from "styled-components";
import { CheckIcon, CrossIcon } from "components/icons";

const ItemNumber = styled(Box)`
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryShade};
  min-width: 36px;
  min-height: 36px;
  max-width: 36px;
  max-height: 36px;
`;

interface Props {
  title?: string;
  items?: CheckItem[];
}

const CheckList: React.FC<Props> = ({ title, items }) => {
  return (
    <Box>
      {title && (
        <Text size="large" weight={700}>
          {title}
        </Text>
      )}
      {items && (
        <Box margin={{ top: "spacing12" }}>
          {items?.map((item, index) => (
            <Box direction="row" margin={{ top: "spacing12" }}>
              <ItemNumber>
                <Text size="small">{`C${index + 1}`}</Text>
              </ItemNumber>
              <Box margin={{ left: "spacing16" }} width="100%">
                <Text size="small">{item.title}</Text>
              </Box>
              <Box width={{ min: "spacing24" }} margin={{ left: "18px" }}>
                {typeof item?.isChecked === "boolean" && (
                  <>
                    {item.isChecked ? (
                      <CheckIcon color="success" />
                    ) : (
                      <CrossIcon color="error" />
                    )}
                  </>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CheckList;
