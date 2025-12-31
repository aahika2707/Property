import Image from "next/image";

interface Product {
  id: number;
  location: string;
  cent: number;
  area: string;
  price: string;
  image: string;
  category: string;
  note: string;
}

const products: Product[] = [
  {
    id: 1,
    location: "Vellalanvilai",
    cent: 37,
    area: "20 ft frontage",
    price: "16 Lakhs",
    image: "/land.jpg",
    category: "LAND",
    note: "Tar road facing land",
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg shadow p-4">
        
        {/* IMAGE */}
        <div className="relative h-[350px] rounded overflow-hidden">
          <Image
            src={product.image}
            alt={product.note}
            fill
            className="object-cover"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-2">
            LAND ({product.location})
          </h1>

          <p className="text-lg font-semibold mb-4">
            Price: ₹{product.price}
          </p>

          <button className="bg-black text-white px-6 py-2 rounded mb-6">
            Schedule Visit
          </button>

          <div className="border-t pt-4">
            <h3 className="font-bold mb-2">Overview</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>{product.cent} cent</li>
              <li>{product.area}</li>
              <li>Tar road facing</li>
              <li>{product.price} total</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
