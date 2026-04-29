import Link from "next/link";

export const metadata = {
  title: "Ceramic Blue Tile",
  description: "Premium ceramic tile with a beautiful blue glaze finish. Perfect for modern spaces.",
};

const getTileDetails = async (id) => {
  return {
    id,
    title: "Ceramic Blue Tile",
    description:
      "Premium ceramic tile with a beautiful blue glaze finish. Perfect for modern spaces.",
    image:
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&w=800&q=80",
    category: "Ceramic",
    price: 45.99,
    currency: "USD",
    dimensions: "60x60 cm",
    material: "Ceramic",
    inStock: true,
    creator: "LuxeTile Studio",
    style: "Minimalist",
    tags: ["Blue", "Glazed", "Modern", "Minimalist"],
  };
};

export default async function SingleTilePage({ params }) {
  const tile = await getTileDetails(params.id);

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="text-sm mb-8 border-b pb-3">
        <div className="flex gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/all-tiles" className="hover:underline">Tiles</Link>
          <span>/</span>
          <span className="text-primary">{tile.title}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-[500px] object-cover hover:scale-105 transition"
          />
        </div>

        <div className="space-y-6">

          <div>
            <div className="flex gap-2 mb-2">
              <span className="badge badge-primary">{tile.category}</span>
              <span className="badge badge-outline">{tile.style}</span>
            </div>

            <h1 className="text-4xl font-bold">{tile.title}</h1>
            <p className="text-2xl text-primary font-semibold mt-2">
              ${tile.price}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {tile.description}
          </p>

          <div className="bg-base-200 p-5 rounded-xl space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Creator</span>
              <span className="font-medium">{tile.creator}</span>
            </div>
            <div className="flex justify-between">
              <span>Material</span>
              <span className="font-medium">{tile.material}</span>
            </div>
            <div className="flex justify-between">
              <span>Dimensions</span>
              <span className="font-medium">{tile.dimensions}</span>
            </div>
            <div className="flex justify-between">
              <span>Stock</span>
              <span className={tile.inStock ? "text-green-600" : "text-red-500"}>
                {tile.inStock ? "Available" : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tile.tags.map((tag, i) => (
              <span key={i} className="badge badge-ghost">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              className="btn btn-primary flex-1"
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