import { Color, Rounded, Size, VariantCheckbox, VariantGap } from "../../types/ui";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  size?: Size;
  rounded?: Rounded;
  color?: Color;
  variant?: VariantCheckbox;
  className?: string;
  horizontal?: boolean;
  gap?: VariantGap;
  disabled?: boolean;
}