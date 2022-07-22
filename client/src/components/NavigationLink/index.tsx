import classNames from "classnames";
import { NavLink } from "react-router-dom";
import type { NavigationLinkProps } from "./types";

export const NavigationLink = ({ label, link }: NavigationLinkProps) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        classNames({
          "block text-gray-900 p-2": true,
          "font-bold": isActive,
        })
      }
    >
      {label}
    </NavLink>
  );
};
