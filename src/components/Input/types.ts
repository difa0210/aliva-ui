import { InputHTMLAttributes } from "react";
import { Color, Rounded, Size, VariantInput } from "../../types/ui";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  rounded?: Rounded;
  variant?: VariantInput;
  color?: Color;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}