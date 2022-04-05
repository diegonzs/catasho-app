import SVG from "react-inlinesvg";
import { Body, Title } from "components/typography";
import { FC } from "react";
import clsx, { ClassValue } from "clsx";

interface FeatureCardProps {
  title: string;
  image: string;
  stock: number;
  tag: string;
  originalPrice: number;
  currentPrice: number;
  className?: ClassValue;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  image,
  stock,
  originalPrice,
  currentPrice,
  tag,
  className,
}) => {
  return (
    <div
      className={clsx("rounded-md p-2 w-36", className)}
      style={{ boxShadow: "0px 18px 30px rgba(5, 8, 40, 0.06)" }}
    >
      <img src={image} alt={title} className="w-full mb-2" />
      <div className="">
        <Body content={title} className="text-secondary-dark font-bold mb-2" />
        <div className="flex items-center gap-1 mb-2">
          <SVG src="/images/icons/box.svg" className="w-3" />
          <Body
            type="2"
            content={`Quedan ${stock}`}
            className="text-secondary"
          />
        </div>
        <Body type="2" content={tag} className="text-secondary mb-2" />
        <div className="flex items-center gap-2">
          <Title
            type="4"
            content={`$${currentPrice}`}
            className="text-secondary-dark text-[20px]"
          />
          <Title
            type="4"
            content={`$${originalPrice}`}
            className="text-primary-one text-[16px] line-through"
          />
        </div>
      </div>
    </div>
  );
};
