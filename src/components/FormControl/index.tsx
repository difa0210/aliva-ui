import { FormControlProps } from "./types";
import { cn } from "../../utils/cn";
import { labelSizes, textColors } from "./styles";
import { cloneElement, isValidElement } from "react";

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
  className
}: FormControlProps) {
  const base = "mb-4";
  const labelClass = "block font-medium";
  const disabledClass = isDisabled ? "text-gray-400" : textColors[color];
  const isRequiredClass = "ml-1 text-error-500";
  const helperTextClass =  "text-sm";
  const invalidClass = isInvalid ? "text-sm text-error-500" : "";
  const fullWidthClass = isFullWidth ? "w-full" : "";

  return (
    <div 
      className={cn(
      base,
      fullWidthClass,
      className
      )}
    >
      {label && (
        <label
          id={`label-${id}`}
          htmlFor={id}
          className={cn(
            labelClass,
            labelSizes[size],
            disabledClass
          )}
        >
          {label}
          {isRequired && <span className={isRequiredClass}>*</span>}
        </label>
      )}
      {label && id && isValidElement(children)
      ? cloneElement(children as React.ReactElement<any>, {
          id,
          'aria-labelledby': `label-${id}`,
        })
      : children}
      {helperText && !isInvalid && (
        <p className={cn(helperTextClass, textColors[color])}>{helperText}</p>
      )}
      {isInvalid && errorText && (
        <p className={cn(invalidClass)}>{errorText}</p>
      )}
    </div>
  );
}