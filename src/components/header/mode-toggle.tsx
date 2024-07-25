import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const themes = ["light", "dark", "system"] as const;
type Theme = (typeof themes)[number];

const icons = {
  light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
  dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
  system: <Monitor className="h-[1.2rem] w-[1.2rem]" />,
};

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    const currentIndex = themes.indexOf(theme as Theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <Button variant="outline" size="icon" onClick={nextTheme}>
      {icons[theme as Theme] || <Monitor className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
