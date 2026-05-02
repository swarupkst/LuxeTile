"use client";

import Link from "next/link";

export default function TilesGrid({ tiles, loading }) {

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={tile.images?.[0]}
              alt={tile.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <span className="absolute top-3 left-3 badge badge-success font-semibold capitalize">
              {tile.category}
            </span>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg">
              {tile.title}
            </h3>

            <p className="text-primary font-bold text-xl mt-1">
              ${tile.price}
            </p>

            <Link
              href={`/tile/${tile.id}`}
              className="btn bg-[#19815f] text-white w-full mt-4"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}