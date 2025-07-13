import { FormControlProps } from "./types";
import { cn } from "../../utils/cn";

export function FormControl({
  id,
  label,
  helperText,
  errorText,
  isRequired,
  isInvalid,
  isDisabled,
  children,
  className,
}: FormControlProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-medium",
            isDisabled ? "text-gray-400" : "text-gray-700"
          )}
        >
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Child seperti Input, Textarea, etc */}
      {children}

      {helperText && !isInvalid && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}

      {isInvalid && errorText && (
        <p className="text-sm text-error-500">{errorText}</p>
      )}
    </div>
  );
}
