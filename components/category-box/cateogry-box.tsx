import SVG from "react-inlinesvg";
import { FC } from "react";
import { Body } from "components/typography";
import { classNames } from "utils/class-names";
import { ClassValue } from "clsx";
import styles from "./category-box.module.css";

export type Categories =
  | "vestimenta"
  | "juegos"
  | "muebles"
  | "musica"
  | "deportes"
  | "todos";

interface CategoryBoxProps {
  label: string;
  category: Categories;
  isBig?: boolean;
  classes?: {
    label?: ClassValue;
  };
}

export const CategoryBox: FC<CategoryBoxProps> = ({
  label,
  category,
  isBig = false,
  classes,
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={classNames(
          "w-14 h-14 rounded-[18px] flex justify-center items-center bg-primary-three",
          isBig && "w-16 h-16 rounded-[20px] bg-[#F8F8F8]"
        )}
      >
        <SVG
          src={`/images/categories/${category}.svg`}
          className={classNames(
            "w-6",
            isBig && "w-10 h-10 text-[#C7CAD9]",
            isBig && styles.svgFill
          )}
        />
      </div>
      <Body
        content={label}
        className={classNames("text-white max-w-[65px]", classes?.label)}
      />
    </div>
  );
};
