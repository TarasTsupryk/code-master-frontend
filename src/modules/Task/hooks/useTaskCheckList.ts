import { useMemo } from "react";
import { CheckItem } from "common/types";

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
        title: "При отриманому значені 5 функція повинна повертутви значення 152",
        isChecked: true,
      },
      {
        title: "При отриманому значені 16 функція повинна повертутви значення 1538",
        isChecked: true,
      },
      {
        title: "При отриманому значені 23 функція повинна повертутви значення 3176",
        isChecked: true,
      },
    ],
    []
  );

  return taskCheckList;
};

export default useTaskCheckList;
