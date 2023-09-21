import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme.js";

import { Details } from "./pages/Details/Details.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
