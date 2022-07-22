import classNames from "classnames";
import type { SpacerProps } from "./types";

export const Spacer = ({ size = "medium" }: SpacerProps) => {
  return (
    <div
      className={classNames({
        "h-2": size === "small",
        "h-3": size === "medium",
        "h-6": size === "large",
      })}
    />
  );
};
