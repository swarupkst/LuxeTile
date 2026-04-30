import Link from "next/link";

export const metadata = {
  title: "See all Tiles",
  description: "Choose your Tiles",
};

const allTiles = [
  { id: "tile_001", title: "Ceramic Blue Tile", category: "ceramic", price: 45.99, image: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_002", title: "Modern Geometric", category: "porcelain", price: 55.00, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_003", title: "Vintage Floral", category: "ceramic", price: 30.50, image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_004", title: "Marble White Finish", category: "marble", price: 85.99, image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_005", title: "Rustic Terracotta", category: "terracotta", price: 25.00, image: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_006", title: "Slate Grey Matte", category: "slate", price: 60.00, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_007", title: "Glossy Subway", category: "ceramic", price: 15.50, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80" },
  { id: "tile_008", title: "Terrazzo Mix", category: "terrazzo", price: 75.00, image: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&w=400&q=80" },
];

export default function AllTilesPage() {
    
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">

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
          <button className="btn  bg-[#19815f] text-white rounded-l-none px-6">
            Search
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">All Tiles</h2>
        <p className="text-sm text-gray-500">{allTiles.length} items</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allTiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={tile.image}
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