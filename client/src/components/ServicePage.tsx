import React from "react";
import { useNavigate } from "react-router-dom";

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

const ServicePage: React.FC = () => {
  const navigate = useNavigate();

  const coreServices = [
    {
      id: "01",
      title: "International Shipping",
      tagline: "Global Reach, Local Precision",
      description:
        "Secure International Shipping: Experience seamless international shipping solutions with real-time tracking and robust security measures. We ensure your packages reach their destination safely and on time, every time.",
      image:
        "https://globaldiscreettransit.com/wp-content/uploads/2026/01/pexels-photo-7363090-1.jpeg",
    },
    {
      id: "02",
      title: "Private Courier",
      tagline: "Ultimate Discretion",
      description:
        "Private Courier Services: Our private courier services are tailored to meet personal and confidential shipping needs. Enjoy fast, reliable, and discreet transportation of your crucial items around the globe.",
      image:
        "https://globaldiscreettransit.com/wp-content/uploads/2026/01/pexels-photo-6407557-1.jpeg",
    },
    {
      id: "03",
      title: "Business Logistics",
      tagline: "Enterprise Security",
      description:
        "Business Logistics: Optimize your supply chain with our innovative logistics solutions. We provide businesses with comprehensive logistics management tailored to streamline operations and enhance efficiency.",
      image:
        "https://globaldiscreettransit.com/wp-content/uploads/2026/01/pexels-photo-6169194-1.jpeg",
    },
  ];

  return (
    <div className="bg-[#fcfcfd] text-slate-900">
      {/* HERO SECTION - Minimalist & Bold */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-200 pb-12">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
                Premium Offerings
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-4 leading-none">
                Elite Logistics <br />
                <span className="text-slate-400">& Services</span>
              </h1>
            </div>
            <p className="max-w-xs text-slate-500 font-medium pb-2">
              Tailored high-security solutions designed for those who demand
              absolute reliability.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES - High Contrast Layout */}
      <section className="max-w-7xl mx-auto px-6 space-y-40 mb-40">
        {coreServices.map((service, index) => (
          <div key={service.id} className="group relative">
            <div
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-2/5 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-blue-600/20">
                    {service.id}
                  </span>
                  <div className="h-[1px] flex-1 bg-slate-200"></div>
                </div>
                <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">
                  {service.tagline}
                </h3>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="group/btn flex items-center gap-4 text-slate-900 font-black tracking-tight"
                >
                  <span className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center group-hover/btn:bg-slate-900 group-hover/btn:text-white transition-all">
                    →
                  </span>
                  INITIATE TRANSIT
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS - "The Trust Grid" */}
      <section className="bg-slate-900 py-32 px-6 rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-400">
              Verifiable excellence in global secure transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <p className="text-slate-300 text-lg italic leading-relaxed mb-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all"
                  />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS GRID - Compact & Informative */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-8">Why Global Discreet?</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="text-blue-600 font-black text-xl">/01</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Unmatched Security</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Advanced tracking and stringent security protocols ensure
                    peace of mind with every delivery.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-blue-600 font-black text-xl">/02</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Global Reach</h4>
                  <p className="text-slate-500 leading-relaxed">
                    Spanning multiple continents, we connect your business
                    effortlessly to the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://globaldiscreettransit.com/wp-content/uploads/2026/01/pexels-photo-6407565-1.jpeg"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
              alt="Security"
            />
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-blue-600 p-12 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-8">Ready to Ship?</h2>
            <button
              onClick={() => navigate("/contact")}
              className="px-16 py-6 bg-white text-blue-600 rounded-full font-black text-lg hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              Contact An Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
