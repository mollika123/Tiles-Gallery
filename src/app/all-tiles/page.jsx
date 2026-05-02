"use client";

import { useEffect, useState } from "react";
import { Chip, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch from public/data.json
  useEffect(() => {
    fetch("https://tiles-gallery-murex.vercel.app/data.json", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
      

        setTiles(data.products); 
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  // 🔍 Search filter
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <RotatingLines />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto space-y-6 py-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
        All Tiles Products
      </h1>

      <p className="text-gray-500">
        Explore beautiful tiles and find your perfect design.
      </p>

      {/* 🔍 Search */}
      <div className="max-w-md">
        <Input
          placeholder="Search tiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🧱 Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTiles.length === 0 ? (
          <p className="col-span-4 text-center text-gray-500">
            No tiles found
          </p>
        ) : (
          filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="shadow-lg rounded-xl overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover"
                />
                <Chip className="absolute right-2 top-2 capitalize">
                  {tile.category}
                </Chip>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  {tile.title}
                </h2>

                <p className="font-bold text-gray-900">
                  ${tile.price}
                </p>

                <p className="text-sm text-gray-500">
                  {tile.dimensions}
                </p>

                {/* ⭐ Rating */}
                <div className="flex text-yellow-500 gap-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                {/* Button */}
                <Link href={`/all-tiles/${tile.id}`}>
                  <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTilesPage;