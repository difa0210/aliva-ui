import { cn } from "../../utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";
import {
  Size,
  Rounded,
  Variant,
  Color,
  inputSizes,
  inputRounded,
  inputVariants,
} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: Size;
  rounded?: Rounded;
  variant?: Variant;
  color?: Color;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = "md",
      rounded = "md",
      variant = "outline",
      color = "primary",
      isInvalid,
      isDisabled,
      isFullWidth,
      className,
      ...props
    },
    ref
  ) => {
    const invalidClass = isInvalid
      ? "!border-error-500 !text-error-500"
      : "";

    const disabledClass = isDisabled ? "opacity-50 cursor-not-allowed" : "";

    const fullWidthClass = isFullWidth ? "w-full" : "";

    return (
      <input
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "transition",
          inputSizes[inputSize],
          inputRounded[rounded],
          inputVariants[variant][color],
          invalidClass,
          disabledClass,
          fullWidthClass,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
