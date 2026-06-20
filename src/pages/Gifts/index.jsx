import API_BASE from "../../config.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { IMGS } from "../../data/products";

const occasions = [
  "All Gifts",
  "Anniversary",
  "Birthday",
  "Wedding",
  "Mother's Day",
  "Holiday",
  "Just Because",
];

const priceRanges = [
  "Under Rs. 100,000",
  "Rs. 100,000–250,000",
  "Rs. 250,000–500,000",
  "Over Rs. 500,000",
];

export default function Gifts() {
  const [activeOccasion, setActiveOccasion] = useState("All Gifts");
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        setLoading(true);
        // Fetches all products — update URL when you add a Gifts category to your DB
        const res = await fetch(`${API_BASE}/api/products`);

        const data = await res.json();
        setGifts(data);
      } catch (err) {
        console.error("Error fetching gifts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGifts();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={IMGS.model[4]}
          alt="Gifts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 opacity-70">
            For Someone Special
          </p>
          <h1 className="font-playfair text-5xl font-light">Gifts</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-3 text-xs text-gray-400 tracking-wider">
        <Link to="/" className="hover:text-gold">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">Gifts</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-playfair text-3xl font-light mb-4">
            The Art of <em>Gifting</em>
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every Lumière gift arrives in our signature packaging...
          </p>
        </div>

        {/* Occasion Filter */}
        <div className="flex gap-3 flex-wrap justify-center mb-10">
          {occasions.map((o) => (
            <button
              key={o}
              onClick={() => setActiveOccasion(o)}
              className={`text-[10px] tracking-[0.15em] uppercase px-5 py-2 border transition ${
                activeOccasion === o
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-600 hover:border-gold hover:text-gold"
              }`}
            >
              {o}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="flex gap-3 flex-wrap justify-center mb-12">
          {priceRanges.map((r) => (
            <span
              key={r}
              className="text-[10px] tracking-wider text-gray-500 border border-gray-200 px-4 py-1.5 cursor-pointer hover:border-gold hover:text-gold transition"
            >
              {r}
            </span>
          ))}
        </div>

        {/* Products */}
        {loading ? (
          <p className="text-gray-500 text-center">Loading gifts...</p>
        ) : gifts.length === 0 ? (
          <p className="text-gray-400 text-center">No gifts found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {gifts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        {/* Blue Box Section */}
        <div className="mt-20 bg-gray-50 p-12 md:p-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Signature Experience
            </p>
            <h2 className="font-playfair text-3xl font-light mb-6">
              The Iconic Blue Box
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Every Lumière purchase arrives beautifully packaged...
            </p>
            <Link to="/jewelry" className="luxury-btn inline-block">
              Shop All Gifts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
