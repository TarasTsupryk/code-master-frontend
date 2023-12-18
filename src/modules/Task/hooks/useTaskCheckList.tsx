import React, { useMemo } from "react";
import { CheckItem } from "common/types";
import { Text } from "grommet";

const useTaskCheckList = () => {
  const taskCheckList: CheckItem[] = useMemo(
    () => [
      {
        title: "Оголосити функцію count_squares",
        isChecked: true,
      },
      {
        title: "Функція повинна приймати значення типу number",
        isChecked: true,
      },
      {
        title: "Функція повинна повертати значення типу number",
        isChecked: true,
      },
      {
        title: (
          <Text size="small">
            При отриманому значені{" "}
            <Text weight={500} color="secondary" size="small">
              5
            </Text>{" "}
            функція повинна повертати значення 152
          </Text>
        ),
        isChecked: true,
      },
      {
        title: (
          <Text size="small">
            При отриманому значені{" "}
            <Text weight={500} color="secondary" size="small">
              16
            </Text>{" "}
            функція повинна повертутви значення{" "}
            <Text weight={500} color="secondary" size="small">
              1538
            </Text>
          </Text>
        ),
        isChecked: false,
      },
      {
        title: (
          <Text size="small">
            При отриманому значені{" "}
            <Text weight={500} color="secondary" size="small">
              23
            </Text>{" "}
            функція повинна повертутви значення{" "}
            <Text weight={500} color="secondary" size="small">
              3176
            </Text>
          </Text>
        ),
        // isChecked: false,
      },
    ],
    []
  );

  return taskCheckList;
};

export default useTaskCheckList;
