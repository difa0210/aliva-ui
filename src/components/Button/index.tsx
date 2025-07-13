import { cn } from "../../utils/cn";
import { forwardRef } from "react";
import {
  buttonSizes,
  buttonRounded,
  buttonVariants,
  iconSpacing,
} from "./styles";
import { ButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "md",
      color = "primary",
      variant = "solid",
      rounded = "md",
      isLoading,
      isFullWidth,
      leftIcon,
      rightIcon,
      disabled,
      className,
      type = "button",
      spacing = "md",
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const fullWidthClass = isFullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        type={type}
        disabled={isLoading || disabled}
        aria-disabled={isLoading || disabled}
        aria-busy={isLoading}
        className={cn(
          base,
          buttonSizes[size],
          buttonRounded[rounded],
          buttonVariants[variant][color],
          fullWidthClass,
          className
        )}
        {...props}
      >
        {leftIcon && children && <span style={{marginRight: iconSpacing[spacing]}}>{leftIcon}</span>}
        {children}
        {rightIcon && children && <span style={{marginLeft: iconSpacing[spacing]}}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";