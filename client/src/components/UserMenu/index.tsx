import { useRef, useState } from "react";
import classNames from "classnames";
import { useOutsideClick } from "rooks";
import { pagePaths } from "../../constants/pages/paths";
import { Button } from "../Button";
import { Spacer } from "../Spacer";
import { Hyperlink } from "../Hyperlink";
import type { UserMenuProps } from "./types";

export const UserMenu = ({
  profilePictureUrl,
  emailAddress,
  onLogOutButtonClick,
}: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleButtonClick = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  useOutsideClick(menuRef, () => setIsOpen(false));

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={handleToggleButtonClick}
        className={classNames({
          "block w-14 h-14 transition-opacity hover:opacity-80": true,
          "opacity-80": isOpen,
        })}
      >
        <img
          src={profilePictureUrl}
          alt={emailAddress}
          className="rounded-full"
        />
      </button>

      {isOpen && (
        <ul className="absolute top-100 left-0 mt-2 bg-white border-gray-200 border p-4 rounded-sm">
          <li className="leading-none">{emailAddress}</li>

          <li>
            <Spacer size="small" />

            <Hyperlink link={pagePaths.profilePage}>View Profile</Hyperlink>
          </li>

          <li>
            <Spacer size="medium" />

            <Button type="secondary" onClick={onLogOutButtonClick}>
              Log Out
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};
