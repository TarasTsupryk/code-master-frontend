import React from "react";

export interface CheckItem {
  title: React.ReactNode;
  isChecked?: boolean;
}

export enum Status {
  empty = "empty",
  error = "error",
  success = "success",
}
