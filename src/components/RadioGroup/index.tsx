import React from "react";
import { cn } from "../../utils/cn";
import { radioGroupWrapper, radioVariantGap } from "./styles";
import { RadioGroupProps } from "./types";
import { Radio } from "../Radio";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  size = "md",
  rounded = "md",
  color = "primary",
  variant = "solid",
  className,
  horizontal = false,
  gap = "md",
  disabled,
}) => {
  const directionClass = horizontal ? `flex-row` : `flex-col`;

  return (
    <div className={cn(
      radioGroupWrapper, 
      directionClass, 
      radioVariantGap[gap],
      className)}>
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          size={size}
          rounded={rounded}
          color={color}
          variant={variant}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
};
