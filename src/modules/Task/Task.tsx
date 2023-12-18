import React from "react";
import { Box, Text } from "grommet";
import { Editor } from "components/controls/Editor";
import { CheckList } from "components/elements/CheckList";
import useTaskCheckList from "./hooks/useTaskCheckList";

const Task = () => {
  const taskCheckList = useTaskCheckList();
  return (
    <Box direction="row" align="start">
      <Box width="100%" round="spacing12" background="white" pad="spacing32">
        <Text size="20px" weight={700}>
          Задача 13. Порахуйте кількість кубиків із фарбою
        </Text>
        <Text size="small" margin={{ top: "spacing20" }}>
          Напишіть код рішення задачі у редакторі коду знизу, для запуску коду
          натисніть на кнопку “Запуск”, для перевірки завдання натисніть на
          кнопку “Перевірка”, для перегляду опису задачі{" "}
          <Text size="small" weight={700} color="primary">
            натисніть сюди
          </Text>
        </Text>
        <Box margin={{ top: "spacing24" }}>
          <Editor />
        </Box>
        <Text size="medium" weight={700} margin={{ top: "spacing32" }}>
          Результат запуску
        </Text>
        <Box
          margin={{ top: "spacing24" }}
          pad="18px"
          background="grayShade"
          round="16px"
        >
          <Text size="14px">Запуску не відбувалось</Text>
        </Box>
      </Box>
      <Box
        margin={{ left: "30px" }}
        round="spacing12"
        background="white"
        pad="30px"
        width={{ width: "100%", max: "314px" }}
      >
        <CheckList title="Умови виконання задачі" items={taskCheckList} />
      </Box>
    </Box>
  );
};

export default Task;
