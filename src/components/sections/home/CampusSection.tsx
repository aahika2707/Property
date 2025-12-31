"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonWidget from "@/components/widgets/ButtonWidget";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import LinkWidget from "@/components/widgets/LinkWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import TitleWidget from "@/components/widgets/TitleWidget";
import {
  AreaIcon,
  Completed,
  LocationIco,
} from "@/helpers/ImageHelper";
import { InstagramIcon } from "lucide-react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbx7wQlPlUrripmkpcMq6s83ZgASYP2HZ_sWMZ5m5O74kqPkSucCHw9TKHhZonjxY8X7/exec";

interface Property {
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

const getInstagramThumbnail = (url: string) => {
  if (!url) return "";
  try {
    const match = url.match(/instagram\.com\/(p|reel)\/([^/?]+)/);
    if (match && match[2]) {
      const code = match[2];
      return `https://www.instagram.com/p/${code}/media/?size=l`;
    }
  } catch {}
  return "";
};

const CampusSection = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Property[]>([]);
  const [visibleCount, setVisibleCount] = useState(8); // only show 8 initially

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const updatedData = data.map((item: Property) => ({
          ...item,
          image: item.instaLink
            ? getInstagramThumbnail(item.instaLink)
            : item.image,
        }));
        console.log("Fetched Projects:", updatedData);
        setProjects(updatedData);
      } catch (err) {
        console.error("Failed to fetch sheet data", err);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <ContainerWidget>
      <ScrollWidget animation="slideRight">
        <div>
          <TitleWidget
            title="Exclusive Offer For You"
            subTitle="Plots & Homes Just For You"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 py-8">
          {projects.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <LinkWidget href={item.instaLink || ""}>
                <div className="relative h-56">
                  <ImageWidget
                    src={item.image}
                    alt={item.label || ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          25vw"
                  />
                  <span
                    className={`absolute top-2 left-0 text-xs font-semibold text-white py-1 px-3 ${
                      item.label === "Ongoing"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </LinkWidget>

              {/* CONTENT */}
              <div className="px-3 py-4">
                <h3 className="text-sm font-bold text-black mb-2 line-clamp-2 h-[42px]">
                  {item.note}
                </h3>

                <p className="text-sm font-bold mb-2">
                  <span className="mr-1">₹</span>
                  {item.price} / {item.cent} cent
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <ImageWidget
                    src={LocationIco}
                    alt="location"
                    className="w-4 h-4 object-cover"
                  />
                  <span className="text-sm text-gray-600">
                    {item.location}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600 mb-2">
                  <div className="flex gap-2">
                    <ImageWidget
                      src={Completed}
                      alt="category"
                      className="w-4 h-4 object-cover"
                    />
                    <span className="flex flex-col">
                      <strong>Type:</strong>
                      {item.category}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <ImageWidget
                      src={AreaIcon}
                      alt="area"
                      className="w-4 h-4 object-cover"
                    />
                    <span className="flex flex-col">
                      <strong>Area:</strong>
                      {item.area} sqft
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <LinkWidget href={item.instaLink || ""} target="_blank" rel="noopener noreferrer">
                    <ButtonWidget className="orange-button group rounded-[60px] px-5 h-10 text-[12px] 3xl:text-[14px]">
                      EXPLORE MORE
                    </ButtonWidget>
                  </LinkWidget>

                  {item.instaLink && (
                    <LinkWidget href={item.instaLink} target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                    </LinkWidget>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => router.push("/for-buyers")}
              className="px-6 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </ScrollWidget>
    </ContainerWidget>
  );
};

export default CampusSection;
