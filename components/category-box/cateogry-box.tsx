import SVG from "react-inlinesvg";
import { FC } from "react";
import { Body } from "components/typography";

type Categories =
  | "vestimenta"
  | "juegos"
  | "muebles"
  | "musica"
  | "deportes"
  | "todos";

interface CategoryBoxProps {
  label: string;
  category: Categories;
}

export const CategoryBox: FC<CategoryBoxProps> = ({ label, category }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-14 h-14 rounded-[18px] flex justify-center items-center bg-primary-three">
        <SVG src={`/images/categories/${category}.svg`} className="w-6" />
      </div>
      <Body content={label} className="text-white max-w-[65px]" />
    </div>
  );
};
