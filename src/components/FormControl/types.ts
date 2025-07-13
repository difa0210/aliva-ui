import { ReactNode } from "react";

export interface FormControlProps {
  id?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  className?: string;
}