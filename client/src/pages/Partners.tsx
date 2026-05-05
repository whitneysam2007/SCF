/*
 * SCF Partners Page — Documentary Realism Design
 * Content from SCF Deck — partner organizations
 * 3x3 logo grid for Who We Work With section
 */
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Globe } from "lucide-react";

const PARTNER_LOGOS = [
  {
    name: "Charity Vision",
    formerName: "Deseret International",
    logo: "/manus-storage/logo-charity-vision_0f8be18e.png",
    url: "https://www.charityvision.org",
  },
  {
    name: "The Humble Village",
    logo: "/manus-storage/logo-humble-village_b2a5c825.webp",
    url: "https://www.the-humble-village.org",
  },
  {
    name: "Pathway India",
    logo: "/manus-storage/logo-pathway-india_2f167b0f.png",
    url: "https://www.pathwayindia.org",
  },
  {
    name: "Hope Projects",
    logo: "/manus-storage/logo-hope-projects_3ff5121d.png",
    url: "https://www.hopeprojects.com",
  },
  {
    name: "Rise and Rebuild",
    logo: "/manus-storage/logo-rise-rebuild_4f129faa.jpg",
    url: "https://www.riserebuildinc.org",
  },
  {
    name: "Rising Star Outreach",
    logo: "/manus-storage/logo-rising-star_1360bac1.png",
    url: "https://risingstaroutreach.org",
  },
  {
    name: "Global Communities",
    formerName: "Project Concern International",
    logo: "/manus-storage/logo-global-communities_6e6ce44f.png",
    url: "https://globalcommunities.org",
  },
  {
    name: "Catholic Charities",
    logo: "/manus-storage/logo-catholic-charities_29c96e5f.png",
    url: "https://www.catholiccharitiesusa.org",
  },
  {
    name: "The Church of Jesus Christ of Latter-day Saints",
    logo: "/manus-storage/logo-lds-church_59e1ba88.png",
    url: "https://www.churchofjesuschrist.org",
  },
];

const REGIONS = [
  { name: "Central America", countries: "Guatemala, El Salvador, Nicaragua" },
  { name: "South America", countries: "Peru, Bolivia" },
  { name: "Africa", countries: "Egypt, Uganda, Kenya, Ethiopia, Tanzania, Zambia, Zimbabwe" },
  { name: "Asia", countries: "India, Philippines, Nepal, Pakistan, Thailand, China" },
];

export default function Partners() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/partners-banner-1-clean_356cbae3.png" alt="Two nurses in a mobile medical van" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/70 via-[#0a1428]/45 to-[#0a1428]/15" />
        </div>
        <div className="relative container pt-28 pb-16">
          <div>
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Partners</p>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Trusted Organizations
              <span className="block text-[#D4A853]">Delivering Real Impact</span>
            </h1>
            <p className="font-body text-white/80 text-lg max-w-xl">
              We partner with proven organizations across 18 countries to deliver healthcare, education, nutrition, and clean water.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Global Reach</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">18 Countries Across 4 Continents</h2>
            <p className="font-body text-[#3e4c59] text-lg max-w-2xl mx-auto">
              From Central America to Southeast Asia, our partnerships reach the most vulnerable communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {REGIONS.map((region, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <Globe className="text-[#D4A853] mb-3" size={24} />
                <h3 className="font-display text-[#12365a] text-lg font-bold mb-2">{region.name}</h3>
                <p className="font-body text-[#3e4c59] text-sm">{region.countries}</p>
              </div>
            ))}
          </div>

          {/* SCF Global Impact Map */}
          <div className="mt-14">
            <img
              src="/manus-storage/scf-global-impact-map_93aa47aa.png"
              alt="SCF Global Impact Map showing 18 countries across 4 continents"
              className="w-full rounded-lg shadow-md block"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Who We Work With — 3x3 Partner Logo Grid */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Partner Organizations</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Who We Work With</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PARTNER_LOGOS.map((partner, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-[#f5f7fb] border border-gray-100 rounded-lg p-8"
              >
                <div className="h-24 w-full flex items-center justify-center mb-5">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[200px] object-contain"
                  />
                </div>
                <h3 className="font-display text-[#12365a] text-base font-bold text-center leading-snug">
                  {partner.name}
                </h3>
                {partner.formerName && (
                  <p className="font-body text-[#3e4c59]/50 text-xs text-center mt-1">
                    formerly {partner.formerName}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Focus — Venture Philanthropy */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 max-w-xl">
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Focus</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-2">Venture Philanthropy</h2>
              <div className="w-12 h-0.5 bg-[#D4A853] mb-6" />
              <p className="font-body text-white/80 text-lg leading-relaxed">
                Sabin Children's Foundation works like a venture philanthropy fund, identifying the most{" "}
                <span className="text-[#D4A853] font-semibold">impactful</span> and{" "}
                <span className="text-[#D4A853] font-semibold">efficient</span>{" "}
                humanitarian projects and channeling donor resources to support them.
              </p>
            </div>
            {/* Chart */}
            <div className="flex-shrink-0 w-72 md:w-96">
              <svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Y axis */}
                <line x1="60" y1="260" x2="60" y2="30" stroke="#D4A853" strokeWidth="3" />
                <polygon points="60,20 53,38 67,38" fill="#D4A853" />
                {/* X axis */}
                <line x1="60" y1="260" x2="290" y2="260" stroke="#D4A853" strokeWidth="3" />
                <polygon points="300,260 282,253 282,267" fill="#D4A853" />
                {/* Axis labels */}
                <text x="48" y="150" fill="#D4A853" fontSize="16" fontWeight="bold" textAnchor="middle" transform="rotate(-90, 48, 150)">Efficiency</text>
                <text x="180" y="292" fill="#D4A853" fontSize="16" fontWeight="bold" textAnchor="middle">Impact</text>
                {/* Star marker in top-right quadrant */}
                <g transform="translate(240, 80)">
                  {/* 6-pointed asterisk star */}
                  <line x1="0" y1="-18" x2="0" y2="18" stroke="#D4A853" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="-15.6" y1="-9" x2="15.6" y2="9" stroke="#D4A853" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="-15.6" y1="9" x2="15.6" y2="-9" stroke="#D4A853" strokeWidth="3.5" strokeLinecap="round" />
                </g>
                {/* Label */}
                <text x="265" y="58" fill="white" fontSize="12" textAnchor="middle">SCF target</text>
                <text x="265" y="73" fill="white" fontSize="12" textAnchor="middle">projects</text>
              </svg>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0e2a47]">
        <div className="container text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">
            Become a Partner
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-8">
            Interested in partnering with Sabin Children's Foundation? We'd love to hear from you.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all">
            CONTACT US <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
