import { ChevronLeftIcon } from "@heroicons/react/outline";
import { FeatureCard } from "components/feature-card";
import { Title } from "components/typography";
import { products } from "mockdata/products";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Category: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="py-10 px-6 flex gap-3 items-center bg-[url('/images/backgrounds/hero.png')]">
        <div onClick={() => router.back()}>
          <ChevronLeftIcon className="w-6 text-white" />
        </div>
        <Title type="2" content="Productos populares" className="text-white" />
      </div>
      <div className="px-6 mt-4">
        <div className="grid grid-cols-2 grid-flow-row gap-x-5 gap-y-4 justify-items-center pb-10">
          {products.map((elem, index) => (
            <FeatureCard key={`${elem.title}-${index}`} isFull {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
