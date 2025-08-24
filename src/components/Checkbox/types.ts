import { InputHTMLAttributes } from "react";
import { Color, Rounded, Size, VariantCheckbox } from "../../types/ui";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  rounded?: Rounded;
  variant?: VariantCheckbox;
  color?: Color;
  label?: string;
}
