import {
  ChatIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { Button } from "components/button/button";
import { Body, Title } from "components/typography";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ProductPage: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();
  const totalSlides = 3;
  return (
    <div>
      <div className="relative mb-6">
        <AwesomeSlider
          bullets={false}
          organicArrows={true}
          onTransitionEnd={(e) => setCurrentIndex(e.currentIndex + 1)}
        >
          <div data-src="/images/mock/product-example-6.png" />
          <div data-src="/images/mock/product-example-7.jpg" />
          <div data-src="/images/mock/product-example-8.jpg" />
        </AwesomeSlider>
        <div className="absolute top-0 py-8 px-6 flex justify-between items-center w-full z-50">
          <div onClick={() => router.back()} className="p-2 pl-0">
            <ChevronLeftIcon className="w-6 text-black" />
          </div>
          <ShareIcon className="w-6 text-black" />
        </div>
        <div className="absolute py-[6px] px-2 rounded bg-white bottom-4 right-6 z-50">
          <Body type="2" className="text-black">
            {currentIndex} / {totalSlides}
          </Body>
        </div>
      </div>
      <div className="px-6 pb-52">
        <div className="flex items-end mb-4">
          <p className="text-[20px] font-bold text-secondary-dark mr-2">$67</p>
          <p className="text-base font-bold text-primary-one line-through mr-2">
            $67
          </p>
          <p className="border-l text-xs border-secondary pl-1 text-secondary">
            Quedan 6
          </p>
        </div>
        <Title
          content="Yellow Sweater Hype"
          className="text-secondary-dark mb-4"
        />
        <Button content="Descuento" classes={{ container: "mb-8" }} />
        <div className="w-full py-4 px-5 bg-[#C1C1C1] bg-opacity-10 rounded">
          <p className="text-base font-bold mb-6">Information del producto</p>
          <p className="text-sm">
            This shirt is great for everyday wear for young and old alike. so
            that you do not have trouble washing it ...
          </p>
          <div className="flex w-full justify-center items-center">
            <p className="text-sm text-primary-one text-center mr-2">
              Leer Más
            </p>
            <ChevronUpIcon className="w-2 text-primary-one" />
          </div>
        </div>
      </div>
      <footer
        className="w-full fixed bottom-0 px-6 py-7 bg-white"
        style={{ boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.04)" }}
      >
        <Button
          isGradient
          isPrimary
          classes={{
            container: "py-4 w-full flex justify-center items-center",
          }}
        >
          <ChatIcon className="w-6 text-white" />
          <p className="text-sm text-white font-bold ml-3">
            Contactar por este producto
          </p>
        </Button>
      </footer>
    </div>
  );
};

export default ProductPage;
