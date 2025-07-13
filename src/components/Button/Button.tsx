import { cn } from "../../utils/cn";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import {
  Size,
  Rounded,
  Variant,
  Color,
  buttonSizes,
  buttonRounded,
  buttonVariants,
} from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Size;
  color?: Color;
  variant?: Variant;
  rounded?: Rounded;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

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
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const fullWidthClass = isFullWidth ? "w-full" : "";

    return (
      <>
      <input/>
        <button
          ref={ref}
          type={type}
          disabled={isLoading || disabled}
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
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
      </>
    );
  }
);

Button.displayName = "Button";