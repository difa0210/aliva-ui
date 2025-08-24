import { Color, Rounded, Size, VariantCheckbox } from "../../types/ui";

export const radioSizes: Record<Size, string> = {
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

export const radioInputBase = "peer appearance-none w-4 h-4 rounded-full border flex items-center justify-center relative checked:after:content-[''] checked:after:block checked:after:w-2 checked:after:h-2 checked:after:rounded-full transition-colors";
export const radioVariants: Record<VariantCheckbox, Record<Color, string>> = {
  solid: {
    primary: `${radioInputBase} cursor-pointer border-primary-500 checked:bg-primary-300 checked:after:bg-primary-500`,
    secondary: `${radioInputBase} cursor-pointer border-secondary-500 checked:bg-secondary-300 checked:after:bg-secondary-500`,
    success: `${radioInputBase} cursor-pointer border-green-500 checked:bg-green-300 checked:after:bg-green-500`,
    error: `${radioInputBase} cursor-pointer border-red-500 checked:bg-red-300 checked:after:bg-red-500`,
    warning: `${radioInputBase} cursor-pointer border-yellow-500 checked:bg-yellow-300 checked:after:bg-yellow-500`,
    info: `${radioInputBase} cursor-pointer border-sky-500 checked:bg-sky-300 checked:after:bg-sky-500`,
  },
  outline: {
    primary: `${radioInputBase} cursor-pointer border-primary-500 checked:ring-primary-300 checked:after:bg-primary-500`,
    secondary: `${radioInputBase} cursor-pointer border-secondary-500 checked:ring-secondary-300 checked:after:bg-secondary-500`,
    success: `${radioInputBase} cursor-pointer border-green-500 checked:ring-green-300 checked:after:bg-green-500`,
    error: `${radioInputBase} cursor-pointer border-red-500 checked:ring-red-300 checked:after:bg-red-500`,
    warning: `${radioInputBase} cursor-pointer border-yellow-500 checked:ring-yellow-300 checked:after:bg-yellow-500`,
    info: `${radioInputBase} cursor-pointer border-sky-500 checked:ring-sky-300 checked:after:bg-sky-500`,
  },
  ghost: {
    primary: `${radioInputBase} cursor-pointer border-transparent checked:bg-primary-500 checked:after:bg-white`,
    secondary: `${radioInputBase} cursor-pointer border-transparent checked:bg-secondary-500 checked:after:bg-white`,
    success: `${radioInputBase} cursor-pointer border-transparent checked:bg-green-500 checked:after:bg-white`,
    error: `${radioInputBase} cursor-pointer border-transparent checked:bg-red-500 checked:after:bg-white`,
    warning: `${radioInputBase} cursor-pointer border-transparent checked:bg-yellow-500 checked:after:bg-white`,
    info: `${radioInputBase} cursor-pointer border-transparent checked:bg-sky-500 checked:after:bg-white`,
  },
};

export const radioWrapper = "flex items-center gap-2 select-none";
export const radioLabel = "text-sm text-primary-500 dark:text-primary-200";
export const disabledClass = "text-gray-400 border-gray-300 checked:bg-gray-400 checked:after:bg-gray-600 cursor-not-allowed";