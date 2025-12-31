"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const API_URL =
  "https://script.google.com/macros/s/AKfycby5xhhZFxETMvYvNcgmnSq8cppUF0RbkPc-WqRs4H0Qp_pH-03MYP7L4NJ6qGiaryUu/exec";

interface Property {
  id: number;
  location: string;
  price: string;
  instaLink: string;
  category: string;
  label: string;
  overView: string;
  cent: number;
  image: string;
  area: string;
  note: string;

  pathway: string;
  approvals: string;
  frontage: string;
  builtUp: string;
  facing: string;
}

const AdminDashboard = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [newProp, setNewProp] = useState<Omit<Property, "id">>({
    location: "",
    price: "",
    instaLink: "",
    category: "",
    label: "",
    overView: "",
    cent: 0,
    image: "",
    area: "",
    note: "",

    pathway: "",
    approvals: "",
    frontage: "",
    builtUp: "",
    facing: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProperties(data);
    } catch {
      toast.error("Failed to fetch properties");
    }
    setLoading(false);
  };

  const addProperty = async () => {
    if (!newProp.location || !newProp.price) {
      toast.error("Please fill required fields");
      return;
    }
    setLoading(true);
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newProp),
      });

      toast.success("Property added successfully!");
      setNewProp({
        location: "",
        price: "",
        instaLink: "",
        category: "",
        label: "",
        overView: "",
        cent: 0,
        image: "",
        area: "",
        note: "",

        pathway: "",
        approvals: "",
        frontage: "",
        builtUp: "",
        facing: "",
      });
      fetchProperties();
    } catch {
      toast.error("Failed to add property");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Toaster position="top-right" />

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🏡 Admin Dashboard
      </h1>

      {/* ADD PROPERTY */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Property</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["Location", "location"],
            ["Cent", "cent"],
            ["Size", "area"],
            ["Image URL", "image"],
            ["Price", "price"],
            ["Instagram Link", "instaLink"],
            ["Label", "label"],
            ["Overview", "overView"],
            ["Note", "note"],
            ["Pathway", "pathway"],
            ["Approvals", "approvals"],
            ["Frontage", "frontage"],
            ["Built up", "builtUp"],
            ["Facing", "facing"],
          ].map(([label, key]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                value={(newProp as any)[key]}
                onChange={(e) =>
                  setNewProp({ ...newProp, [key]: e.target.value })
                }
              />
            </div>
          ))}

          {/* CATEGORY */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              className="mt-1 p-2 w-full border rounded-md"
              value={newProp.category}
              onChange={(e) =>
                setNewProp({ ...newProp, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              <option>Commercial Property</option>
              <option>Farm Land</option>
              <option>House Sale</option>
              <option>LAND</option>
              <option>Luxurious House</option>
              <option>Plot</option>
              <option>Residential Plot for Sale</option>
              <option>Residential Property</option>
            </select>
          </div>
        </div>

        <button
          onClick={addProperty}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          {loading ? "Adding..." : "Add Property"}
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {[
                "ID",
                "Location",
                "Cent",
                "Area",
                "Price",
                "Pathway",
                "Approvals",
                "Frontage",
                "BuiltUp",
                "Facing",
              ].map((h) => (
                <th key={h} className="px-4 py-2 text-left font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {properties.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{p.id}</td>
                <td className="px-4 py-2">{p.location}</td>
                <td className="px-4 py-2">{p.cent}</td>
                <td className="px-4 py-2">{p.area}</td>
                <td className="px-4 py-2">{p.price}</td>
                <td className="px-4 py-2">{p.pathway}</td>
                <td className="px-4 py-2">{p.approvals}</td>
                <td className="px-4 py-2">{p.frontage}</td>
                <td className="px-4 py-2">{p.builtUp}</td>
                <td className="px-4 py-2">{p.facing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
