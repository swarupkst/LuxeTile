"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AllTilesPage() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // auth redirect
  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/login");
    }
  }, [isPending, user, router]);

  // fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3004/products");
        const data = await res.json();
        setTiles(data);
      } catch (error) {
        console.log("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isPending || loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">

      {/* Header */}
      <div className="bg-base-200 rounded-3xl p-8 md:p-12 mb-12 text-center shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Explore Our Collection
        </h1>
        <p className="text-sm md:text-base text-base-content/70 mb-6">
          Find the perfect tile for your dream space.
        </p>

        <div className="max-w-xl mx-auto flex">
          <input
            type="text"
            placeholder="Search tiles..."
            className="input input-bordered w-full rounded-r-none"
          />
          <button className="btn bg-[#19815f] text-white rounded-l-none px-6">
            Search
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">All Tiles</h2>
        <p className="text-sm text-gray-500">{tiles.length} items</p>
      </div>

      {/* Grid */}
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
              <h3 className="font-semibold text-lg">{tile.title}</h3>
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

    </div>
  );
}