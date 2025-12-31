"use client";

import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function CategoryProfileCard() {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md text-center border border-gray-100">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/profile.jpg" // Change your image path
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full object-cover w-28 h-28 border-4 border-white shadow-md"
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">sell widely</h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-yellow-500 text-xl mt-3">
          <Facebook className="cursor-pointer hover:text-yellow-600" />
          <Instagram className="cursor-pointer hover:text-yellow-600" />
          {/* <Whata className="cursor-pointer hover:text-yellow-600" /> */}
        </div>

        {/* Status */}
        <p className="text-red-600 font-semibold mt-3">Day Off!</p>

        {/* Divider */}
        <div className="w-3/4 mx-auto border-b border-gray-300 my-5"></div>

        {/* Details Section */}
        <div className="space-y-3 text-left px-2 text-sm md:text-base">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Location:</span>
            <span className="text-yellow-600">NGO colony</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-yellow-600 break-all">ms.sellwidely@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Phone:</span>
            <span className="text-yellow-600">9047373373</span>
          </div>
        </div>

      </div>
    </div>
  );
}
