import { FormControlProps } from "./types";
import { cn } from "../../utils/cn";
import { labelSizes, textColors } from "./styles";

export function FormControl({
  id,
  label,
  helperText,
  errorText,
  isRequired,
  isInvalid,
  isDisabled,
  isFullWidth,
  size = "md",
  color = "primary",
  children,
  className,
}: FormControlProps) {
  return (
    <div className={cn("space-y-1", isFullWidth && "w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block font-medium",
            labelSizes[size],
            isDisabled ? "text-gray-400" : textColors[color]
          )}
        >
          {label}
          {isRequired && <span className="ml-1 text-error-500">*</span>}
        </label>
      )}

      {children}

      {helperText && !isInvalid && (
        <p className={cn("text-sm", textColors[color])}>{helperText}</p>
      )}

      {isInvalid && errorText && (
        <p className="text-sm text-error-500">{errorText}</p>
      )}
    </div>
  );
}