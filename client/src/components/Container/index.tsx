import React from "react";
import type { ContainerProps } from "./types";

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};
