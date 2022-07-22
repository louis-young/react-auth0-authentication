import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { pagePaths } from "../../constants/pages/paths";
import { HomePage } from "../../pages/HomePage";
import { ProfilePage } from "../../pages/ProfilePage";
import { TestPage } from "../../pages/TestPage";
import { ProtectedRoutes } from "../ProtectedRoutes";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={pagePaths.homePage} element={<HomePage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path={pagePaths.profilePage} element={<ProfilePage />} />
        <Route path={pagePaths.testPage} element={<TestPage />} />
      </Route>
    </ReactRouterRoutes>
  );
};
