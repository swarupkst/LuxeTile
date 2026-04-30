import Link from "next/link";
import Image from "next/image";
import Hero from "../../public/hero.png"
// 💡 Data Fetching Function (সার্ভার থেকে ডেটা আনার জন্য)
async function getFeaturedTiles() {
  /* 
    আপনার JSON Server রেডি হলে নিচের কোডটি আনকমেন্ট করে ব্যবহার করবেন:
    const res = await fetch('http://localhost:5000/tiles?_limit=4', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch tiles');
    return res.json();
  */

  // আপাতত ডিজাইনের জন্য ডেমো ডেটা রিটার্ন করা হচ্ছে
  return [
    { id: "tile_001", title: "Ceramic Blue Tile", price: 45.99, category: "Ceramic", image: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&w=600&q=80" },
    { id: "tile_002", title: "Modern Geometric", price: 55.00, category: "Porcelain", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" },
    { id: "tile_003", title: "Vintage Floral", price: 30.50, category: "Ceramic", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" },
    { id: "tile_004", title: "Marble White Finish", price: 85.99, category: "Marble", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80" },
  ];
}

export default async function HomePage() {
  const featuredTiles = await getFeaturedTiles();

  return (
    <main className="min-h-screen">
      
      {/* ১. Banner (Hero Section) */}
       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <Image
          src={Hero}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-2xl">
          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Discover Your <br/><span className="text-[#0f9468] text-4xl md:text-6xl">Perfect Aesthetic</span>
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

      {/* ২. Marquee (Scrolling Text) */}
      <section className="bg-[#244d3f] text-neutral-content py-3 overflow-hidden border-y border-neutral-focus">
        <div className="whitespace-nowrap inline-block animate-marquee">
          <span className="text-sm md:text-base font-medium tracking-wider px-4">
            🚀 New Arrivals: Premium Ceramic Blue Tile | ✨ Weekly Feature: Modern Geometric Patterns | 🌟 Join the Community and share your stunning renovations! | 🚀 New Arrivals: Marble White Finish
          </span>
          {/* স্মুথ লুপের জন্য টেক্সটটি একবার রিপিট করা হলো */}
          <span className="text-sm md:text-base font-medium tracking-wider px-4">
            🚀 New Arrivals: Premium Ceramic Blue Tile | ✨ Weekly Feature: Modern Geometric Patterns | 🌟 Join the Community and share your stunning renovations! | 🚀 New Arrivals: Marble White Finish
          </span>
        </div>
      </section>

      {/* ৩. Featured Tiles Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
          <p className="text-base-content/70 max-w-xl mx-auto">
            Handpicked designs that are currently trending. Bring a touch of elegance to your floors and walls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTiles.map((tile) => (
            <div key={tile.id} className="card bg-base-100 shadow-xl border border-base-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <figure className="h-60 relative overflow-hidden group">
                <img 
                  src={tile.image} 
                  alt={tile.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 badge badge-success">{tile.category}</div>
              </figure>
              
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">{tile.title}</h3>
                <p className="text-2xl font-semibold text-primary mt-2">${tile.price}</p>
                
                <div className="card-actions justify-end mt-6">
                  <Link href={`/tile/${tile.id}`} className="btn btn-outline btn-success w-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSS for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </main>
  );
}