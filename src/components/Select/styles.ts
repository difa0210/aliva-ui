import { Color, Rounded, Size, VariantInput } from "../../types/ui";

export const selectSizes: Record<Size, string> = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-2 py-1",
  md: "text-base px-3 py-1",
  lg: "text-lg px-2 py-1",
  xl: "text-xl px-2 py-1",
  "2xl": "text-2xl px-2 py-1",
  "3xl": "text-3xl px-2 py-1",
  "4xl": "text-4xl px-2 py-1",
  "5xl": "text-5xl px-2 py-1",
};

export const selectIconSizes: Record<Size, string> = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
  xl: "w-8 h-8",
  "2xl": "w-9 h-9",
  "3xl": "w-10 h-10",
  "4xl": "w-11 h-11",
  "5xl": "w-12 h-12",
};

export const selectRounded: Record<Rounded, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const selectVariants: Record<VariantInput, Record<Color, string>> = {
  outline: {
    primary:
      "bg-white border border-primary-300 text-primary-500 placeholder:text-primary-300 hover:border-primary-500 focus:border-primary-500 disabled:!border-primary-300",
    secondary:
      "bg-white border border-secondary-300 text-secondary-500 placeholder:text-secondary-300 hover:border-secondary-500 focus:border-secondary-500 disabled:!border-secondary-300",
    error:
      "bg-white border border-error-300 text-error-500 placeholder:text-error-300 hover:border-error-500 focus:border-error-500 disabled:!border-error-300",
    success:
      "bg-white border border-success-300 text-success-500 placeholder:text-success-300 hover:border-success-500 focus:border-success-500 disabled:!border-success-300",
    warning:
      "bg-white border border-warning-300 text-warning-500 placeholder:text-warning-300 hover:border-warning-500 focus:border-warning-500 disabled:!border-warning-300",
    info: "bg-white border border-info-300 text-info-500 placeholder:text-info-300 hover:border-info-500 focus:border-info-500 disabled:!border-info-300",
  },
  filled: {
    primary:
      "bg-primary-100 border border-transparent text-primary-500 placeholder:text-primary-400 hover:border-primary-500 focus:border-primary-500 disabled:!border-transparent",
    secondary:
      "bg-secondary-100 border border-transparent text-secondary-500 placeholder:text-secondary-400 hover:border-secondary-500 focus:border-secondary-500 disabled:!border-transparent",
    error:
      "bg-error-100 border border-transparent text-error-500 placeholder:text-error-400 hover:border-error-500 focus:border-error-500 disabled:!border-transparent",
    success:
      "bg-success-100 border border-transparent text-success-500 placeholder:text-success-400 hover:border-success-500 focus:border-success-500 disabled:!border-transparent",
    warning:
      "bg-warning-100 border border-transparent text-warning-500 placeholder:text-warning-400 hover:border-warning-500 focus:border-warning-500 disabled:!border-transparent",
    info: "bg-info-100 border border-transparent text-info-500 placeholder:text-info-400 hover:border-info-500 focus:border-info-500 disabled:!border-transparent",
  },
  unstyled: {
    primary:
      "border border-transparent bg-transparent text-primary-500 placeholder:text-primary-400 hover:border hover:border-primary-500 focus:border focus:border-primary-500 disabled:!border-transparent",
    secondary:
      "border border-transparent bg-transparent text-secondary-500 placeholder:text-secondary-400 hover:border hover:border-secondary-500 focus:border focus:border-secondary-500 disabled:!border-transparent",
    error:
      "border border-transparent bg-transparent text-error-500 placeholder:text-error-400 hover:border hover:border-error-500 focus:border focus:border-error-500 disabled:!border-transparent",
    success:
      "border border-transparent bg-transparent text-success-500 placeholder:text-success-400 hover:border hover:border-success-500 focus:border focus:border-success-500 disabled:!border-transparent",
    warning:
      "border border-transparent bg-transparent text-warning-500 placeholder:text-warning-400 hover:border hover:border-warning-500 focus:border focus:border-warning-500 disabled:!border-transparent",
    info: "border border-transparent bg-transparent text-info-500 placeholder:text-info-400 hover:border hover:border-info-500 focus:border focus:border-info-500 disabled:!border-transparent",
  },
  subtle: {
    primary:
      "bg-primary-50 border border-transparent text-primary-500 placeholder:text-primary-400 hover:bg-primary-100 focus:bg-primary-100 disabled:!bg-primary-50 disabled:!border-transparent",
    secondary:
      "bg-secondary-50 border border-transparent text-secondary-500 placeholder:text-secondary-400 hover:bg-secondary-100 focus:bg-secondary-100 disabled:!bg-secondary-50 disabled:!border-transparent",
    error:
      "bg-error-50 border border-transparent text-error-500 placeholder:text-error-400 hover:bg-error-100 focus:bg-error-100 disabled:!bg-error-50 disabled:!border-transparent",
    success:
      "bg-success-50 border border-transparent text-success-500 placeholder:text-success-400 hover:bg-success-100 focus:bg-success-100 disabled:!bg-success-50 disabled:!border-transparent",
    warning:
      "bg-warning-50 border border-transparent text-warning-500 placeholder:text-warning-400 hover:bg-warning-100 focus:bg-warning-100 disabled:!bg-warning-50 disabled:!border-transparent",
    info: "bg-info-50 border border-transparent text-info-500 placeholder:text-info-400 hover:bg-info-100 focus:bg-info-100 disabled:!bg-info-50 disabled:!border-transparent",
  },
  flushed: {
    primary:
      "border-0 border-b border-primary-300 rounded-none bg-transparent text-primary-500 placeholder:text-primary-300 hover:border-b-primary-700 focus:border-b-primary-700 disabled:!border-primary-300",
    secondary:
      "border-0 border-b border-secondary-300 rounded-none bg-transparent text-secondary-500 placeholder:text-secondary-300 hover:border-b-secondary-700 focus:border-b-secondary-700 disabled:!border-secondary-300",
    error:
      "border-0 border-b border-error-300 rounded-none bg-transparent text-error-500 placeholder:text-error-300 hover:border-b-error-700 focus:border-b-error-700 disabled:!border-error-300",
    success:
      "border-0 border-b border-success-300 rounded-none bg-transparent text-success-500 placeholder:text-success-300 hover:border-b-success-700 focus:border-b-success-700 disabled:!border-success-300",
    warning:
      "border-0 border-b border-warning-300 rounded-none bg-transparent text-warning-500 placeholder:text-warning-300 hover:border-b-warning-700 focus:border-b-warning-700 disabled:!border-warning-300",
    info: "border-0 border-b border-info-300 rounded-none bg-transparent text-info-500 placeholder:text-info-300 hover:border-b-info-700 focus:border-b-info-700 disabled:!border-info-300",
  },
};

