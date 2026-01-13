
import React from 'react';

const BusinessPage: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden mb-20 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full"></div>
        
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-8">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Scale Your Logistics <br /> with <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Precision.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Automate tracking for your entire supply chain. Our API handles the complexity of carrier communication so you can focus on shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
              Get API Key
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 border border-white/10 backdrop-blur transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
        <div>
           <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for High-Growth E-commerce</h2>
           <p className="text-gray-600 leading-relaxed mb-8">
             Consumer expectations for shipping transparency have never been higher. SwiftTrack provides white-labeled tracking pages and automated SMS/Email notifications that keep your customers engaged even after the purchase.
           </p>
           <ul className="space-y-4">
              {[
                "Webhooks for real-time delivery events",
                "Bulk tracking for up to 10,000 parcels per request",
                "Custom branded tracking portals",
                "Estimated Delivery Time (EDT) AI modeling"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                   <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                   </div>
                   {item}
                </li>
              ))}
           </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mt-8">
              <h4 className="text-2xl font-black text-gray-900">99.9%</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">API Uptime</p>
           </div>
           <div className="bg-blue-600 p-6 rounded-3xl shadow-xl shadow-blue-200">
              <h4 className="text-2xl font-black text-white">&lt; 100ms</h4>
              <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mt-1">Latency</p>
           </div>
           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-2xl font-black text-gray-900">500+</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Carriers</p>
           </div>
           <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mt-8">
              <h4 className="text-2xl font-black text-gray-900">SDKs</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Available in 6 languages</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
