import type { ReactNode } from "react";

export interface PageLayoutProps {
  title: string;
  isLoading?: boolean;
  hasError?: boolean;
  children: ReactNode;
}
