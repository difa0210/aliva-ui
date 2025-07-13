import { ReactNode } from "react";

export interface FormControlProps {
  id?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "error" | "success" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}