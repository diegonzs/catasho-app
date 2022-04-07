import { useModal } from "@ebay/nice-modal-react";
import { CategoryBox } from "components/category-box";
import { CategoryModal } from "components/category-modal";
import { Input } from "components/input";
import { Body, Title } from "components/typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useStore } from "store/useStore";

export const Hero = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const setSearchValue = useStore((state) => state.setSearchValue);
  const modal = useModal(CategoryModal);
  return (
    <div className="h-[300px] px-6 py-8 bg-[url('/images/backgrounds/hero.png')]">
      <div className="flex justify-between items-center mb-4">
        <img className="w-24" src="/images/brand/logo.png" alt="Logo" />
        <div className="flex gap-3">
          <img
            className="w-6"
            src="/images/social-icons/instagram.png"
            alt=""
          />
          <img className="w-6" src="/images/social-icons/whatsapp.png" alt="" />
        </div>
      </div>
      <Input
        name="search"
        value={value}
        onChange={setValue}
        placeholder="Buscar por producto..."
        withSearchIcon
        cb={() => {
          setSearchValue(value);
          router.push("/search");
        }}
      />
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <Title type="4" content="Categorías" className="text-white" />
          <div onClick={() => modal.show()}>
            <Body type="1" content="Ver todo" className="text-primary-two" />
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/category/vestimenta">
            <a>
              <CategoryBox category="vestimenta" label="Vestimenta" />
            </a>
          </Link>
          <Link href="/category/juegos">
            <a>
              <CategoryBox category="juegos" label="Juegos" />
            </a>
          </Link>
          <Link href="/category/muebles">
            <a>
              <CategoryBox category="muebles" label="Muebles" />
            </a>
          </Link>
          <Link href="/category/todos">
            <a>
              <CategoryBox category="todos" label="Todos los productos" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
