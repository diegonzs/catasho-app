import { ClassValue } from "clsx";
import { FC } from "react";
import clsx from "clsx";

interface TitleProps {
  type?: "1" | "2" | "3" | "4";
  content?: string;
  className?: ClassValue;
}

export const Title: FC<TitleProps> = ({
  type = "1",
  content,
  children,
  className,
}) => {
  if (type === "2")
    return (
      <h2 className={clsx("font-bold text-2xl", className)}>
        {children || content || ""}
      </h2>
    );
  if (type === "3")
    return (
      <h3 className={clsx("font-bold text-[22px]", className)}>
        {children || content || ""}
      </h3>
    );
  if (type === "4")
    return (
      <h4 className={clsx("font-bold text-lg", className)}>
        {children || content || ""}
      </h4>
    );
  return (
    <h1 className={clsx("font-bold text-[28px]", className)}>
      {children || content || ""}
    </h1>
  );
};
