import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { SelectItemProps } from "./types";
import { selectItemVariants, selectRounded, selectSizes } from "./styles";

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  (
    {
      size = "md",
      rounded = "none",
      color = "primary",
      value,
      children,
      isDisabled,
      isFullWidth,
      onClick,
      onKeyDown,
      className,
      isSelected,
      ...rest
    },
    ref
  ) => {
    const base = "cursor-pointer flex items-center justify-between px-3 py-2";
    const isDisabledClass = isDisabled ? "opacity-50" : "";
    const fullWidthClass = isFullWidth ? "w-full" : "";

    return (
      <div
        role="option"
        ref={ref}
        onClick={isDisabled ? undefined : onClick}
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled}
        className={cn(
          base,
          fullWidthClass,
          selectSizes[size],
          selectRounded[rounded],
          selectItemVariants[color],
          isDisabledClass,
          className
        )}
        onKeyDown={isDisabled ? undefined : onKeyDown}
        {...rest}
      >
        <span>{children}</span>
        {isSelected && <span className="text-primary-600">✓</span>}
      </div>
    );
  }
);

SelectItem.displayName = "SelectItem";
