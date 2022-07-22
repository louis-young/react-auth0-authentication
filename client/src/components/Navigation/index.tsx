import { pagePaths } from "../../constants/pages/paths";
import { NavigationLink } from "../NavigationLink";

export const Navigation = () => {
  const links = [
    { label: "Home", link: pagePaths.homePage },
    { label: "Test", link: "/test" },
  ];

  return (
    <nav>
      <ul className="flex gap-8 items-center">
        {links.map(({ label, link }) => (
          <li key={link}>
            <NavigationLink label={label} link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
