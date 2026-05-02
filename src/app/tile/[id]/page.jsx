"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SingleTilePage() {

  const params = useParams();
  const id = params.id;

  const router = useRouter();

  // Authentication
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [tile, setTile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {

    if (!isPending && !user) {
      router.replace("/login");
    }

  }, [isPending, user, router]);

  useEffect(() => {

    const fetchTile = async () => {

      try {

        const res = await fetch(
          `https://luxetile-server.onrender.com/products/${id}`
        );

        const data = await res.json();

        setTile(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    if (id && user) {
      fetchTile();
    }

  }, [id, user]);

  // Auth Loading
  if (isPending || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  // Data Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (!tile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Tile Not Found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Breadcrumb */}
      <div className="text-sm mb-8 border-b pb-3">

        <div className="flex gap-2 flex-wrap">

          <Link href="/" className="hover:underline">
            Home
          </Link>

          <span>/</span>

          <Link href="/all-tiles" className="hover:underline">
            Tiles
          </Link>

          <span>/</span>

          <span className="text-primary">
            {tile.title}
          </span>

        </div>

      </div>

      {/* Main */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Swiper Slider */}
        <div className="rounded-2xl overflow-hidden shadow-lg">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-[500px]"
          >

            {tile.images?.map((img, index) => (

              <SwiperSlide key={index}>

                <img
                  src={img}
                  alt={tile.title}
                  className="w-full h-[500px] object-cover"
                />

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

        {/* Details */}
        <div className="space-y-6">

          <div>

            <div className="flex gap-2 mb-2 flex-wrap">

              <span className="badge badge-success capitalize">
                {tile.category}
              </span>

              {tile.style && (
                <span className="badge badge-outline">
                  {tile.style}
                </span>
              )}

            </div>

            <h1 className="text-4xl font-bold">
              {tile.title}
            </h1>

            <p className="text-2xl text-primary font-semibold mt-2">
              ${tile.price}
            </p>

          </div>

          <p className="text-gray-600 leading-relaxed">
            {tile.description}
          </p>

          {/* Info */}
          <div className="bg-base-200 p-5 rounded-xl space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Material</span>

              <span className="font-medium">
                {tile.material}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Dimensions</span>

              <span className="font-medium">
                {tile.dimensions}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Currency</span>

              <span className="font-medium">
                {tile.currency}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Stock</span>

              <span
                className={
                  tile.inStock
                    ? "text-green-600 font-medium"
                    : "text-red-500 font-medium"
                }
              >
                {tile.inStock
                  ? "Available"
                  : "Out of Stock"}
              </span>
            </div>

          </div>

          {/* Tags */}
          {tile.tags && (

            <div className="flex flex-wrap gap-2">

              {tile.tags.map((tag, i) => (

                <span
                  key={i}
                  className="badge badge-ghost"
                >
                  #{tag}
                </span>

              ))}

            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">

            <button
              className="btn bg-[#19815f] text-white flex-1"
              disabled={!tile.inStock}
            >
              Add to Cart
            </button>

            <button className="btn btn-outline flex-1">
              Contact
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}