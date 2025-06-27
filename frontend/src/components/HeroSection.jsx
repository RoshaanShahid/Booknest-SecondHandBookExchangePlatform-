import React from 'react';

// Icons are defined locally to prevent import issues.
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const HeroSection = () => {
  return (
    // Add the id="search-section" here
    <section id="search-section" className="relative bg-primary text-white py-24 sm:py-32">
      {/* Optional: Add a subtle background pattern */}
      <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBBF24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Where Books Find New Homes</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/80">
          Join our community of readers to buy and sell second-hand books, share your thoughts, and discover your next great read.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search by title, author, or subject..." 
              className="w-full h-14 pl-6 pr-16 rounded-full text-lg text-text-dark focus:outline-none focus:ring-4 focus:ring-accent/50"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center bg-accent text-primary w-14 h-14 rounded-full hover:opacity-90 transition-opacity">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
