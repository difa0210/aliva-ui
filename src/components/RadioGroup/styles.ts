import { VariantGap } from "../../types/ui";

export const radioGroupWrapper = "flex select-none";
export const radioVariantGap: Record<VariantGap, string> = {
  none: "gap-0",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
  xl: "gap-4",
  "2xl": "gap-5",
}