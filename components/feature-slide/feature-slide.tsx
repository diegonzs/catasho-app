import { FeatureCard } from "components/feature-card";

export const FeatureSlide = () => {
  return (
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
  );
};
