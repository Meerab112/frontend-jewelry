import API_BASE from "../../config.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMGS } from "../../data/products";

export default function WorldOfBrand() {
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);
  const [values, setValues] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "https://backend-jewelry-production.up.railway.app${API_BASE}/api/brand-content",
        );

        if (!res.ok) throw new Error("Failed to fetch brand content");

        const data = await res.json();

        setStories(data.stories || []);
        setEvents(data.events || []);
        setValues(data.values || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMGS.model[3]}
          alt="World of Lumière"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="font-playfair text-5xl md:text-7xl font-light">
            World of <em>Lumière</em>
          </h1>
        </div>
      </section>

      {/* LOADING / ERROR */}
      <div className="text-center py-6">
        {loading && <p className="text-gray-500">Loading brand content...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      {/* BRAND STORY STATIC (you can also move this to backend later) */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="font-playfair text-4xl font-light mb-8">
          A Legacy of <em>Excellence</em>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          For over a century, Lumière & Co. has been synonymous with
          extraordinary beauty and craftsmanship.
        </p>
      </section>

      {/* STORIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-light mb-12">Our Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((s, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden aspect-video mb-5">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                <h3 className="text-xl font-light mb-2">{s.title}</h3>

                <p className="text-sm text-gray-600 mb-3">{s.desc}</p>

                <Link to={s.link || "/"} className="text-xs uppercase border-b">
                  Read More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-light mb-12">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div key={i} className="border group">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={e.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-6">
                <p className="text-xs text-gold">{e.date}</p>
                <h3 className="text-lg font-light">{e.title}</h3>
                <p className="text-sm text-gray-500">{e.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-light mb-14">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((v, i) => (
              <div key={i}>
                <h3 className="text-xl font-light mb-4">{v.title}</h3>
                <p className="text-sm text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FALLBACK */}
      {!loading && stories.length === 0 && (
        <p className="text-center text-gray-400 py-10">
          No brand content found
        </p>
      )}

      {/* FOOTER */}
      <div className="text-center py-8 text-xs text-gray-400">
        <Link to="/">Home</Link> / World of Lumière
      </div>
    </div>
  );
}
