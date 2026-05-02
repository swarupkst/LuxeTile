"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TilesGrid from "./TilesGrid";
import TilesHeader from "./TilesHeader";



export default function AllTilesPage() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [tiles, setTiles] = useState([]);
  const [filteredTiles, setFilteredTiles] = useState([]);
  const [searchText, setSearchText] = useState("");
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
        const res = await fetch(
          "https://luxetile-server.onrender.com/products"
        );

        const data = await res.json();

        setTiles(data);
        setFilteredTiles(data);
      } catch (error) {
        console.log("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // search function
  const handleSearch = () => {
    const filtered = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredTiles(filtered);
  };

  if (isPending || !user) {
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full rounded-r-none"
          />

          <button
            onClick={handleSearch}
            className="btn bg-[#19815f] text-white rounded-l-none px-6"
          >
            Search
          </button>
        </div>
      </div>

      {/* Separate Components */}
      <TilesHeader count={filteredTiles.length} />

      <TilesGrid
        tiles={filteredTiles}
        loading={loading}
      />

    </div>
  );
}