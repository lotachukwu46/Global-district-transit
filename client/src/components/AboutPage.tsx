import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION - "Our Legacy" */}
      <section className="relative bg-slate-900 py-24 px-6 mb-20 overflow-hidden rounded-[2rem] mx-4 mt-4">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
            alt="Secure Warehouse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-blue-500 uppercase tracking-[0.4em] text-sm font-black mb-4">
            Our Legacy
          </h1>
          <p className="text-4xl md:text-6xl font-black text-white leading-tight">
            The Vision Behind <br />
            <span className="text-slate-400">Global Discreet Transit</span>
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <img
              src="https://globaldiscreettransit.com/wp-content/uploads/2026/01/pexels-photo-6169194-1.jpeg"
              alt="Logistics Leadership"
              className="relative rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-bold text-sm uppercase tracking-widest">
              Established Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              Providing top-tier logistics solutions that prioritize security
              and efficiency.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with the vision of revolutionizing secure logistics,
              Global Discreet Transit began as a small operation dedicated to
              meeting the unique shipping needs of our clients in a discreet
              manner.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We have proudly served a diverse clientele, including
              multinational corporations, private individuals, and government
              agencies, all of whom rely on our commitment to excellence and
              security.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
              <div>
                <p className="text-4xl font-black text-blue-600">10+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-600">Global</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter mt-1">
                  Transit Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Core Values
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              At Global Discreet Transit, our core values guide every decision
              and action, ensuring that our clients receive the highest level of
              service and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We uphold the highest standards of honesty and transparency, fostering trust and reliability in every aspect of our operations.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Security",
                desc: "Our commitment to security is unwavering, providing peace of mind through safe logistics and handling of every shipment.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
              {
                title: "Customer Focus",
                desc: "We prioritize our clients' needs, tailoring our services to ensure the utmost satisfaction and a seamless logistic experience.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-10 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed italic">
                  "{value.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - "Ready to Ship?" */}
      <section className="max-w-5xl mx-auto py-32 px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Ship?
            </h2>
            <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
              Contact us today to experience secure and efficient logistics
              solutions tailored to your needs.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-900/40"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
