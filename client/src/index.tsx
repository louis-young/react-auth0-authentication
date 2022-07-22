import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApplicationProviders } from "./components/ApplicationProviders";
import { Application } from "./components/Application";
import "./styles/index.css";

const container = document.getElementById("root")!;

const root = createRoot(container);

root.render(
  <StrictMode>
    <ApplicationProviders>
      <Application />
    </ApplicationProviders>
  </StrictMode>,
);
