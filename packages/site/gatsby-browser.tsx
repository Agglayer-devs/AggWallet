// packages/site/gatsby-browser.tsx
import React from "react";
import App from "./src/App";

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};