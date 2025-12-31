"use client";

import { useEffect, useState } from "react";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import ProductFilter from "@/components/sections/forbuyers/ProductFilter";
import ProductList from "./ProductList";
import PaginationWidget from "@/components/widgets/PaginationWidget";

interface Product {
  id: number;
  title: string;
  price: string;
  cent: number;
  location: string;
  area: string;
  category: string;
  label: string;
  note: string;
  instaLink: string;
  image: string;
  overView: string;
}

const API_URL =
  "https://script.google.com/macros/s/AKfycbx7wQlPlUrripmkpcMq6s83ZgASYP2HZ_sWMZ5m5O74kqPkSucCHw9TKHhZonjxY8X7/exec";

export default function ForBuyersSection() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [pagedProducts, setPagedProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Instagram thumbnail helper
  const getInstagramThumbnail = (url: string) => {
    if (!url) return "";
    const match = url.match(/instagram\.com\/(p|reel)\/([^/?]+)/);
    return match && match[2]
      ? `https://www.instagram.com/p/${match[2]}/media/?size=l`
      : "";
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data: Record<string, any>[] = await res.json();

        const mapped: Product[] = data.map((item, index) => ({
          id: Number(item.id) || index + 1,
          title: item.note || item.title || "",
          price: item.price || "",
          cent: Number(item.cent) || 0,
          location: item.location || "",
          area: item.area || "",
          category: item.category || "",
          label: item.label || "",
          note: item.note || "",
          instaLink: item.instaLink || "",
          image: item.instaLink
            ? getInstagramThumbnail(item.instaLink)
            : item.image || "",
          overView: item.overView || "",
        }));

        setAllProducts(mapped);
        setFilteredProducts(mapped);
        setPagedProducts(mapped.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter logic
  useEffect(() => {
    let result = [...allProducts];
    if (selectedCategory)
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    if (selectedLocation)
      result = result.filter(
        (p) => p.location.toLowerCase() === selectedLocation.toLowerCase()
      );

    setFilteredProducts(result);
    setPagedProducts(result.slice(0, 10)); // reset page
  }, [selectedCategory, selectedLocation, allProducts]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <ContainerWidget>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* FILTER SIDEBAR */}
          <div className="w-full lg:max-w-[300px] hidden lg:block sticky top-20 self-start">
            <ProductFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>

          {/* PRODUCT GRID */}
          <div className="w-full">
            {loading ? (
              <div className="text-center text-gray-500 py-20">
                Loading properties...
              </div>
            ) : pagedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <ProductList products={pagedProducts} />
              </div>
            ) : (
              <div className="text-center text-gray-500 py-20">
                No Property found.
              </div>
            )}

            {/* PAGINATION */}
            {!loading && filteredProducts.length > 10 && (
              <div className="pt-10">
                <PaginationWidget
                  items={filteredProducts}
                  itemsPerPage={10}
                  onPageChange={setPagedProducts}
                />
              </div>
            )}
          </div>
        </div>
      </ContainerWidget>
    </section>
  );
}
