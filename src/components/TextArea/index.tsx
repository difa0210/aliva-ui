import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { TextAreaProps } from "./types";
import { textareaSizes, textareaRounded, textareaVariants, base } from "./styles";

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
      readOnly,
      className,
      ...props
    },
    ref
  ) => {
    const invalidClass = isInvalid ? "!border-error-500 !text-error-500" : "";
    const disabledClass = isDisabled || readOnly ? "opacity-50 cursor-default" : "";
    const fullWidthClass = isFullWidth ? "w-full" : "";
    const isWithoutPaddingClass = variant === "flushed" ? "!px-0" : "";

    return (
      <textarea
        ref={ref}
        disabled={isDisabled}
        className={cn(
          base,
          textareaSizes[textareaSize],
          textareaRounded[rounded],
          textareaVariants[variant][color],
          invalidClass,
          disabledClass,
          fullWidthClass,
          isWithoutPaddingClass,
          className
        )}
        readOnly={readOnly}
        rows={1}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
