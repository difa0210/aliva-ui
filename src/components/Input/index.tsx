import { cn } from "../../utils/cn";
import { forwardRef } from "react";
import {
  inputSizes,
  inputRounded,
  inputVariants,
} from "./styles";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
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
      ? "!text-error-500"
      : "";

    const disabledClass = isDisabled ? "opacity-50 cursor-not-allowed" : "";

    const fullWidthClass = isFullWidth ? "w-full" : "";

    return (
      <input
        ref={ref}
        disabled={isDisabled}
        aria-invalid={isInvalid}
        aria-disabled={isDisabled}
        className={cn(
          "transition",
          inputSizes[size],
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
