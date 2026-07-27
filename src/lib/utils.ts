import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Tailwind-merge has no awareness of this project's custom `@theme` font-size
// scale (text-h1, text-body-lg, etc.) — without registering them, it treats
// them as unrecognized "text-*" utilities and silently drops them whenever
// combined with a text-color class (e.g. cn("text-h1 text-muted-foreground")
// merges down to just "text-muted-foreground"). Registering the scale here
// fixes every current and future call site at once.
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display-xl",
        "text-display-l",
        "text-h1",
        "text-h2",
        "text-h3",
        "text-body-lg",
        "text-body",
        "text-body-sm",
        "text-caption",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
