"use client";

import { useEffect, useState } from "react";
import ContainerWidget from "@/components/widgets/ContainerWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import LinkWidget from "@/components/widgets/LinkWidget";
import ButtonWidget from "@/components/widgets/ButtonWidget";
import TitleWidget from "@/components/widgets/TitleWidget";
import ScrollWidget from "@/components/widgets/ScrollWidget";
import { LocationIco } from "@/helpers/ImageHelper";

const sheetURL =
  "https://opensheet.elk.sh/1FExtxjRSd7SH-bHdryk9pikNQwc1znnZ9brrOJaRjvQ/Sheet1";

// 🔥 Function: Instagram Thumbnail Extractor
const getInstagramThumbnail = (url: string) => {
    console.log("url", url)
  if (!url) return "";

  try {
    const match = url.match(/instagram\.com\/p\/([^/?]+)/);
    console.log("match", match)
    if (match && match[1]) {
      const code = match[1];
      console.log("code", code)
      return `https://www.instagram.com/p/${code}/media/?size=l`;
    }
  } catch {}

  return "";
};


const PropertySection = () => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const res = await fetch(sheetURL);
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error("Sheet Fetch Error:", err);
      }
    };

    fetchSheet();
  }, []);

  return (
    <ContainerWidget>
      <ScrollWidget animation="slideUp">
        <TitleWidget
          title="Property Listings"
          subTitle="Plots & Homes Just For You"
        />

        {properties.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            📌 No properties found (Please add data in sheet)
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
          {properties.map((item, index) => {
            const instaLink = item.instaLink?.startsWith("http")
              ? item.instaLink
              : "";

            // 🔥 If insta link exists → Thumbnail else fallback
            const thumbImage = instaLink
              ? getInstagramThumbnail(instaLink)
              : "";
            console.log("thumbImage", thumbImage)
            return (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition duration-300"
              >
                {/* Image */}
                <div className="relative h-56 w-full">
                  <ImageWidget
                    src={thumbImage}
                    alt={item.location || "property"}
                    fill
                    className="object-cover"
                    onError={(e: any) =>
                      (e.currentTarget.src =
                        "")
                    }
                  />

                  {item.label && (
                    <span className="absolute top-3 left-3 bg-yellow-500 text-black text-[11px] font-bold px-3 py-1 rounded-lg">
                      {item.label}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {item.location && (
                    <p className="flex items-center text-sm text-gray-600 mb-2">
                      <ImageWidget src={LocationIco} className="w-4 h-4 mr-2" />
                      {item.location}
                    </p>
                  )}

                  {instaLink ? (
                    <LinkWidget href={instaLink}>
                      <p className="text-blue-600 text-sm font-medium hover:underline">
                        Instagram Link 📌
                      </p>
                    </LinkWidget>
                  ) : (
                    <p className="text-gray-400 text-xs">No Insta Link</p>
                  )}

                  {item.priceLabel && (
                    <p className="text-black font-bold text-[15px] my-2">
                      {item.priceLabel}
                    </p>
                  )}

                  <ButtonWidget className="orange-button w-full rounded-lg mt-2 h-10 text-[13px]">
                    View More
                  </ButtonWidget>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollWidget>
    </ContainerWidget>
  );
};

export default PropertySection;
