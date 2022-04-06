import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// wrapper around clsx that dedupes tailwind classnames

export const classNames = (...classes: ClassValue[]) => {
  const className = clsx(...classes);
  return twMerge(className);
};
