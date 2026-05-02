"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Featured() {

  const [featuredTiles, setFeaturedTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await fetch("https://luxetile-server.onrender.com/products");
        const data = await res.json();

        setFeaturedTiles(data.slice(0, 4));

      } catch (error) {

        console.log("Fetch error:", error);

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (

    <section className="container mx-auto px-4 py-16 lg:py-24">

      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Collections
        </h2>

        <p className="text-base-content/70 max-w-xl mx-auto">
          Handpicked designs that are currently trending.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {featuredTiles.map((tile) => (

          <div
            key={tile.id}
            className="card bg-base-100 shadow-xl border border-base-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >

            <figure className="h-60 relative overflow-hidden group">

              <img
                src={tile.images?.[0]}
                alt={tile.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 badge badge-success font-semibold">
                {tile.category}
              </div>

            </figure>

            <div className="card-body">

              <h3 className="card-title text-xl font-bold">
                {tile.title}
              </h3>

              <p className="text-2xl font-semibold text-primary mt-2">
                ${tile.price}
              </p>

              <div className="card-actions justify-end mt-6">

                <Link
                  href={`/tile/${tile.id}`}
                  className="btn btn-outline btn-success w-full"
                >
                  View Details
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}