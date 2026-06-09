import { useState } from "react";

const ShopCo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Satoshi', 'Helvetica Neue', Arial, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500;600&display=swap');
        .hero-title { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; letter-spacing: -0.02em; line-height: 1; }
        .brand-ticker { animation: ticker 18s linear infinite; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .star { display: inline-block; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Top Banner */}
      {bannerOpen && (
        <div className="bg-black text-white text-xs text-center py-2.5 px-4 relative" style={{ fontFamily: 'Barlow, sans-serif' }}>
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline font-semibold hover:text-gray-300 transition-colors">Sign Up Now</a>
          <button
            onClick={() => setBannerOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="text-black font-black text-2xl tracking-tighter shrink-0" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '-0.03em' }}>
            SHOP.CO
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                Shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {["On Sale", "New Arrivals", "Brands"].map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-800 hover:text-black transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                {link}
              </a>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-sm items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent text-sm text-gray-500 outline-none w-full placeholder-gray-400"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="hidden sm:flex w-9 h-9 items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {/* Hamburger */}
            <button className="md:hidden w-9 h-9 flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input type="text" placeholder="Search for products..." className="bg-transparent text-sm outline-none w-full placeholder-gray-400" />
            </div>
            {["Shop", "On Sale", "New Arrivals", "Brands"].map((link) => (
              <a key={link} href="#" className="text-sm font-medium text-gray-800 py-1 border-b border-gray-50" style={{ fontFamily: 'Barlow, sans-serif' }}>
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F2F0F1] overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 py-12 lg:py-0 min-h-[580px] flex items-center relative">
          {/* Left content */}
          <div className="relative z-10 max-w-lg">
            {/* Decorative star */}
            <div className="absolute -top-8 -right-16 hidden lg:block">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M28 0L30.5 25.5L56 28L30.5 30.5L28 56L25.5 30.5L0 28L25.5 25.5L28 0Z" fill="black"/>
              </svg>
            </div>

            <h1 className="hero-title text-[52px] sm:text-[64px] lg:text-[72px] text-black uppercase leading-none mb-5">
              Find Clothes<br />That Matches<br />Your Style
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300 }}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black hover:bg-gray-800 active:scale-95 text-white font-semibold text-sm px-10 py-4 rounded-full transition-all duration-200" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Shop Now
            </button>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-10 pt-8 border-t border-gray-300">
              {[
                { number: "200+", label: "International Brands" },
                { number: "2,000+", label: "High-Quality Products" },
                { number: "30,000+", label: "Happy Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="hero-title text-2xl sm:text-3xl text-black">{stat.number}</div>
                  <div className="text-gray-500 text-xs mt-0.5" style={{ fontFamily: 'Barlow, sans-serif' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="absolute right-0 bottom-0 hidden lg:block h-full w-[520px]">
            {/* Decorative stars */}
            <div className="absolute top-16 right-16">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="black"/>
              </svg>
            </div>
            <div className="absolute top-1/2 left-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0L11 9L20 10L11 11L10 20L9 11L0 10L9 9L10 0Z" fill="black"/>
              </svg>
            </div>
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80"
              alt="Fashion models"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Mobile hero image */}
          <div className="lg:hidden w-full mt-8 rounded-2xl overflow-hidden h-64">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80"
              alt="Fashion models"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Brand Ticker */}
      <section className="bg-black py-5 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="brand-ticker flex items-center gap-16 px-8">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-white font-black text-xl sm:text-2xl tracking-wider shrink-0"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <h2 className="hero-title text-4xl sm:text-5xl text-center text-black uppercase mb-10">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "T-shirt with Tape Details", price: "$120", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
            { name: "Skinny Fit Jeans", price: "$240", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
            { name: "Checkered Shirt", price: "$180", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80" },
            { name: "Sleeve Striped T-shirt", price: "$130", img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80" },
          ].map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-semibold text-black mb-1 truncate" style={{ fontFamily: 'Barlow, sans-serif' }}>{product.name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-xs">{"★★★★☆"}</div>
                <span className="text-xs text-gray-400">4/5</span>
              </div>
              <p className="text-base font-bold text-black mt-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="border border-gray-300 hover:border-black text-black font-medium text-sm px-10 py-3 rounded-full transition-all duration-200" style={{ fontFamily: 'Barlow, sans-serif' }}>
            View All
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-10">
        <div className="max-w-[1240px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black tracking-tighter mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>SHOP.CO</div>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300 }}>
              We have clothes that suit your style and which you're proud to wear.
            </p>
          </div>
          {[
            { title: "Company", links: ["About", "Features", "Works", "Career"] },
            { title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300 }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 max-w-[1240px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs" style={{ fontFamily: 'Barlow, sans-serif' }}>© 2024 Shop.co. All Rights Reserved</p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((pay) => (
              <span key={pay} className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded" style={{ fontFamily: 'Barlow, sans-serif' }}>{pay}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopCo;
