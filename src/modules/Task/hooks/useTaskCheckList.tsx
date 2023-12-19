import React, { useMemo } from "react";
import { CheckItem } from "common/types";
import { Text } from "grommet";
import { Status } from 'common/types';

const useTaskCheckList = (status: string) => {
  const taskCheckList: CheckItem[] = useMemo(
    () => [
      {
        title: "Оголосити функцію count_squares",
        ...!status.length ? {} : { isChecked: status.length > 1 },
      },
      {
        title: "Функція повинна приймати значення типу number",
        ...!status.length ? {} : { isChecked: status.length > 1 },
      },
      {
        title: "Функція повинна повертати значення типу number",
        ...!status.length ? {} : { isChecked: status.length > 1 },
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
        ...!status.length ? {} : { isChecked: status.length > 20 },
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
        ...!status.length ? {} : { isChecked: status.length > 20 },
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
        ...!status.length ? {} : { isChecked: status.length > 20 },
      },
    ],
    [status]
  );

  return taskCheckList;
};

export default useTaskCheckList;
