import { Color, Rounded, Size, VariantCheckbox } from "../../types/ui";

export const checkboxSizes: Record<Size, string> = {
  xs: "h-2 w-2",
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
  "2xl": "h-7 w-7",
  "3xl": "h-8 w-8",
  "4xl": "h-9 w-9",
  "5xl": "h-10 w-10",
};

export const checkboxRounded: Record<Rounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const checkboxVariants: Record<VariantCheckbox, Record<Color, string>> = {
  solid: {
    primary:
      "text-transparent border border-primary-500 peer-checked:bg-primary-500 peer-checked:text-white dark:peer-checked:bg-primary-900 disabled:bg-primary-300",
    secondary:
      "text-transparent border border-secondary-500 peer-checked:bg-secondary-500 peer-checked:text-white dark:peer-checked:bg-secondary-900 disabled:bg-secondary-300",
    error:
      "text-transparent border border-red-500 peer-checked:bg-red-500 peer-checked:text-white dark:peer-checked:bg-red-900 disabled:bg-red-300",
    success:
      "text-transparent border border-green-500 peer-checked:bg-green-500 peer-checked:text-white dark:peer-checked:bg-green-900 disabled:bg-green-300",
    warning:
      " text-transparent border border-yellow-500 peer-checked:bg-yellow-500 peer-checked:text-white dark:peer-checked:bg-yellow-900 disabled:bg-yellow-300",
    info:
      "text-transparent border border-sky-500 peer-checked:bg-sky-500 peer-checked:text-white dark:peer-checked:bg-sky-900 disabled:bg-sky-300",
  },
  outline: {
    primary:
      "text-transparent bg-transparent border border-primary-500 peer-checked:text-primary-500 disabled:text-primary-300",
    secondary: 
      "text-transparent bg-transparent border border-secondary-500 peer-checked:text-secondary-500 disabled:text-secondary-300",
    error:
      "text-transparent bg-transparent border border-red-500 peer-checked:text-red-500 disabled:text-red-300",
    success:
      "text-transparent bg-transparent border border-green-500 peer-checked:text-green-500 disabled:text-green-300",
    warning:
      "text-transparent bg-transparent border border-yellow-500 peer-checked:text-yellow-500 disabled:text-yellow-300",
    info:
      "text-transparent bg-transparent border border-sky-500 peer-checked:text-sky-500 disabled:text-sky-300",
  },
  ghost: {
    primary:
      "text-transparent bg-gray-200 text-primary-500 border border-gray-200 peer-checked:text-primary-500 disabled:text-primary-300",
    secondary:
      "text-transparent bg-gray-200 text-secondary-500 border border-gray-200 peer-checked:text-secondary-500 disabled:text-secondary-300",
    error:
      "text-transparent bg-gray-200 text-red-500 border border-gray-200 peer-checked:text-red-500 disabled:text-red-300",
    success:
      "text-transparent bg-gray-200 text-green-500 border border-gray-200 peer-checked:text-green-500 disabled:text-green-300",
    warning:
      "text-transparent bg-gray-200 text-yellow-500 border border-gray-200 peer-checked:text-yellow-500 disabled:text-yellow-300",
    info:
      "text-transparent bg-gray-200 text-sky-500 border border-gray-200 peer-checked:text-sky-500 disabled:text-sky-300",
  },
};

export const checkboxWrapper = "flex items-center gap-2 select-none my-1";
export const checkboxInput = "peer hidden";
export const checkboxBox = "flex items-center justify-center border transition-colors cursor-pointer p-[0.6rem]";
export const checkboxLabel = "text-sm text-primary-500 dark:text-primary-200";
