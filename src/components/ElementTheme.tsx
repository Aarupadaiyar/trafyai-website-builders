import type { ReactNode } from "react";
import type { ElementTheme as ElementThemeName } from "@/data/content/services";

export function ElementTheme({
  element,
  children,
}: {
  element: ElementThemeName;
  children: ReactNode;
}) {
  return (
    <div data-theme={element} className="bg-background">
      {children}
    </div>
  );
}
