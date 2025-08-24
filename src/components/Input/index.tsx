import { cn } from "../../utils/cn";
import { forwardRef } from "react";
import { inputSizes, inputRounded, inputVariants, base } from "./styles";
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
    const invalidClass = isInvalid ? "!text-error-500" : "";
    const disabledClass = isDisabled ? "opacity-50 cursor-default" : "";
    const fullWidthClass = isFullWidth ? "w-full" : "";
    const isWithoutPaddingClass = variant === "flushed" ? "!px-0" : "";

    return (
      <input
        ref={ref}
        disabled={isDisabled}
        aria-invalid={isInvalid}
        aria-disabled={isDisabled}
        className={cn(
          base,
          inputSizes[size],
          inputRounded[rounded],
          inputVariants[variant][color],
          invalidClass,
          disabledClass,
          fullWidthClass,
          isWithoutPaddingClass,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
