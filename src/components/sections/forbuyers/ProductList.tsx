// ProductList.tsx
"use client";

import ButtonWidget from "@/components/widgets/ButtonWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import LinkWidget from "@/components/widgets/LinkWidget";
import { AreaIcon, Completed, LocationIco } from "@/helpers/ImageHelper";
import { InstagramIcon } from "lucide-react";
import ProductListStatic from "@/components/sections/home/ProductListStatic"

interface Product {
  id: number;
  location: string;
  cent: number;
  area: string;
  price: string;
  image: string;
  instaLink: string;
  category: string;
  label: string;
  overView: string;
  note: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-300 hover:-translate-y-2"
        >
          <LinkWidget href={item.instaLink || ""} target="_blank">
            <div className="relative h-56">
              <ImageWidget src={item.image} alt={item.title} fill className="object-cover" />
              <span
                className={`absolute top-2 left-0 text-xs font-semibold text-white py-1 px-3 ${
                  item.label === "Ongoing" ? "bg-green-500" : "bg-blue-500"
                }`}
              >
                {item.label}
              </span>
            </div>
          </LinkWidget>

          <div className="px-3 py-4">
            <h3 className="text-sm font-bold text-black mb-2 line-clamp-2 h-[42px]">
              {item.note}
            </h3>
            <p className="text-sm font-bold mb-2">
              <span className="mr-1">₹</span>{item.price} / {item.cent} cent
            </p>

            <div className="flex items-center gap-2 mb-2">
              <ImageWidget src={LocationIco} alt="location" className="w-4 h-4 object-cover" />
              <span className="text-sm text-gray-600">{item.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600 mb-2">
              <div className="flex gap-2">
                <ImageWidget src={Completed} alt="img" className="w-4 h-4 object-cover" />
                <span className="flex flex-col">
                  <strong>Type:</strong> {item.category}
                </span>
              </div>
              <div className="flex gap-2">
                <ImageWidget src={AreaIcon} alt="img" className="w-4 h-4 object-cover" />
                <span className="flex flex-col">
                  <strong>Area:</strong> {item.area} sqft
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <LinkWidget href={`/products/${item.id}`}>
                <ButtonWidget className="orange-button group rounded-[60px] px-5 h-10 text-[12px]">
                  EXPLORE MORE
                </ButtonWidget>
              </LinkWidget>

              {item.instaLink && (
                <LinkWidget href={item.instaLink} target="_blank">
                  <InstagramIcon />
                </LinkWidget>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
