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
      ...props
    },
    ref
  ) => {
    return (
      <label className={checkboxWrapper}>
        <input
          type="checkbox"
          ref={ref}
          className={cn(checkboxInput)}
          {...props}
        />
        <span
          className={cn(
            checkboxBox,
            checkboxSizes[size],
            checkboxRounded[rounded],
            checkboxVariants[variant][color],
            className
          )}
        >
          ✓
        </span>
        {label && <span className={checkboxLabel}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";