"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "../../public/hero.png";
import Marquee from "react-fast-marquee";
import Featured from "@/components/Featured";

export default function HomePage() {

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

      {/* FEATURED COMPONENT */}
      <Featured />

    </main>
  );
}