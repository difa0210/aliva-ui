import { Color, Size } from "../../types/ui";

export const labelSizes: Record<Size, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
};

export const textColors: Record<Color, string> = {
    primary: "text-primary-500",
    secondary: "text-secondary-500",
    error: "text-error-500",
    success: "text-success-500",
    warning: "text-warning-500",
    info: "text-info-500",
};

export const base = "mb-4";
export const labelClass = "block font-medium";
export const isRequiredClass = "ml-1 text-error-500";
export const helperTextClass =  "text-sm";