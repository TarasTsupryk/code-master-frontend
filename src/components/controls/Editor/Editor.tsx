import React, { useState, useCallback, CSSProperties } from "react";
import { Box, Text } from "grommet";
import Editor from "@monaco-editor/react";
import ClipLoader from "react-spinners/ClipLoader";
import { PlayIcon, AskIcon, CrossIcon } from "components/icons";
import { Button } from "components/elements/Button";
import { Status } from 'common/types';
import { ActionBtn, FileBtn, SuccessPopupWrapper } from "./Editor.styles";

const override: CSSProperties = {
  margin: "0 auto",
};

interface Props {
  onSetStatus: (value: string) => void;
}

const Editor2: React.FC<Props> = ({ onSetStatus }) => {
  const [codeValue, setCodeValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeValue = useCallback((code?: string) => {
    if (code) {
      setCodeValue(code);
    }
  }, []);

  const handleOnCheckCode = useCallback(() => {
    setIsError(false);
    onSetStatus('');
    setIsLoading(true);

    if (codeValue.length < 20) {
      setTimeout(() => {
        setIsError(true);
        onSetStatus(codeValue);
        setIsSuccess(false);
        setIsLoading(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setIsError(false);
        onSetStatus(codeValue);
        setIsSuccess(true);
        setIsLoading(false);
      }, 5000);
    }
  }, [codeValue, onSetStatus]);

  return (
    <Box>
      <Box>
        <Box direction="row">
          <ActionBtn pad="spacing8" background="primary">
            <PlayIcon color="white" />
            <Text margin={{ left: "spacing8" }} size="xsmall">
              Запуск
            </Text>
          </ActionBtn>
          <ActionBtn
            margin={{ left: "spacing24" }}
            pad="spacing8"
            background="secondary"
            onClick={handleOnCheckCode}
          >
            {isLoading ? (
              <Box width="92px" height={{ max: "24px" }}>
                <ClipLoader color="white" cssOverride={override} size={22} />
              </Box>
            ) : (
              <>
                <AskIcon color="white" />
                <Text margin={{ left: "spacing8" }} size="xsmall">
                  Перевірка
                </Text>
              </>
            )}
          </ActionBtn>
        </Box>

        <Box
          direction="row"
          margin={{ top: "spacing24" }}
          pad={{ horizontal: "spacing24" }}
        >
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

      {isSuccess && (
        <SuccessPopupWrapper>
          <Box
            style={{ position: "relative" }}
            width="500px"
            round="spacing12"
            background="white"
            pad="30px"
          >
            <Box style={{ position: "absolute", right: 30, top: 20 }}>
              <CrossIcon color="error" />
            </Box>
            <Text size="22px" weight={700} textAlign="center">
              Вітаємо!
            </Text>
            <Text size="14px" margin={{ top: "spacing16" }} textAlign="center">
              Ви успішно виконали практичне завдання!
            </Text>
            <Box
              margin={{ top: "spacing24" }}
              pad="30px"
              background="grayShade"
              round="16px"
            >
              <Text size="xsmall" color="textSecondary">
                Лекція 4
              </Text>
              <Text size="14px" margin={{ top: "spacing8" }} weight={700}>
                Задача 13. Порахуйте кількість кубиків із фарбою
              </Text>
              <Box
                round="10px"
                margin={{ top: "20px" }}
                height="4px"
                background="secondaryShade"
              >
                <Box
                  round="10px"
                  height="4px"
                  width="50%"
                  background="secondary"
                ></Box>
              </Box>

              <Text size="xsmall" margin={{ top: "spacing8" }}>
                1 завершене завдання з 2 доступних
              </Text>
            </Box>
            <Box align="center" margin={{ top: "30px" }}>
              <Button style={{ padding: "12px 30px" }}>
                <Text size="14px">Відкрити наступне завдання</Text>
              </Button>
            </Box>
          </Box>
        </SuccessPopupWrapper>
      )}
      {isError && (
        <Box
          background="error"
          round="8px"
          pad="spacing12"
          direction="row"
          align="center"
          style={{ position: "absolute", bottom: "30px", left: "30px" }}
        >
          <Text size="13px" color="white" margin={{ right: "20px" }}>
            Не виконані всі умови
          </Text>
          <CrossIcon style={{ cursor: "pointer" }} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default Editor2;
