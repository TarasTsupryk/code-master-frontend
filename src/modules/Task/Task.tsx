import React from "react";
import { Box } from "grommet";
import { Editor } from "components/controls/Editor";
import { CheckList } from "components/elements/CheckList";
import useTaskCheckList from "./hooks/useTaskCheckList";

const Task = () => {
  const taskCheckList = useTaskCheckList();
  return (
    <Box direction="row">
      <Box width="100%">
        <Editor />
      </Box>
      <Box
        margin={{ left: "30px" }}
        round="spacing12"
        background="white"
        pad="spacing32"
        width={{ width: "100%", max: "320px" }}
      >
        <CheckList title="Умови виконання задачі" items={taskCheckList} />
      </Box>
    </Box>
  );
};

export default Task;
