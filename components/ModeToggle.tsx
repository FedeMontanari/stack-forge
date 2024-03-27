"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      )}
    </>
  );
}
