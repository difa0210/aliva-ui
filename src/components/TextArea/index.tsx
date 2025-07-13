import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { TextAreaProps } from "./types";
import {
  textareaSizes,
  textareaRounded,
  textareaVariants,
} from "./styles";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      textareaSize = "md",
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
      <textarea
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "transition resize-none", // optional: non-resizable
          textareaSizes[textareaSize],
          textareaRounded[rounded],
          textareaVariants[variant][color],
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

TextArea.displayName = "TextArea";