import * as React from "react";
import { cn } from "../../utils/cn";
import { CheckboxProps } from "./types";
import {
  checkboxSizes,
  checkboxRounded,
  checkboxVariants,
  checkboxWrapper,
  checkboxInput,
  checkboxBox,
  checkboxLabel,
} from "./styles";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = "md",
      rounded = "md",
      variant = "solid",
      color = "primary",
      label,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const uniqueId = id || React.useId();

    return (
      <div className={checkboxWrapper}>
        <input
          type="checkbox"
          ref={ref}
          className={cn(checkboxInput)}
          {...props}
          id={uniqueId}
        />
        <label
          className={cn(
            checkboxBox,
            checkboxSizes[size],
            checkboxRounded[rounded],
            checkboxVariants[variant][color],
            className
          )}
          htmlFor={uniqueId}
        >
          ✓
        </label>
        {label && <span className={checkboxLabel}>{label}</span>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";