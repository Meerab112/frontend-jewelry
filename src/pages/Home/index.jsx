import API_BASE from "../../config.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "../../components/product/ProductCard";
import { IMGS } from "../../data/products";

const categories = [
  {
    label: "Necklaces & Pendants",
    img: "/images/jewelry/Antique.webp",
    path: "/jewelry",
  },
  {
    label: "Bracelets",
    img: "/images/jewelry/Bangles.webp",
    path: "/jewelry",
  },
  {
    label: "Earrings",
    img: "/images/jewelry/Earrings.webp",
    path: "/jewelry",
  },
  {
    label: "Rings",
    img: "/images/jewelry/Rings.jfif",
    path: "/jewelry",
  },
  {
    label: "Watches",
    img: "/images/jewelry/Watches.jfif",
    path: "/watches",
  },
];

const experience = [
  {
    title: "Book an Appointment",
    desc: "Meet with our jewelry specialists virtually or in-store for personalized recommendations.",
    link: "Book a Virtual Appointment",
    img: IMGS.luxury[0],
  },
  {
    title: "Customer Care",
    desc: "Receive expert assistance regarding orders, products, repairs, and services.",
    link: "Learn More",
    img: IMGS.luxury[1],
  },
  {
    title: "The Iconic Blue Box",
    desc: "Every Lumière purchase arrives beautifully packaged in our signature blue box.",
    link: "Learn More",
    img: IMGS.luxury[2],
  },
];

export default function Home() {
  const sliderRef = useRef(null);

  const [jewelryProducts, setJewelryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  // ✅ FETCH FROM BACKEND (MySQL via Express)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_BASE}/api/products`);

        const data = await res.json();

        setJewelryProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 opacity-80">
            New Collection 2024
          </p>

          <h1 className="font-playfair text-5xl md:text-7xl font-light mb-6 leading-tight">
            Timeless <br />
            <em className="italic">Elegance</em>
          </h1>

          <p className="text-sm tracking-widest uppercase opacity-75 mb-10 max-w-md">
            Extraordinary jewelry crafted for life's most precious moments
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              to="/jewelry"
              className="border border-white text-white text-xs uppercase px-8 py-3.5 hover:bg-white hover:text-black transition"
            >
              Shop Now
            </Link>

            <Link
              to="/high-jewelry"
              className="bg-gold text-black text-xs uppercase px-8 py-3.5 hover:bg-yellow-400 transition"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="px-4 py-8">
        <h2 className="font-playfair text-2xl text-center mb-6">
          Shop by Category
        </h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.path}
              className="group block relative overflow-hidden rounded-sm"
            >
              {/* Tall rectangular image */}
              <div className="h-56 md:h-72 w-full bg-gray-100">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              {/* Text overlay at bottom like Zaivraat */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-4 px-4">
                <p className="text-gray-500 text-xs">Explore our collection</p>
                <h3 className="text-gray-900 font-bold text-xl">{cat.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* SLIDER */}
      <section className="pb-20 bg-luxury-light py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title font-playfair">New Jewelry</h2>

          <div className="relative">
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2"
            >
              <ChevronLeft />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            >
              {loading ? (
                <p className="text-gray-500">Loading products...</p>
              ) : (
                jewelryProducts.map((p) => (
                  <div key={p.id} className="min-w-[260px] md:min-w-[280px]">
                    <ProductCard product={p} />
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="section-title font-playfair">Our Collections</h2>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {jewelryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* EXPERIENCE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title font-playfair">
            The Lumière Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {experience.map((card, i) => (
              <div key={i} className="text-center">
                <img
                  src={card.img}
                  className="aspect-square object-cover mb-6 w-full"
                  alt={card.title}
                />

                <h3 className="font-playfair text-xl mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.desc}</p>

                <a href="#" className="text-xs uppercase border-b">
                  {card.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
