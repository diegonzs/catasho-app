import { ClassValue } from "clsx";
import { Body } from "components/typography";
import { FC } from "react";
import { classNames } from "utils/class-names";

interface ButtonProps {
  onClick?: () => void;
  content?: string;
  classes?: {
    content?: ClassValue;
    container?: ClassValue;
  };
  isPrimary?: boolean;
  isGradient?: boolean;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  content,
  classes,
  isPrimary = false,
  isGradient = true,
  children,
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={classNames(
        "rounded p-2",
        isGradient && "bg-gradient-to-r",
        "from-[#3AD4E0] to-[#2EB5BF]",
        isPrimary && "from-[#F8819E] to-[#FF7597]",
        classes?.container
      )}
    >
      {content ? (
        <Body
          content={content}
          className={classNames("text-white", classes?.content)}
        />
      ) : (
        children
      )}
    </button>
  );
};
