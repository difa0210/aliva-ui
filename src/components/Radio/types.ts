import { InputHTMLAttributes } from "react";
import { Color, Rounded, Size, VariantCheckbox } from "../../types/ui";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  rounded?: Rounded;
  label?: string;
  color?: Color;
  variant?: VariantCheckbox;
  disabled?: boolean;
}