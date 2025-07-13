import { TextareaHTMLAttributes } from "react";
import { Size, Rounded, Color, VariantInput } from "../../types/ui";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaSize?: Size;
  rounded?: Rounded;
  variant?: VariantInput;
  color?: Color;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}
