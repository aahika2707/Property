"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const API_URL = "https://script.google.com/macros/s/AKfycbxHKSlSz2Q13bYWreGmG6cxFeAunKw0fCaN09nQsaSW9Is8BdT7guGf0o_vbPg1Bwzc/exec"

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
  });
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProperties(data);
    } catch (err) {
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
      console.log("New Property Data:", newProp);
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
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🏡 Admin Dashboard</h1>

      {/* Add Property Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Location</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Location"
              value={newProp.location}
              onChange={e => setNewProp({ ...newProp, location: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Cent</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Cent"
              value={newProp.cent}
              onChange={e => setNewProp({ ...newProp, cent: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Area</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Area"
              value={newProp.area}
              onChange={e => setNewProp({ ...newProp, area: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Image</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Image URL"
              value={newProp.image}
              onChange={e => setNewProp({ ...newProp, image: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Price</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Price"
              value={newProp.price}
              onChange={e => setNewProp({ ...newProp, price: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Instagram Link</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="https://instagram.com/..."
              value={newProp.instaLink}
              onChange={e => setNewProp({ ...newProp, instaLink: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newProp.category}
              onChange={e => setNewProp({ ...newProp, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Farm Land">Farm Land</option>
              <option value="House Sale">House Sale</option>
              <option value="LAND">LAND</option>
              <option value="Luxurious House">Luxurious House</option>
              <option value="Plot">Plot</option>
              <option value="Residential Plot for Sale">Residential Plot for Sale</option>
              <option value="Residential Property">Residential Property</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Label</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. New, Premium"
              value={newProp.label}
              onChange={e => setNewProp({ ...newProp, label: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Over View</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Short overview"
              value={newProp.overView}
              onChange={e => setNewProp({ ...newProp, overView: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Note</label>
            <input
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Short Note"
              value={newProp.note}
              onChange={e => setNewProp({ ...newProp, note: e.target.value })}
            />
          </div>
        </div>
        <button
          onClick={addProperty}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Adding..." : "Add Property"}
        </button>
      </div>

      {/* Property Table */}
      <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Properties List</h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Location</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Cent</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Area</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Instagram</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Label</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Over View</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Note</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{p.id}</td>
                  <td className="px-4 py-2">{p.location}</td>
                  <td className="px-4 py-2">{p.cent}</td>
                  <td className="px-4 py-2">{p.area}</td>
                  <td className="px-4 py-2">{p.image}</td>
                  <td className="px-4 py-2">{p.price}</td>
                  <td className="px-4 py-2">
                    {p.instaLink ? <a href={p.instaLink} target="_blank" className="text-blue-600 hover:underline">View</a> : "-"}
                  </td>
                  <td className="px-4 py-2">{p.category}</td>
                  <td className="px-4 py-2">{p.label}</td>
                  <td className="px-4 py-2">{p.overView}</td>
                  <td className="px-4 py-2">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
