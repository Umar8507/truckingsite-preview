import React, { useState, useEffect } from "react";
// 1. Import the image from your assets directory
import driverHero from "./assets/driver-hero.png";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      
      {/* 1. STICKY HEADER / NAVIGATION BAR */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 ${
          isScrolled || isMenuOpen
            ? "bg-white shadow-sm h-16 border-b border-slate-100" 
            : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
          
          {/* Company Logo */}
          <div className="flex items-center gap-3 group cursor-pointer relative z-50">
            <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white font-black italic transition-colors group-hover:bg-orange-600">
              TS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                TOP<span className="text-orange-600">SHOT</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Delivery LLC
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-orange-600 transition">Who We Are</a>
            <a href="#services" className="hover:text-orange-600 transition">Services</a>
            <a href="#compliance" className="hover:text-orange-600 transition">Compliance</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button (Hidden on very small screens, visible on md+) */}
            <a
              href="tel:4697192542"
              className="hidden sm:block bg-slate-900 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-slate-200"
            >
              Get a Quote
            </a>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold text-slate-900">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition">Who We Are</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition">Services</a>
            <a href="#compliance" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition">Compliance</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-orange-600 transition">Contact</a>
            <a href="tel:4697192542" className="mt-4 bg-orange-600 text-white px-8 py-4 rounded-xl text-lg">Call Now</a>
          </div>
        </div>
      </nav>

{/* 2. HERO SECTION */}
<header className="relative pt-32 pb-20 px-6 w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    <div className="relative z-10 w-full">
      {/* Tagline / Sub-headline */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/50 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
        <span className="text-orange-700 text-[11px] font-bold uppercase tracking-widest">
          USDOT ACTIVE: 4498692
        </span>
      </div>

      {/* Bold Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
        Precision Logistics. <br />
        <span className="text-orange-600 italic">No Compromise.</span>
      </h1>

      {/* Supportive Tagline */}
      <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
        Top Shot Delivery LLC provides specialized General Freight solutions 
        across Texas and beyond. Interstate authorized, safety-vetted, 
        and mission-driven.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <a 
          href="tel:4697192542" 
          className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200 text-lg text-center"
        >
          Call Dispatch
        </a>
        <a 
          href="#compliance"
          className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-xl flex items-center justify-center font-bold hover:bg-slate-50 transition text-lg"
        >
          View Authority
        </a>
      </div>

      {/* Metadata / Trust Indicators */}
      <div className="mt-10 flex items-center gap-8 border-t border-slate-100 pt-6">
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">MC Number</p>
          <p className="font-bold text-slate-700">1779396</p>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">HQ Location</p>
          <p className="font-bold text-slate-700">Dallas, TX</p>
        </div>
      </div>
    </div>
    
    {/* Visual Element: Constraints added to prevent overflow */}
    <div className="relative group max-w-full overflow-hidden lg:overflow-visible">
      <div className="absolute -inset-10 bg-gradient-to-tr from-orange-200 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
      
      <div className="relative bg-white aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white ring-1 ring-slate-100 transition-transform duration-500 group-hover:scale-[1.01]">
        <img 
          src={driverHero} 
          alt="Top Shot Carrier Services" 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
        
        <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 md:gap-4 transition-all duration-500 group-hover:translate-x-1">
          <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-lg md:text-xl">
            ✓
          </div>
          <div>
            <p className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-tighter leading-none">Status</p>
            <p className="text-xs md:text-sm font-black text-slate-800">Interstate Authorized</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


      {/* 3. MISSION STATEMENT / WHO WE ARE */}
      <section id="about" className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs mb-6">
            Our Mission
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
            "Providing <span className="text-orange-600">Authorized For-Hire</span> excellence with a commitment to Texas-sized reliability."
          </h3>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-10"></div>
          <p className="text-lg text-slate-500 leading-relaxed">
            Top Shot Delivery LLC is a Dallas-based professional carrier, fully 
            authorized for interstate property transport. With a focus on General Freight, we bridge the gap between complex 
            logistics and simple, reliable delivery solutions.
          </p>
        </div>
      </section>

      {/* 4. SERVICE GRID */}
      <section id="services" className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4">
                Core Capabilities
              </h2>
              <h3 className="text-4xl font-bold text-slate-900">
                Professional Freight Solutions <br /> Built for Your Business
              </h3>
            </div>
            <p className="text-slate-500 max-w-sm">
              Specialized in General Freight handling with authorized for-hire status 
              across the interstate network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:bg-orange-600 transition-colors">
                🚛
              </div>
              <h4 className="text-xl font-bold mb-4">General Freight</h4>
              <p className="text-slate-500 leading-relaxed mb-6">
                Reliable interstate transport for a wide variety of cargo types, 
                leveraging our specialized power units for efficient delivery.
              </p>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                Interstate Authorized →
              </span>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:bg-orange-600 transition-colors">
                📍
              </div>
              <h4 className="text-xl font-bold mb-4">Dallas Hub Logistics</h4>
              <p className="text-slate-500 leading-relaxed mb-6">
                Strategically headquartered in Dallas, TX, providing a central 
                launchpad for regional and national freight lanes.
              </p>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                Regional Experts →
              </span>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:bg-orange-600 transition-colors">
                🛡️
              </div>
              <h4 className="text-xl font-bold mb-4">Safety-First Operations</h4>
              <p className="text-slate-500 leading-relaxed mb-6">
                Adhering to strict USDOT status requirements with an Active 
                legal standing and verified VMT tracking.
              </p>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                DOT Verified →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUE PROPOSITION / THE NEXT */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/10 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-6">
              The Top Shot Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Next-Generation <br /> 
              <span className="text-orange-500">Freight Architecture</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              We don't just move cargo; we manage the lifecycle of your freight. 
              As an <span className="text-white font-bold">Authorized Property Carrier</span>, 
              Top Shot Delivery LLC ensures your supply chain never stops moving.
            </p>
            <div className="space-y-6">
              {[
                { title: "Interstate Precision", desc: "Full 48-state authority for seamless borderless logistics." },
                { title: "Modern Integration", desc: "Digital ELD and VMT tracking for 100% transparency." },
                { title: "Asset-Based Security", desc: "Owned power units ensuring direct control over shipments." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-orange-500 font-bold">0{i+1}</div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-wide">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-orange-500 mb-1 tracking-tighter">ACTIVE</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">USDOT Status</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-white mb-1 tracking-tighter">4498692</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DOT Number</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-white mb-1 tracking-tighter">1779396</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MC Number</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-orange-500 mb-1 tracking-tighter">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Authorized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GEOGRAPHIC REACH */}
      <section id="coverage" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative bg-slate-100 aspect-square rounded-[3rem] overflow-hidden shadow-inner group">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 italic text-center p-12">
                <div>
                  <span className="text-5xl block mb-4 animate-bounce">📍</span>
                  <p className="font-bold text-slate-600 mb-2">National Interstate Reach</p>
                  <p className="text-xs max-w-xs">Operating from Dallas, TX to any destination across the 48 contiguous states.</p>
                </div>
              </div>
              <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-50 text-[10px] font-black tracking-widest text-orange-600">
                TEXAS HQ
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4">Service Footprint</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Strategic Connectivity From Dallas</h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Based at 3500 Oak Lawn Ave, we are positioned at the intersection of major interstate corridors, enabling rapid deployment nationwide.
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {["Interstate Authority", "General Freight", "Dallas Regional", "Authorized For-Hire"].map((tag) => (
                <div key={tag} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px] text-orange-600">✓</div>
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-tighter">{tag}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 border-l-4 border-orange-600 bg-slate-50 italic text-sm font-bold text-slate-600">
              "Our location in Dallas allows us to reach 80% of the U.S. population within 48 hours."
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPLIANCE & DOCUMENT VAULT */}
      <section id="compliance" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
            <div>
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Regulatory Authority</h2>
              <h3 className="text-4xl font-bold">The Compliance Vault</h3>
            </div>
            <p className="text-slate-400 max-w-md">Active USDOT Status. Download verified authority and insurance credentials below.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "FMCSA Authority", detail: "Authorized for Property", icon: "⚖️" },
              { name: "Insurance COI", detail: "General Freight Coverage", icon: "🛡️" },
              { name: "W-9 Form", detail: "Tax Identification", icon: "📄" },
              { name: "DOT Certificate", detail: "# 4498692 Active", icon: "📋" }
            ].map((doc) => (
              <div key={doc.name} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-orange-600 hover:border-orange-500 transition-all cursor-pointer">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{doc.icon}</div>
                <h4 className="font-bold mb-1 text-lg">{doc.name}</h4>
                <p className="text-xs text-slate-500 group-hover:text-orange-100 uppercase font-black tracking-widest">{doc.detail}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Download PDF →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CORPORATE FOOTER */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6 font-bold text-xl">
                <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white italic text-xs">TS</div>
                TOP<span className="text-orange-600">SHOT</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">Authorized for-hire interstate carrier providing precision logistics from Dallas, Texas.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-orange-600">Who We Are</a></li>
                <li><a href="#services" className="hover:text-orange-600">Services</a></li>
                <li><a href="#compliance" className="hover:text-orange-600">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="tel:4697192542" className="hover:text-slate-900 font-medium">📞 (469) 719-2542</a></li>
                <li><a href="mailto:JPETERSON7053@GMAIL.COM" className="hover:text-slate-900 font-medium break-all">✉️ JPETERSON7053@GMAIL.COM</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Headquarters</h4>
              <address className="not-italic text-sm text-slate-500 leading-relaxed">
                3500 Oak Lawn Ave <br /> Suite 460A PMB 1477 <br /> Dallas, TX 75219
              </address>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex gap-6"><span>USDOT: 4498692</span><span>MC: 1779396</span></div>
            <p>© {new Date().getFullYear()} Top Shot Delivery LLC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}