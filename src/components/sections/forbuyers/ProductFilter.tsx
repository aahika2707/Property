'use client';

interface ProductFilterProps {
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
}

const ProductFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
}: ProductFilterProps) => {
  const categories = [
    "Commercial Property",
    "Farm Land",
    "House Sale",
    "LAND",
    "Luxurious House",
    "Plot",
    "Residential Plot for Sale",
    "Residential Property",
  ];

  const locations = [
    "Kanyakumari",
    "Nagercoil",
    "Vellamadam",
    "Kottar",
    "Ramanputhur",
    "Parvathipuram",
    "Suchindram",
    "Anjugramam",
    "Asaripallam",
    "Edalakudy",
    "Thovalai",
    "Aralvaimozhi",
    "Boothapandi",
    "Therisanamcope",
    "Samithoppu",
    "Azhagiapandiapuram",
    "Rajakkamangalam",
    "Manakudy",
    "Pallam",
    "Kurunthencode",
    "Peruvilai",
    "Thuckalay",
    "Eraniel",
    "Villukuri",
    "Neyyoor",
    "Palugal",
    "Muttom",
    "Marthandam",
    "Kuzhithurai",
    "Karungal",
    "Thiruvattar",
    "Mulagumoodu",
    "Attoor",
    "Arumanai",
    "Kaliyakkavilai",
    "Colachel",
    "Midalam",
    "Melmidalam",
    "Thengapattinam",
    "Mandaikadu",
    "Keeriparai",
    "Kalikesam",
    "Pechiparai",
    "Perunchani",
  ];

  return (
    <div className="w-full max-w-sm px-4 py-5 bg-[#f8f8f8] rounded-lg overflow-visible">
      <div className="space-y-2">
        <h3 className="text-base font-semibold">Category</h3>
        <select
          className="w-full border p-2 rounded bg-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2 mt-4">
        <h3 className="text-base font-semibold">Location</h3>
        <select
          className="w-full border p-2 rounded bg-white"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((l, i) => (
            <option key={i} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
