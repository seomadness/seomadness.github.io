import { createContext, useContext, useEffect, useState } from "react";
import { PaletteMode } from "@mui/material";

type themeContext = [
  PaletteMode | undefined,
  React.Dispatch<React.SetStateAction<PaletteMode | undefined>>
];

const ThemeContext = createContext<themeContext>(["light", () => null]);

export default function ThemeContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeMode, setThemeMode] = useState<PaletteMode>();

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setThemeMode("dark");
    } else if (localStorage.getItem("theme") === "light") {
      setThemeMode("light");
    } else {
      // use the system theme by default
      setThemeMode("light");
    }
  }, []);

  // toggle the theme function
  function handleThemeMode() {
    if (themeMode === "dark") {
      localStorage.setItem("theme", "light");
      setThemeMode("light");
    } else {
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    }
  }

  return (
    <ThemeContext.Provider value={[themeMode, handleThemeMode]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeContext);
}
