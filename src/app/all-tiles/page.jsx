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
  const [loading, setLoading] = useState(true); // ✅ FIXED

  // fetch data
  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // filter tiles
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 LOADING UI (IMPORTANT)
  if (loading) {
    return (
  <div className="flex min-h-screen justify-center items-center ">


          <RotatingLines></RotatingLines>
        </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto space-y-5 py-8">
      
      <h1 className="text-5xl text-gray-800 font-semibold mt-8">
        All Tiles Products
      </h1>

      <p className="text-gray-500">
        Where everyone finds inspiration: explore and let yourself be conquered!
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
            <div key={tile.id} className="shadow-lg rounded-xl overflow-hidden bg-white">
              
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

              <div className="p-5 space-y-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  {tile.title}
                </h2>

                <p className="font-bold text-gray-900">${tile.price}</p>
                <p className="text-sm text-gray-500">{tile.dimensions}</p>

                <div className="flex text-yellow-500 gap-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <Link href={`/all-tiles/${tile.id}`}>
                  <button className="rounded-full w-full bg-gray-600 py-2 font-bold text-white hover:bg-blue-700 transition">
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