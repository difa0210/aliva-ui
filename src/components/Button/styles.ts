// components/Button/styles.ts

import { Size, Rounded, Color } from "../../types/ui";

export type VariantButton = "solid" | "outline" | "ghost";

export const buttonSizes: Record<Size, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const buttonRounded: Record<Rounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const buttonVariants: Record<VariantButton, Record<Color, string>> = {
  solid: {
    primary:
      "bg-primary-500 text-secondary-500 border border-primary-500 hover:bg-primary-700 dark:bg-primary-800 dark:hover:bg-primary-900 disabled:bg-primary-500",
    secondary:
      "bg-secondary-500 text-primary-500 border border-secondary-500 hover:bg-secondary-700 dark:bg-secondary-800 dark:hover:bg-secondary-900 disabled:bg-secondary-500",
  },
  outline: {
    primary:
      "bg-secondary-500 text-primary-500 border border-primary-500 hover:text-primary-400 hover:border-primary-400 dark:bg-secondary-800 dark:hover:bg-secondary-900 disabled:border-primary-500 disabled:text-primary-500",
    secondary:
      "bg-primary-500 text-secondary-500 border border-secondary-500 hover:text-secondary-400 hover:border-secondary-400 dark:bg-primary-800 dark:hover:bg-primary-900 disabled:border-secondary-500 disabled:text-secondary-500",
  },
  ghost: {
    primary:
      "bg-transparent text-primary-500 border border-transparent hover:bg-primary-500 hover:text-secondary-500 dark:hover:bg-primary-900 disabled:bg-transparent disabled:text-primary-500",
    secondary:
      "bg-transparent text-secondary-500 border border-transparent hover:bg-secondary-500 hover:text-primary-500 dark:hover:bg-secondary-900 disabled:bg-transparent disabled:text-secondary-500",
  },
};
