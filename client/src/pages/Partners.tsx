/*
 * SCF Partners Page — Documentary Realism Design
 * Content from SCF Deck — partner organizations
 */
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, MapPin, Globe } from "lucide-react";

const PARTNERS = [
  {
    name: "Remote Area Medical (RAM)",
    region: "United States & Global",
    focus: "Healthcare Access",
    desc: "Remote Area Medical is a major nonprofit provider of free pop-up clinics delivering free dental, vision, and medical care to underserved communities. RAM operates in the U.S. and globally, reaching those who need it most.",
    img: "/manus-storage/dental-care_c155dd88.png",
  },
  {
    name: "Remote Area Medical Peru (RAMP)",
    region: "Peru",
    focus: "Healthcare & Surgery",
    desc: "RAMP provides free healthcare and surgical care in remote areas of Peru, including cleft palate repairs, clubfoot corrections, and essential medical services for children and families.",
    img: "/manus-storage/peru-family_e1da7a0a.png",
  },
  {
    name: "Remote Area Medical Philippines (RAMP)",
    region: "Philippines",
    focus: "Healthcare & Nutrition",
    desc: "RAMP Philippines delivers healthcare, feeding programs, and surgical care to vulnerable communities across the Philippines, focusing on children and families in remote areas.",
    img: "/manus-storage/feeding-program_2769e285.png",
  },
  {
    name: "Remote Area Medical India (RAMI)",
    region: "India",
    focus: "Eye Surgery & Healthcare",
    desc: "RAMI provides cataract surgeries, eye care, and essential healthcare to underserved communities in India. A single cataract surgery costs just $26 and can restore sight to a child or parent.",
    img: "/manus-storage/eye-exam_3ebe0d11.png",
  },
  {
    name: "Remote Area Medical Guatemala",
    region: "Guatemala",
    focus: "Maternal & Child Health",
    desc: "Operating in Guatemala, this partnership focuses on maternal and child health, nutrition programs, and essential healthcare for indigenous communities.",
    img: "/manus-storage/mother-reading_5819beb4.jpg",
  },
  {
    name: "Remote Area Medical Africa",
    region: "Uganda & East Africa",
    focus: "Healthcare, Water & Education",
    desc: "Across East Africa, SCF partners deliver healthcare, clean water systems, nutrition programs, and educational support to communities in Uganda and surrounding regions.",
    img: "/manus-storage/africa-community_e5d09f33.png",
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

      {/* Partner Organizations */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Partner Organizations</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Who We Work With</h2>
          </div>
          <div className="space-y-12">
            {PARTNERS.map((partner, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-lg aspect-[16/10]">
                    <img src={partner.img} alt={partner.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-[#D4A853]" size={16} />
                    <span className="font-body text-[#D4A853] text-sm font-semibold tracking-wide">{partner.region}</span>
                  </div>
                  <h3 className="font-display text-[#12365a] text-2xl md:text-3xl font-bold mb-2">{partner.name}</h3>
                  <p className="font-body text-[#3e4c59]/60 text-sm font-semibold uppercase tracking-wider mb-4">{partner.focus}</p>
                  <p className="font-body text-[#3e4c59] text-base leading-relaxed">{partner.desc}</p>
                </div>
              </div>
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
