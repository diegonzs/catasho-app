import { ClassValue } from "clsx";
import { FC } from "react";
import { classNames } from "utils/class-names";

interface BodyProps {
  className?: ClassValue;
  content?: string;
  type?: "1" | "2";
}

export const Body: FC<BodyProps> = ({
  type = "1",
  content,
  children,
  className,
}) => {
  return (
    <p className={classNames(type === "2" ? "text-xs" : "text-sm", className)}>
      {children || content || ""}
    </p>
  );
};
