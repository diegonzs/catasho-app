import clsx, { ClassValue } from "clsx";
import { FC } from "react";

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
    <p className={clsx(type === "2" ? "text-xs" : "text-sm", className)}>
      {children || content || ""}
    </p>
  );
};
