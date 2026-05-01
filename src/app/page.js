"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "../../public/hero.png";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function HomePage() {

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
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        <Image
          src={Hero}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-2xl">

          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Discover Your <br />
            <span className="text-[#0f9468] text-4xl md:text-6xl">
              Perfect Aesthetic
            </span>
          </h1>

          <p className="mb-8 text-xl text-gray-200">
            Elevate your spaces with our premium collection of tiles.
            From modern geometric patterns to classic marble finishes,
            find exactly what your home needs.
          </p>

          <Link
            href="/all-tiles"
            className="btn rounded-e-md bg-[#0f9468] btn-lg shadow-lg hover:scale-105 transition-transform text-gray-100 border-none"
          >
            Browse Now
          </Link>

        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-[#244d3f] text-neutral-content py-3 overflow-hidden border-y border-neutral-focus">

        <Marquee pauseOnHover={true}>

          <span className="text-sm md:text-base font-medium tracking-wider px-4">
            🚀 New Arrivals: Premium Ceramic Blue Tile | ✨ Weekly Feature: Modern Geometric Patterns | 🌟 Join the Community and share your stunning renovations! | 🚀 New Arrivals: Marble White Finish
          </span>
          <span className="text-sm md:text-base font-medium tracking-wider px-4">
            🚀 New Arrivals: Premium Ceramic Blue Tile | ✨ Weekly Feature: Modern Geometric Patterns | 🌟 Join the Community and share your stunning renovations! | 🚀 New Arrivals: Marble White Finish
          </span>
        </Marquee>

      </section>

      {/* FEATURED */}
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

    </main>
  );
}