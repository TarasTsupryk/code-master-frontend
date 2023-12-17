import React from "react";
import { PageWrapper } from "components/wrappers/PageWrapper";
import { Task } from "modules/Task";
import { Box, Text } from "grommet";
import { ChevronIcon } from "components/icons";

const TaskPage = () => {
  return (
    <PageWrapper>
      <Box direction="row" align="center">
        <Text color="textSecondary" weight={700}>Курси</Text>
        <Box margin={{ horizontal: 'spacing8' }}><ChevronIcon size="spacing16" /></Box>
        <Text color="textSecondary" weight={700}>Python. Основи програмування мовою.</Text>
        <Box margin={{ horizontal: 'spacing8' }}><ChevronIcon size="spacing16" /></Box>
        <Text color="textSecondary" weight={700}>Лекція 4. Функції з Python</Text>
        <Box margin={{ horizontal: 'spacing8' }}><ChevronIcon size="spacing16" /></Box>
        <Text color="textPrimary" weight={700}>Задача 13. Порахуйте кількість кубиків із фарбою</Text>
      </Box>
      <Box margin={{ top: "spacing28" }}>
        <Task />
      </Box>
    </PageWrapper>
  );
};

export default TaskPage;
