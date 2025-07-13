// Input/styles.ts

export type Size = "sm" | "md" | "lg";
export type Rounded = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type Variant = "outline" | "filled" | "unstyled" | "subtle" | "flushed";
export type Color = "primary" | "secondary";

export const inputSizes: Record<Size, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export const inputRounded: Record<Rounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const inputVariants: Record<Variant, Record<Color, string>> = {
  outline: {
    primary:
      "bg-white border border-primary-300 text-primary-500 placeholder:text-primary-300 hover:border-primary-500 focus:border-primary-500 disabled:!border-primary-300",
    secondary:
      "bg-white border border-secondary-300 text-secondary-500 placeholder:text-secondary-300 hover:border-secondary-500 focus:border-secondary-500 disabled:!border-secondary-300",
  },
  filled: {
    primary:
      "bg-primary-100 border border-transparent text-primary-500 placeholder:text-primary-400 hover:border-primary-500 focus:border-primary-500 disabled:!border-transparent",
    secondary:
      "bg-secondary-100 border border-transparent text-secondary-500 placeholder:text-secondary-400 hover:border-secondary-500 focus:border-secondary-500 disabled:!border-transparent",
  },
  unstyled: {
    primary: "border border-transparent bg-transparent text-primary-500 placeholder:text-primary-400 hover:border hover:border-primary-500 focus:border focus:border-primary-500 disabled:!border-transparent",
    secondary: "border border-transparent bg-transparent text-secondary-500 placeholder:text-secondary-400 hover:border hover:border-secondary-500 focus:border focus:border-secondary-500 disabled:!border-transparent",
  },
  subtle: {
    primary:
      "bg-primary-50 border border-transparent text-primary-500 placeholder:text-primary-400 hover:bg-primary-100 focus:bg-primary-100 disabled:!bg-primary-50 disabled:!border-transparent",
    secondary:
      "bg-secondary-50 border border-transparent text-secondary-500 placeholder:text-secondary-400 hover:bg-secondary-100 focus:bg-secondary-100 disabled:!bg-secondary-50 disabled:!border-transparent",
  },
  flushed: {
    primary:
      "border-0 border-b border-primary-300 rounded-none bg-transparent text-primary-500 placeholder:text-primary-300 hover:border-b-1 hover:border-primary-700 focus:border-b-1 focus:border-primary-700 disabled:!border-primary-300",
    secondary:
      "border-0 border-b border-secondary-300 rounded-none bg-transparent text-secondary-500 placeholder:text-secondary-300 hover:border-b-1 hover:border-secondary-700 focus:border-b-1 focus:border-secondary-700 disabled:!border-secondary-300",
  },  
};