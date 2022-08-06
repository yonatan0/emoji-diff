import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import GameProvider from "./common/context";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement){
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);
}