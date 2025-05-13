// src/ui/layout/Layout.tsx
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Layout.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h4">Contactez MOIIII!</Typography>
        </Toolbar>
      </AppBar>

      <main>{children}</main>

      <footer>
        <p>
          &copy; Kontact {new Date().getFullYear()} - Your contacts management
          application
        </p>
      </footer>
    </>
  );
};
