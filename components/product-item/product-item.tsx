import { Body } from "components/typography";
import { FC } from "react";

interface ProductItemProps {
  title: string;
  category: string;
  price: number;
  image: string;
}

export const ProductItem: FC<ProductItemProps> = ({
  image,
  title,
  category,
  price,
}) => {
  return (
    <div className="flex justify-between px-5 w-full">
      <div className="flex gap-4 pb-5 border-b border-[#E9ECF4]">
        <img src={image} alt={title} className="w-14 h-14 mr-4" />
        <div className="flex flex-col">
          <Body
            type="2"
            className="text-lg font-bold text-secondary-dark mb-2"
            content={title}
          />
          <Body type="2" className="text-secondary-light" content={category} />
        </div>
      </div>
      <Body type="1" className="font-bold text-secondary-dark text-2xl">
        ${price}
      </Body>
    </div>
  );
};
