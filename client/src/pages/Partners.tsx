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
          <img src="/manus-storage/volunteer-africa_0323e985.png" alt="Volunteers with children" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/85 via-[#0a1428]/60 to-[#0a1428]/30" />
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
      <AnimatedSection className="py-20 md:py-28 bg-[#FDF8F0]">
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
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center bg-[#FDF8F0] border border-gray-100 rounded-lg p-8 hover:shadow-lg hover:border-[#D4A853]/30 transition-all duration-300"
              >
                <div className="h-24 w-full flex items-center justify-center mb-5">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-[200px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
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
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#12365a]">
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
