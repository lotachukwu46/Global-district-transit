import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- Static Data ---
const OFFERINGS = [
  {
    title: "International Shipping",
    desc: "Secure cross-border delivery with full visibility and timely updates.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop",
  },
  {
    title: "Private Courier",
    desc: "Discreet, time-sensitive parcel handling for maximum peace of mind.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop",
  },
  {
    title: "Business Logistics",
    desc: "Scalable logistics solutions designed to secure and streamline operations.",
    img: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&auto=format&fit=crop",
  },
];

const TESTIMONIALS = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    quote:
      "Global Discreet Transit delivered my packages flawlessly and on time.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    name: "Lisa Wong",
    role: "Founder, EcomWorld",
    quote: "Reliable, discreet, and fast — I trust them with all my shipments.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Brown",
    role: "Logistics Manager, RetailX",
    quote:
      "Their advanced tracking and secure handling make shipping seamless.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

// --- Sub-components ---
const SectionHeader = ({
  title,
  subtitle,
  leftAlign = false,
}: {
  title: string;
  subtitle?: string;
  leftAlign?: boolean;
}) => (
  <div className={`mb-12 ${leftAlign ? "text-left" : "text-center"}`}>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-500 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const HomePage: React.FC = () => {
  // State managed internally to prevent "undefined" errors from App.tsx routes
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = trackingNumber.trim();
    if (!cleanId) return;

    setIsLoading(true);
    // Logic: Navigate to the tracking page with the ID as a query param
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/track/${cleanId}`);
    }, 600);
  };

  return (
    <div className="space-y-32 pb-20 bg-white">
      {/* HERO SECTION */}
      <section className="relative mx-4 mt-4 rounded-3xl overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Global logistics"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />

        <div className="relative z-10 max-w-4xl px-6 py-28 md:px-16 text-white">
          <p className="uppercase tracking-[0.3em] text-xs text-blue-400 font-bold mb-4">
            Global Discreet Transit
          </p>

          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Track Your Shipment <br />
            <span className="text-blue-500">In Real Time</span>
          </h1>

          <p className="text-gray-200 max-w-2xl mb-10 text-lg leading-relaxed">
            Enter your tracking number below to get live status updates,
            location history, and delivery confirmation.
          </p>

          <form
            onSubmit={handleTrack}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-2 max-w-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                value={trackingNumber}
                onChange={(e) =>
                  setTrackingNumber(e.target.value.toUpperCase())
                }
                placeholder="e.g. GDT-94839201"
                className="flex-1 px-6 py-4 rounded-xl bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="off"
                spellCheck={false}
                required
              />

              <button
                type="submit"
                disabled={isLoading || !trackingNumber.trim()}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? "Locating…" : "Track Shipment"}
              </button>
            </div>
            <p className="mt-3 ml-2 text-xs text-gray-300">
              Tracking numbers are case-insensitive. Example:{" "}
              <span className="font-semibold">GDT-XXXXXXX</span>
            </p>
          </form>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://globaldiscreettransit.com/wp-content/uploads/2026/01/pexels-photo-6169194-1.jpeg"
              alt="Professional Logistics"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <SectionHeader
              leftAlign
              title="The Vision Behind Global Discreet Transit"
              subtitle="With over a decade of experience in high-security logistics and global courier services, Global Discreet Transit has established itself as a trusted leader in the industry. Our expertise spans diverse sectors, ensuring seamless and secure solutions tailored to customer needs."
            />
            <button
              onClick={() => navigate("/about")}
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Core Offerings"
          subtitle="Tailored high-security logistics solutions designed to meet diverse global shipping needs."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {OFFERINGS.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-72 shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-50 rounded-[3rem]">
        <SectionHeader
          title="Why Choose Global Discreet Transit?"
          subtitle="Our logistics solutions stand out due to their uncompromised security, efficiency, and personalized service."
        />

        <div className="space-y-12 mt-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg h-80">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
                alt="Security"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                Unmatched Security
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We prioritize the safety of your shipments with advanced
                tracking systems and stringent security protocols, ensuring your
                peace of mind with every delivery.
              </p>
              <button
                onClick={() => navigate("/business")}
                className="inline-flex items-center text-blue-600 font-bold hover:gap-3 transition-all"
              >
                Learn More <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg h-80">
              <img
                src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=800"
                alt="Global Reach"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                Global Reach
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With a network spanning multiple continents, we seamlessly
                connect your business to clients around the world, expanding
                your market potential effortlessly.
              </p>
              <button
                onClick={() => navigate("/business")}
                className="inline-flex items-center text-blue-600 font-bold hover:gap-3 transition-all"
              >
                Learn More <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Trusted by Industry Leaders" />
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-50"
                />
                <div>
                  <p className="font-bold text-slate-900 text-lg">{t.name}</p>
                  <p className="text-sm text-blue-600 font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic text-lg">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to initiate transit?
            </h2>
            <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience the gold standard in secure logistics. Our agents are
              standing by to provide your specialized custom quote.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl shadow-blue-900/20"
            >
              Contact An Agent Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
