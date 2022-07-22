import { Link } from "react-router-dom";
import type { HyperlinkProps } from "./types";

export const Hyperlink = ({ link, children }: HyperlinkProps) => {
  return (
    <Link
      to={link}
      className="underline underline-offset-1 transition-opacity hover:opacity-80"
    >
      {children}
    </Link>
  );
};