export const selectItemVariants: Record<Color, string> = {
  primary: "bg-white text-primary-500 hover:bg-primary-200",
  secondary: "bg-secondary-100 text-secondary-500 hover:bg-secondary-200",
  error: "bg-error-100 text-error-500 hover:bg-error-500 focus:bg-error-500",
  success: "bg-success-100 text-success-500 hover:bg-success-200",
  warning: "bg-warning-100 text-warning-500 hover:bg-warning-200",
  info: "bg-info-100 text-info-500 hover:bg-info-200",
};

export const base = "transition cursor-pointer my-1 text-left min-w-[250px]";
export const baseSelectItem = "cursor-pointer flex items-center justify-between px-3 py-1";
export const isOpenClass = "absolute z-10 mt-1 bg-white border-gray-200 shadow-lg min-w-[250px] transition-all duration-200 ease-in-out";
export const itemsClass = "max-h-60 overflow-y-auto";
export const isSelectedClass = "bg-gray-100";
export const isFocusedClass = "bg-primary-100";
export const placeholderClass = "text-gray-400";
export const iconItemsClass = "flex items-center gap-2";
export const searchItemsClass = "w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none";
export const emptyStateClass = "py-6 flex flex-col items-center justify-center text-center text-gray-500 text-sm";
export const emptyStateIconClass = "text-2xl mb-1";
export const emptyStateTextClass = "text-gray-500 text-sm";
export const animateClass = "animate-spin text-xl";
export const clearClass = "cursor-pointer ml-auto text-primary-400 hover:text-primary-500 text-md";