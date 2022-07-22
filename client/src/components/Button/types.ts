import type { ReactNode } from "react";

export interface ButtonProps {
  type?: "primary" | "secondary";
  onClick: () => void;
  children: ReactNode;
}
