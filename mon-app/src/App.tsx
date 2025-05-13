// import { useState } from "react";
import { Layout } from "./ui/layout/Layout.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({ cssVariables: true });

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Neuille Fort</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
