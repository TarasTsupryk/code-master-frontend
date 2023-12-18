import React, { useState, useCallback } from "react";
import { Box, Text } from "grommet";
import Editor from "@monaco-editor/react";
import { PlayIcon, AskIcon } from "components/icons";
import { ActionBtn, FileBtn } from './Editor.styles';

const Editor2 = () => {
  const [codeValue, setCodeValue] = useState("");

  const handleChangeValue = useCallback((code?: string) => {
    if (code) {
      setCodeValue(code);
    }
  }, []);

  console.log(codeValue);

  return (
    <Box>
      <Box>
        <Box direction="row">
          <ActionBtn pad="spacing8" background="primary">
            <PlayIcon color="white" />
            <Text margin={{ left: "spacing8" }} size="xsmall">Запуск</Text>
          </ActionBtn>
          <ActionBtn
            margin={{ left: "spacing24" }}
            pad="spacing8"
            background="secondary"
          >
            <AskIcon color="white" />
            <Text margin={{ left: "spacing8" }} size="xsmall">Перевірка</Text>
          </ActionBtn>
        </Box>

        <Box direction="row" margin={{ top: 'spacing24' }} pad={{ horizontal: "spacing24" }}>
          <FileBtn>main.py</FileBtn>
        </Box>

        <Box
          round="spacing12"
          style={{ overflow: "hidden" }}
          border={{ color: "textSecondary", size: "1px" }}
        >
          <Editor
            height="400px"
            language="python"
            onChange={handleChangeValue}
            theme="vs-dark"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Editor2;
