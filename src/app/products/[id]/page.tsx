import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

/* ---- Product type ---- */
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
  note: string;
  overView: string;
}

/* ---- API ---- */
const API_URL =
  "https://script.google.com/macros/s/AKfycbx7wQlPlUrripmkpcMq6s83ZgASYP2HZ_sWMZ5m5O74kqPkSucCHw9TKHhZonjxY8X7/exec";

/* ---- Instagram thumbnail ---- */
const getInstagramThumbnail = (url: string) => {
  if (!url) return "";
  const match = url.match(/instagram\.com\/(p|reel)\/([^/?]+)/);
  return match ? `https://www.instagram.com/p/${match[2]}/media/?size=l` : "";
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(API_URL, { cache: "no-store" });
  const data = await res.json();

  const product: Product | undefined = data
    .map((item: any, index: number) => ({
      id: Number(item.id) || index + 1,
      location: item.location || "",
      cent: Number(item.cent) || 0,
      area: item.area || "",
      price: item.price || "",
      instaLink: item.instaLink || "",
      category: item.category || "",
      label: item.label || "",
      note: item.note || "",
      overView: item.overView || "",
      image: item.instaLink
        ? getInstagramThumbnail(item.instaLink)
        : item.image || "",
    }))
    .find((p: Product) => p.id === Number(id));

  if (!product) notFound();

  return (
    <div className="bg-gray-100">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PRODUCT IMAGE */}
        <div className="lg:col-span-2 relative h-[320px] md:h-[450px] rounded-xl overflow-hidden">
          <Image
            src={product.image || "/placeholder.jpg"}
            alt={product.note}
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover"
          />
        </div>

        {/* SELLER CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <Image
              src={product.image || "/placeholder.jpg"} // 👈 PRODUCT IMAGE
              alt="Seller / Agent"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="mt-3 text-xl font-semibold">Sell Widely</h2>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-3 text-lg">
            <a
              href="https://www.facebook.com/reel/1404406973859357"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={product.instaLink || "https://www.instagram.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=9047373373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          <p className="text-red-500 font-semibold mt-3">Day Off!</p>

          <hr className="my-4" />

          <div className="text-sm space-y-2 text-left">
            <p>
              <strong>Email:</strong>{" "}
              <span className="text-yellow-600">ms.sellwidely@gmail.com</span>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <span className="text-yellow-600">9047373373</span>
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- COMMON CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <h1 className="text-3xl font-bold">{product.note}</h1>

        <p className="text-xl font-bold mt-2">
          ₹{product.price} / {product.cent} cent
        </p>

        <div className="mt-4 space-y-1 text-gray-700">
          <p><strong>Location:</strong> {product.location}</p>
          <p><strong>Area:</strong> {product.area} sqft</p>
          <p><strong>Type:</strong> {product.category}</p>
        </div>

        {product.overView && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {product.overView.split(",").map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}

        {product.instaLink && (
          <Link
            href={product.instaLink}
            target="_blank"
            className="inline-block mt-6 text-blue-600 underline"
          >
            View on Instagram
          </Link>
        )}
      </div>
    </div>
  );
}
