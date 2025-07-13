import { ButtonHTMLAttributes, ReactNode } from "react";
import { Color, Rounded, Size, VariantButton, VariantIconSpacing } from "../../types/ui";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Size;
  color?: Color;
  variant?: VariantButton;
  rounded?: Rounded;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  spacing?: VariantIconSpacing;
}