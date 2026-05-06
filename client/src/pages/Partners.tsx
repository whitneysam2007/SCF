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
                <p className="font-body text-[#3e4c59] text-base">{region.countries}</p>
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
                  <p className="font-body text-[#3e4c59]/50 text-base text-center mt-1">
                    formerly {partner.formerName}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What We Look for in a Partner */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 max-w-xl">
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Partner Criteria</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-2">What We Look for in a Partner</h2>
              <div className="w-12 h-0.5 bg-[#D4A853] mb-6" />
              <p className="font-body text-white/80 text-lg leading-relaxed mb-8">
                We seek local organizations that are solving the world's most critical needs with proven programs and measurable results — with exceptional{" "}
                <span className="text-[#D4A853] font-semibold">efficiency</span> and{" "}
                <span className="text-[#D4A853] font-semibold">impact</span>.
              </p>
              <p className="font-body text-white font-semibold text-base mb-5">Is your organization a good fit? Ask yourself:</p>
              <ol className="space-y-4">
                {[
                  "Do you identify critical needs in your community?",
                  "Do you work with trusted local physicians and organizations?",
                  "Do you run proven humanitarian programs?",
                  "Do you track and report measurable results?",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A853] text-[#12365a] font-bold text-base flex items-center justify-center mt-0.5">{i + 1}</span>
                    <p className="font-body text-white/80 text-base leading-relaxed pt-1">{item}</p>
                  </li>
                ))}
              </ol>
              <p className="font-body text-white/60 text-base italic mt-8">
                If the answer is yes — and you operate with high efficiency and high impact — we'd love to hear from you.
              </p>
            </div>
            {/* Chart */}
            <div className="flex-shrink-0 w-72 md:w-96">
              <svg viewBox="0 0 380 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Y axis */}
                <line x1="80" y1="300" x2="80" y2="40" stroke="#D4A853" strokeWidth="4" />
                {/* Y arrow (chevron style) */}
                <polyline points="65,62 80,34 95,62" fill="none" stroke="#D4A853" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                {/* X axis */}
                <line x1="80" y1="300" x2="330" y2="300" stroke="#D4A853" strokeWidth="4" />
                {/* X arrow (chevron style) */}
                <polyline points="308,285 336,300 308,315" fill="none" stroke="#D4A853" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                {/* Efficiency label — rotated on left */}
                <text x="38" y="175" fill="#D4A853" fontSize="20" fontWeight="bold" textAnchor="middle" transform="rotate(-90, 38, 175)">Efficiency</text>
                {/* Impact label — below X axis */}
                <text x="205" y="342" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">Impact</text>
                {/* Star marker — centered in upper-right quadrant */}
                <g transform="translate(220, 140)">
                  <line x1="0" y1="-22" x2="0" y2="22" stroke="#D4A853" strokeWidth="4" strokeLinecap="round" />
                  <line x1="-19" y1="-11" x2="19" y2="11" stroke="#D4A853" strokeWidth="4" strokeLinecap="round" />
                  <line x1="-19" y1="11" x2="19" y2="-11" stroke="#D4A853" strokeWidth="4" strokeLinecap="round" />
                </g>
                {/* Label above star on one line */}
                <text x="220" y="105" fill="white" fontSize="14" textAnchor="middle">SCF target projects</text>
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
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-base tracking-wide rounded transition-all">
            CONTACT US <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
