import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import App from "./App";

const params = {
  styles: {
    global: {
      "html, body": {
        fontFamily: "Inter, sans-serif",
        bg: "#edf3f8",
        //color: "gray.200",
        h: "full",
      },
      "#root": {
        alignItems: "center",
        display: "flex",
        h: "full",
      },
    },
  },
  breakpoints: createBreakpoints({
    xs: "30em",
    sm: "36em",
    md: "46.25em",
    lg: "62.5em",
    xl: "78.125em",
    xxl: "95em",
  }),
  colors: {
    base: {
      50: "#eceff1",
      100: "#cfd8dc",
      200: "#b0bec5",
      300: "#90a4ae",
      400: "#78909c",
      500: "#607d8b",
      600: "#546e7a",
      700: "#455a64",
      800: "#37474f",
      900: "#263238",
      d100: "#171F23",
      d200: "#12181B",
      d400: "#0D1214",
      d700: "#080C0D",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
        fontWeight: "normal",
        color: "inherit",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "inherit",
        fontWeight: "normal",
        lineHeight: "tall",
        color: "inherit",
      },
    },
    Button: {
      baseStyle: {
        textTransform: "uppercase",
        letterSpacing: "widest",
        fontWeight: "normal",
        userSelect: "none",
      },
    },
  },
};

const theme = extendTheme(params);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
