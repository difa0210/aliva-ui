import {
  isValidElement,
  cloneElement,
  useRef,
  useState,
  ReactElement,
  useEffect,
  useCallback,
  useMemo,
  useId,
} from "react";
import { SelectProps } from "./types";
import { cn } from "../../utils/cn";
import {
  selectSizes,
  selectRounded,
  selectVariants,
  selectIconSizes,
} from "./styles";
import { SelectItemProps } from "./types";
import { SelectItem } from "./SelectItem";
import { Input } from "../Input";
import { inputRounded, inputSizes, inputVariants } from "../Input/styles";
import { createPortal } from "react-dom";

const useDebounce = (value: string, delay = 300) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
};

export const Select = ({
  id,
  name,
  size = "md",
  rounded = "md",
  variant = "outline",
  variantItems = "outline",
  color = "primary",
  isInvalid,
  isDisabled,
  isFullWidth = true,
  isClearable = true,
  isLoading = false,
  isMulti = false,
  usePortal = false,
  className,
  children,
  value: controlledValue,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  placeholderItems = "Search...",
  isSearchable = false,
  isItemsSearchable = true,
  emptyStateIcon = "🔍",
  emptyStateText = "No options found",
  dropdownClassName,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<string | string[]>(
    defaultValue ?? ""
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState("");
  const [typeahead, setTypeahead] = useState("");
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const value = controlledValue ?? uncontrolledValue;
  const listboxId = useId();

  const validChildren: ReactElement<SelectItemProps>[] = useMemo(
    () =>
      (Array.isArray(children) ? children : [children]).filter(
        (child): child is ReactElement<SelectItemProps> =>
          isValidElement(child) &&
          (child.type as any)?.displayName === "SelectItem"
      ),
    [children]
  );

  const debouncedSearchItems = useDebounce(searchItems);

  const filteredChildren = useMemo(
    () =>
      validChildren.filter((child) => {
        const text = String(child.props.children).toLowerCase();
        return (
          text.includes(search.toLowerCase()) &&
          text.includes(debouncedSearchItems.toLowerCase())
        );
      }),
    [validChildren, search, debouncedSearchItems]
  );

  const handleSelect = useCallback(
    (val: string) => {
      setIsOpen(false);
      setSearch("");
      setSearchItems("");
      setFocusedIndex(-1);
      if (val === "") {
        onChange?.(isMulti ? [] : "");
        setUncontrolledValue(isMulti ? [] : "");
        return;
      }
      if (onChange) {
        if (isMulti) {
          const newValue = Array.isArray(value)
            ? value.includes(val)
              ? value.filter((v: string) => v !== val)
              : [...value, val]
            : [val];
          onChange(newValue);
        } else {
          onChange(val);
        }
      } else {
        if (isMulti) {
          const newValue = Array.isArray(value)
            ? value.includes(val)
              ? value.filter((v: string) => v !== val)
              : [...value, val]
            : [val];
          setUncontrolledValue(newValue);
        } else {
          setUncontrolledValue(val);
        }
      }
    },
    [onChange, value, isMulti]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % filteredChildren.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex(
          (prev) =>
            (prev - 1 + filteredChildren.length) % filteredChildren.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredChildren.length > 0 && focusedIndex >= 0) {
          const selected = filteredChildren[focusedIndex];
          if (selected && !selected.props.isDisabled) {
            handleSelect(selected.props.value);
          }
        }
      } else if (e.key === "Escape" || e.key === "Tab") {
        setIsOpen(false);
      } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
        setTypeahead((prev) => prev + e.key.toLowerCase());
        const matchIndex = filteredChildren.findIndex((child) =>
          String(child.props.children)
            .toLowerCase()
            .startsWith(typeahead + e.key.toLowerCase())
        );
        if (matchIndex >= 0) setFocusedIndex(matchIndex);
      }

      if (focusedIndex >= 0) {
        requestAnimationFrame(() => {
          itemRefs.current[focusedIndex]?.scrollIntoView({ block: "nearest" });
        });
      }
    },
    [isOpen, focusedIndex, filteredChildren, typeahead, handleSelect]
  );

  const stopScrollPropagation = (e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (
      (target.scrollTop === 0 && e.deltaY < 0) ||
      (target.scrollHeight - target.scrollTop === target.clientHeight &&
        e.deltaY > 0)
    ) {
      e.preventDefault();
    }
  };

  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    []
  );

  const isSelectedValue = useCallback(
    (val: string) => {
      return isMulti
        ? Array.isArray(value) && value.includes(val)
        : value === val;
    },
    [value, isMulti]
  );

  const selectedChild = useMemo(() => {
    if (!isMulti) {
      return validChildren.find((child) => child.props.value === value);
    }
    return null;
  }, [validChildren, value, isMulti]);

  useEffect(() => {
    const timeout = setTimeout(() => setTypeahead(""), 500);
    return () => clearTimeout(timeout);
  }, [typeahead]);

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      itemRefs.current[focusedIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [isOpen, focusedIndex]);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => setDropdownVisible(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setTypeahead("");
      setDropdownVisible(false);
    }
  }, [isOpen, value, validChildren, isMulti]);

  const searchItemsRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && isItemsSearchable && searchItemsRef.current) {
      searchItemsRef.current.focus();
    }
  }, [isOpen, isItemsSearchable]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setSearch("");
        setSearchItems("");
        itemRefs.current = [];
        if (inputRef.current) inputRef.current.value = "";
        if (buttonRef.current) buttonRef.current.blur();
        setFocusedIndex(-1);
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const base = "transition cursor-pointer my-1 text-left min-w-[250px]";
  const isOpenClass =
    "absolute z-10 mt-1 bg-white border-gray-200 shadow-lg min-w-[250px] transition-all duration-200 ease-in-out";
  const itemsClass = "max-h-60 overflow-y-auto";
  const invalidClass = isInvalid ? "!border-error-500 !text-error-500" : "";
  const disabledClass = isDisabled ? "opacity-50" : "";
  const fullWidthClass = isFullWidth ? "relative w-full" : "relative";
  const isWithoutPaddingClass = variant === "flushed" ? "!px-0" : "";
  const isWithoutPaddingItemsClass = variantItems === "flushed" ? "!px-0" : "";
  const isSelectedClass = "bg-gray-100";
  const isFocusedClass = "bg-primary-100";
  const placeholderClass = "text-gray-400";
  const iconItemsClass = "flex items-center gap-2";
  const searchItemsClass =
    "w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none";
  const emptyStateClass =
    "py-6 flex flex-col items-center justify-center text-center text-gray-500 text-sm";
  const emptyStateIconClass = "text-2xl mb-1";
  const emptyStateTextClass = "text-gray-500 text-sm";
  const dropdownVisibleClass = dropdownVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-1 pointer-events-none";
  const animateClass = "animate-spin text-xl";
  const clearClass =
    "cursor-pointer ml-auto text-primary-400 hover:text-primary-500 text-md";

  const triggerProps = {
    role: "combobox" as const,
    "aria-haspopup": "listbox" as const,
    "aria-controls": listboxId,
    "aria-expanded": isOpen,
    "aria-activedescendant":
      focusedIndex >= 0 ? `option-${focusedIndex}` : undefined,
  };

  const dropdown = (
    <div
      id={listboxId}
      className={cn(
        isOpenClass,
        fullWidthClass,
        dropdownVisibleClass,
        dropdownClassName
      )}
      role="listbox"
      aria-labelledby={id ? `${id}-label` : undefined}
      aria-multiselectable={isMulti ? "true" : "false"}
    >
      {isItemsSearchable && (
        <div className="p-2">
          <Input
            ref={searchItemsRef}
            type="text"
            value={searchItems}
            onChange={(e) => setSearchItems(e.target.value)}
            onMouseDown={(e) => e.stopPropagation()}
            className={cn(
              base,
              fullWidthClass,
              inputSizes[size],
              inputRounded[rounded],
              inputVariants[variantItems][color],
              invalidClass,
              disabledClass,
              isWithoutPaddingItemsClass,
              iconItemsClass,
              searchItemsClass,
              className
            )}
            placeholder={placeholderItems}
          />
        </div>
      )}
      <div className={itemsClass} onWheel={stopScrollPropagation}>
        <div>
          {isLoading ? (
            <div className={emptyStateClass}>
              <div className={animateClass}>⏳</div>
              <div className={emptyStateTextClass}>Loading options...</div>
            </div>
          ) : filteredChildren.length === 0 ? (
            <div className={emptyStateClass}>
              <div className={emptyStateIconClass}>{emptyStateIcon}</div>
              <div className={emptyStateTextClass}>{emptyStateText}</div>
            </div>
          ) : (
            filteredChildren.map((child, index) => {
              const {
                value: childValue,
                isDisabled,
                className: childClass,
              } = child.props;
              const isSelected = isSelectedValue(childValue);
              const isFocused = index === focusedIndex;

              return cloneElement(
                child as ReactElement<any, typeof SelectItem>,
                {
                  key: child.props.value,
                  ref: setItemRef(index),
                  onKeyDown: handleKeyDown,
                  onClick: () => !isDisabled && handleSelect(childValue),
                  className: cn(
                    childClass,
                    isSelected && isSelectedClass,
                    isFocused && isFocusedClass,
                    isDisabled && disabledClass
                  ),
                  role: "option",
                  id: `option-${index}`,
                  "aria-selected": isSelected,
                  "aria-disabled": isDisabled,
                  isSelected,
                }
              );
            })
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={fullWidthClass}
      id={id}
      {...(name ? { "data-name": name } : {})}
      {...props}
    >
      {name && !isDisabled && (
        <input
          type="hidden"
          name={name}
          value={
            isMulti
              ? Array.isArray(value)
                ? value.join(",")
                : ""
              : typeof value === "string"
              ? value
              : ""
          }
        />
      )}
      {isSearchable ? (
        <Input
          type="text"
          ref={inputRef}
          value={
            isOpen ? search : selectedChild?.props.children?.toString() ?? ""
          }
          onChange={(e) => {
            setSearch(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (
              isClearable &&
              !search &&
              isMulti &&
              Array.isArray(value) &&
              value.length > 0 &&
              e.key === "Backspace"
            ) {
              handleSelect(value[value.length - 1]);
            } else if (isClearable && !search && e.key === "Backspace") {
              handleSelect("");
            }

            if (isOpen) handleKeyDown(e);
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onBlur={() => {
            if (!isOpen) {
              setFocusedIndex(-1);
              if (!isSearchable) setSearch("");
            }
          }}
          aria-disabled={isDisabled}
          aria-label="Select input"
          disabled={isDisabled}
          placeholder={placeholder}
          className={cn(
            base,
            fullWidthClass,
            inputSizes[size],
            inputRounded[rounded],
            inputVariants[variant][color],
            invalidClass,
            disabledClass,
            isWithoutPaddingClass,
            iconItemsClass,
            className
          )}
          {...triggerProps}
        />
      ) : (
        <button
          type="button"
          disabled={isDisabled}
          aria-disabled={isDisabled}
          ref={buttonRef}
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={(e) => {
            if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter")) {
              setIsOpen(true);
            } else if (
              isClearable &&
              !search &&
              isMulti &&
              Array.isArray(value) &&
              value.length > 0 &&
              e.key === "Backspace"
            ) {
              handleSelect(value[value.length - 1]);
            } else if (isClearable && !search && e.key === "Backspace") {
              handleSelect("");
            }
            if (isOpen) handleKeyDown(e);
          }}
          tabIndex={0}
          className={cn(
            base,
            fullWidthClass,
            selectSizes[size],
            selectRounded[rounded],
            selectVariants[variant][color],
            invalidClass,
            disabledClass,
            isWithoutPaddingClass,
            className
          )}
          {...triggerProps}
        >
          <div className={iconItemsClass}>
            {selectedChild?.props.icon && (
              <span className={selectIconSizes[size]}>
                {selectedChild?.props.icon}
              </span>
            )}
            {isMulti ? (
              Array.isArray(value) && value.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {validChildren
                    .filter((child) => isSelectedValue(child.props.value))
                    .map((child) => (
                      <span
                        key={child.props.value}
                        className="px-2 py-0.5 text-sm rounded bg-primary-100 text-primary-700 flex items-center gap-1"
                      >
                        {child.props.children}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelect(child.props.value);
                          }}
                          className="text-primary-600 hover:text-primary-800 ml-1"
                          aria-label={`Remove ${child.props.children}`}
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                </div>
              ) : (
                <span className={placeholderClass}>{placeholder}</span>
              )
            ) : (
              selectedChild?.props.children ?? (
                <span className={placeholderClass}>{placeholder}</span>
              )
            )}

            {isClearable && value && !isDisabled && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect("");
                }}
                className={clearClass}
                aria-label="Clear selected option"
              >
                <span aria-hidden="true">✕</span>
              </button>
            )}
          </div>
        </button>
      )}
      {isOpen && (usePortal ? createPortal(dropdown, document.body) : dropdown)}
    </div>
  );
};
