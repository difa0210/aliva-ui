import React from "react";
import { cn } from "../../utils/cn";
import { radioWrapper, radioInputBase, radioLabel, radioVariants, radioSizes, disabledClass } from "./styles";
import { RadioProps } from "./types";

export const Radio: React.FC<RadioProps> = ({
  label,
  size = "md",
  rounded = "md",
  color = "primary",
  variant = "solid",
  className,
  id,
  disabled = false,
  ...props
}) => {
  const uniqueId = id || React.useId();

  return (
    <div className={radioWrapper}>
      <input
        type="radio"
        className={cn(
          radioInputBase,
          radioSizes[size],
          disabled ? disabledClass : radioVariants[variant][color],
          className,
        )}
        {...props}
        id={uniqueId}
        disabled={disabled}
      />
      {label && (
        <label
          htmlFor={uniqueId}
          className={cn(
            radioLabel,
            disabled && disabledClass
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};