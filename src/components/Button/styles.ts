// components/Button/styles.ts

import { Size, Rounded, Color, VariantIconSpacing, VariantButton } from "../../types/ui";

export const iconSpacing: Record<VariantIconSpacing, string> = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
};

export const buttonSizes: Record<Size, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-2 py-1 text-sm",
  md: "px-2 py-1 text-base",
  lg: "px-2 py-1 text-lg",
  xl: "px-2 py-1 text-xl",
  "2xl": "px-2 py-1 text-2xl",
  "3xl": "px-2 py-1 text-3xl",
  "4xl": "px-2 py-1 text-4xl",
  "5xl": "px-2 py-1 text-5xl",
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
    error: "",
    success: "",
    warning: "",
    info: "",
  },
  outline: {
    primary:
      "bg-secondary-500 text-primary-500 border border-primary-500 hover:text-primary-400 hover:border-primary-400 dark:bg-secondary-800 dark:hover:bg-secondary-900 disabled:border-primary-500 disabled:text-primary-500",
    secondary:
      "bg-primary-500 text-secondary-500 border border-secondary-500 hover:text-secondary-400 hover:border-secondary-400 dark:bg-primary-800 dark:hover:bg-primary-900 disabled:border-secondary-500 disabled:text-secondary-500",
    error: "",
    success: "",
    warning: "",
    info: "",
  },
  ghost: {
    primary:
      "bg-transparent text-primary-500 border border-transparent hover:bg-primary-500 hover:text-secondary-500 dark:hover:bg-primary-900 disabled:bg-transparent disabled:text-primary-500",
    secondary:
      "bg-transparent text-secondary-500 border border-transparent hover:bg-secondary-500 hover:text-primary-500 dark:hover:bg-secondary-900 disabled:bg-transparent disabled:text-secondary-500",
    error: "",
    success: "",
    warning: "",
    info: "",
  },
};

export const base = "inline-flex items-center justify-center font-medium transition disabled:opacity-50 disabled:cursor-default cursor-pointer";