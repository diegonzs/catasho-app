import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { PriceInput } from "components/priceInput";
import { FC } from "react";
import { useStore } from "store/useStore";

interface ButtonSelectProps {
  isSelected?: boolean;
  content: string;
}

const ButtonSelect: FC<ButtonSelectProps> = ({
  content,
  isSelected = false,
}) => {
  return (
    <div
      className={clsx(
        "px-[14px] py-[10px] text-sm rounded flex justify-center items-center border",
        isSelected
          ? "bg-primary-two text-white border-primary-two"
          : "bg-white text-secondary-dark border-[#C7CAD9]"
      )}
    >
      {content}
    </div>
  );
};

export const SearchFilter = () => {
  const toggleFilter = useStore((state) => state.toggleFilterOpen);
  const { minPrice, maxPrice } = useStore((state) => state.filterOptions);
  const updateFilterOptions = useStore((state) => state.updateFilterOptions);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50"
      onClick={toggleFilter}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "absolute bottom-0 px-6 py-4 flex flex-col items-center w-full rounded-t-xl bg-white"
        )}
      >
        <div className="h-1 w-16 mb-6 rounded-sm bg-[#C7CAD9]"></div>
        <div className="relative flex justify-center mb-8 w-full">
          <div className="absolute left-0 top-1" onClick={toggleFilter}>
            <XIcon className="w-6 text-black" />
          </div>
          <p className="font-bold text-2xl">Filtro</p>
        </div>
        <div className="flex flex-col gap-4 w-full mb-6">
          <p className="text-base font-bold text-secondary-dark">Ordenar por</p>
          <div className="flex gap-3">
            <ButtonSelect content="Precio mas alto" isSelected />
            <ButtonSelect content="Precio mas bajo" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full mb-6">
          <p className="text-base font-bold text-secondary-dark">Entrega</p>
          <div className="flex gap-3">
            <ButtonSelect content="Delivery" isSelected />
            <ButtonSelect content="Pick Up" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full mb-6">
          <p className="text-base font-bold text-secondary-dark">Oferta</p>
          <div className="flex gap-3">
            <ButtonSelect content="Descuento" isSelected />
            <ButtonSelect content="Delivery Gratis" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full mb-8">
          <p className="text-base font-bold text-secondary-dark">Precio</p>
          <div className="flex justify-between items-center gap-4">
            <PriceInput
              value={minPrice}
              onChange={(value) => updateFilterOptions({ minPrice: value })}
              name="min-price"
            />
            <p className="text-sm text-secondary">hasta</p>
            <PriceInput
              value={maxPrice}
              onChange={(value) => updateFilterOptions({ maxPrice: value })}
              name="max-price"
            />
          </div>
        </div>
        <button
          className="text-white bg-primary-four w-full py-4 rounded mb-8 cursor-pointer"
          onClick={toggleFilter}
        >
          Aplicar filtros
        </button>
      </div>
    </div>
  );
};
