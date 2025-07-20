import { ChangeEvent, ReactNode, SelectHTMLAttributes } from "react";
import { Color, Rounded, Size, VariantInput } from "../../types/ui";

import { HTMLAttributes } from "react";

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "size" | "onChange"> {
  size?: Size;
  variant?: VariantInput;
  color?: Color;
  rounded?: Rounded;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string | string[]) => void;
  className?: string;
  children: ReactNode;
  placeholder?: string;
  isSearchable?: boolean;
  isItemsSearchable?: boolean;
  placeholderItems?: string;
  emptyStateIcon?: ReactNode;
  emptyStateText?: string;
  dropdownClassName?: string;
  variantItems?: VariantInput;
  isClearable?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  id?: string;
  name?: string;
  usePortal?: boolean;
}

export interface SelectItemProps {
  color?: Color;
  size?: Size;
  variant?: VariantInput;
  rounded?: Rounded;
  isFullWidth?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  value: string;
  children: ReactNode;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  role?: string;
  "aria-selected"?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  icon?: ReactNode;
  isSelected?: boolean;
}
