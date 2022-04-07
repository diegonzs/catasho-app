import NiceModal, { NiceModalHocProps, useModal } from "@ebay/nice-modal-react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { CategoryBox } from "components/category-box";
import { Title } from "components/typography";
import { useScrollBlock } from "hooks/use-scrolll-block";
import { categories } from "mockdata/categories";
import Link from "next/link";
import { useEffect } from "react";
import { FC } from "react";

export const CategoryModal = NiceModal.create(({ name }) => {
  const modal = useModal();
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (modal.visible) {
      blockScroll();
    }
    return () => allowScroll();
  }, [modal.visible]);

  if (!modal.visible) return null;

  return (
    <div className="min-h-screen fixed inset-0 w-full bg-white py-8 p-6">
      <div className="flex justify-center items-center relative mb-12">
        <div onClick={() => modal.hide()} className="absolute left-0">
          <ChevronLeftIcon className="w-6" />
        </div>
        <Title content="Categorías" type="3" className="text-secondary-dark" />
      </div>
      <div className="grid grid-cols-2 grid-flow-row justify-center gap-y-12">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <a>
              <div onClick={() => modal.hide()}>
                <CategoryBox
                  label={category.label}
                  category={category.id}
                  isBig
                  classes={{
                    label: "text-blak text-base text-center max-w-none",
                  }}
                />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
});
