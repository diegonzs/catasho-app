import { AdjustmentsIcon, XIcon } from "@heroicons/react/outline";
import { FeatureCard } from "components/feature-card";
import { Input } from "components/input";
import { products } from "mockdata/products";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import { useStore } from "store/useStore";
import "react-spring-bottom-sheet/dist/style.css";
import { useState } from "react";
import clsx from "clsx";
import { PriceInput } from "components/priceInput";
import { SearchFilter } from "components/search-filter";

interface PopularSearchProps {
  image: string;
  title: string;
  category: string;
}

const PopularSearch: FC<PopularSearchProps> = ({ image, title, category }) => {
  return (
    <li className="flex gap-4">
      <img src={image} alt="" className="w-14 h-14" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-base text-secondary-dark">{title}</p>
        <p className="text-sm text-secondary">{category}</p>
      </div>
    </li>
  );
};

const SearchPage: NextPage = () => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const searchValue = useStore((state) => state.searchValue);
  const setSearchValue = useStore((state) => state.setSearchValue);
  const isFilterOpen = useStore((state) => state.isFilterOpen);
  const toggleFilter = useStore((state) => state.toggleFilterOpen);
  return (
    <>
      <div>
        <div className="px-6 py-8 bg-[url('/images/backgrounds/hero.png')]">
          <div className="flex items-center gap-4">
            <Input
              name="search"
              className="h-11 w-full"
              value={searchValue}
              onChange={setSearchValue}
              withSearchIcon
              cb={() => {
                console.log(searchValue);
              }}
            />
            {!searchValue.length ? (
              <p className="text-sm text-white" onClick={() => router.back()}>
                Cancelar
              </p>
            ) : (
              <div className="flex gap-4">
                <div onClick={() => setSearchValue("")}>
                  <XIcon className="w-6 text-white" />
                </div>
                <div onClick={toggleFilter}>
                  <AdjustmentsIcon className="w-6 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
        {!!searchValue.length && (
          <div className="px-6 mt-8">
            <p className="text-base text-secondary mb-4">
              Los resultados de tu búsqueda
            </p>
            <div className="grid grid-cols-2 grid-flow-row gap-x-5 gap-y-4 justify-items-center pb-10">
              {products.map((elem, index) => (
                <FeatureCard key={`${elem.title}-${index}`} isFull {...elem} />
              ))}
            </div>
          </div>
        )}
        {!searchValue.length && (
          <div className="px-6 mt-8">
            <h4 className="font-bold text-lg text-secondary-dark mb-4">
              Búsquedas populares
            </h4>
            <ul className="flex flex-col gap-4">
              <PopularSearch
                title="Premium Headphone"
                category="Electrónico"
                image="/images/mock/search-example-1.png"
              />
              <PopularSearch
                title="Blue Dress"
                category="Vestimenta"
                image="/images/mock/search-example-2.png"
              />
              <PopularSearch
                title="Plain Kimono"
                category="Vestimenta"
                image="/images/mock/search-example-3.png"
              />
              <PopularSearch
                title="Premium Headphone"
                category="Electrónico"
                image="/images/mock/search-example-4.png"
              />
              <PopularSearch
                title="Premium Headphone"
                category="Electrónico"
                image="/images/mock/search-example-2.png"
              />
              <PopularSearch
                title="Premium Headphone"
                category="Electrónico"
                image="/images/mock/search-example-1.png"
              />
            </ul>
          </div>
        )}
      </div>
      {isFilterOpen && <SearchFilter />}
    </>
  );
};

export default SearchPage;
