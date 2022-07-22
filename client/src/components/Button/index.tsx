import classNames from "classnames";
import type { ButtonProps } from "./types";

export const Button = ({
  type = "primary",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        "py-3 px-12 whitespace-nowrap transition-opacity hover:opacity-80":
          true,
        "bg-blue-700 text-white": type === "primary",
        "bg-gray-700 text-white": type === "secondary",
      })}
    >
      {children}
    </button>
  );
};
