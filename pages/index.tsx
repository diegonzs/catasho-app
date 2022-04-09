import { FeatureCard } from "components/feature-card";
import { Hero } from "components/hero";
import { ProductItem } from "components/product-item";
import { Body, Title } from "components/typography";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div className="mt-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-6 mb-4">
            <Title
              content="Descuentos"
              className="text-secondary-dark text-[18px]"
            />
            <Link href="/category/example">
              <a>
                <Body content="Ver todo" className="text-primary-two" />
              </a>
            </Link>
          </div>
          <div className="grid grid-flow-col gap-4 justify-start overflow-hidden overflow-x-auto pb-8">
            <FeatureCard
              className="first:ml-6"
              image="/images/mock/product-example-1.png"
              title="Yellow Nike"
              stock={6}
              tag="Gomas deportivas"
              originalPrice={77}
              currentPrice={67}
            />
            <FeatureCard
              image="/images/mock/product-example-2.png"
              title="Red Nike"
              stock={6}
              tag="Gomas deportivas"
              originalPrice={77}
              currentPrice={67}
            />
            <FeatureCard
              image="/images/mock/product-example-1.png"
              title="Yellow Nike"
              stock={6}
              tag="Gomas deportivas"
              originalPrice={77}
              currentPrice={67}
            />
            <FeatureCard
              className="last:mr-6"
              image="/images/mock/product-example-1.png"
              title="Yellow Nike"
              stock={6}
              tag="Gomas deportivas"
              originalPrice={77}
              currentPrice={67}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-6 mb-4">
            <Title
              content="Productos populares"
              className="text-secondary-dark text-[18px]"
            />
            <Body content="Ver todo" className="text-primary-two" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <ProductItem
              image="/images/mock/product-example-3.png"
              title="Pink Lounge Chair"
              price={219}
              category="Muebles"
            />
            <ProductItem
              image="/images/mock/product-example-4.png"
              title="Orange Lounge Chair"
              price={212}
              category="Muebles"
            />
            <ProductItem
              image="/images/mock/product-example-5.png"
              title="Green Lounge Chair"
              price={267}
              category="Muebles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
