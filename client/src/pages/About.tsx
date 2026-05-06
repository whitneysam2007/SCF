/*
 * SCF About Page — Documentary Realism Design
 * Content sourced from SCF Deck (verbatim)
 */
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "Gary Sabin", role: "Founder & Chairman", img: "/manus-storage/Gary_Sabin_Square-e1557441395765_1b8727f8.jpeg" },
  { name: "Valerie Sabin", role: "Director", img: "/manus-storage/Gary-and-Val-Sabin_f9be02ec.jpg" },
  { name: "Eric Ottesen", role: "President", img: "/manus-storage/Eric-Ottesen_0d73a20f.jpg" },
  { name: "Spencer Plumb", role: "Vice President", img: "/manus-storage/IMG_8562-1-e1557441692941_b5ff3e3f.jpg" },
  { name: "Kimberly Sabin Plumb", role: "Director", img: "/manus-storage/Spencer-and-Kim-Plumb_24f3c808.jpg" },
  { name: "Mark Burton", role: "Vice President", img: "/manus-storage/Mark-Burton_992b7dfc.jpg" },
  { name: "Van Tengberg", role: "Director", img: "/manus-storage/Van-Tengberg_1af3d39a.jpg" },
  { name: "Jennifer Sabin Sattley", role: "Director", img: "/manus-storage/Jennifer-Sabin-Sattley_df244b88.jpg" },
  { name: "Matt Romney", role: "Director", img: "/manus-storage/Matt_Romney-e1557440827771_c11f6a17.png" },
  { name: "Steve Henry", role: "Director", img: "/manus-storage/IMG_8631-e1557442294325_8589e70d.jpg" },
  { name: "Dan Haslam", role: "Director", img: "/manus-storage/IMG_8539-e1557441852358_612e19f6.jpg" },
  { name: "Rachel Miller", role: "Secretary", img: "/manus-storage/IMG_8637-e1557442471441_c210f945.jpg" },
];

function TeamAvatar({ name, img }: { name: string; img: string }) {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
      <img src={img} alt={name} className="w-full h-full object-cover object-top" />
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-20 md:pt-28">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/about-hero-kids_cropped_95ac4cb1.jpg" alt="Two children smiling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/70 via-[#0a1428]/45 to-[#0a1428]/15" />
        </div>
        <div className="relative container pt-28 pb-16">
          <div>
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">About Us</p>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Helping the Least of the Least
              <span className="block text-[#D4A853]">In the Most Efficient Way</span>
            </h1>
          </div>
        </div>
      </section>

      {/* One Drop at a Time */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">One Drop at a Time</p>
              <blockquote className="border-l-4 border-[#D4A853] pl-6 mb-8">
                <p className="font-display text-[#12365a] text-2xl md:text-3xl italic leading-relaxed mb-4">
                  "Just as ripples spread out when a single pebble is dropped into water, the actions of individuals can have far-reaching effects."
                </p>
                <cite className="font-body text-[#D4A853] text-sm not-italic font-semibold tracking-wide uppercase">— Dalai Lama</cite>
              </blockquote>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed">
                That is the belief at the heart of everything we do. The Sabin Children's Foundation was built on the conviction that one person, moved to act, can set something in motion that reaches far beyond what they can see. A well brings clean water to an entire village. A surgery restores a child's sight. A meal saves a life. A school changes the future of a community. We exist to connect generous people to those moments — to be the drop that starts the ripple.
              </p>
            </div>
            <div>
              <img src="/manus-storage/about-hero-child_09758f14.jpg" alt="Child looking up with hope" className="rounded-lg shadow-2xl w-full object-cover" style={{aspectRatio: '3/4', maxHeight: '520px'}} />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Founding Story */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Story</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">Founded on a Simple Belief</h2>
            </div>
            <blockquote className="text-center mb-12">
              <p className="font-display text-white text-2xl md:text-3xl italic leading-relaxed mb-6">
                "If we hope to change the world, we have to begin with the children."
              </p>
              <cite className="font-body text-[#D4A853] text-lg not-italic font-semibold">Gary B. Sabin, Founder and Chairman</cite>
            </blockquote>
            <p className="font-body text-white/70 text-lg leading-relaxed text-center">
              Since 1993, Gary B. and Valerie Sabin have led the foundation with a clear vision: to identify the world's most solvable problems and direct resources where they can create the greatest impact. What began as a personal commitment to helping children in need has grown into a global network of partnerships reaching 18 countries across Central America, South America, Africa, and Asia.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Meet Our Team */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Leadership</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 max-w-5xl mx-auto">
            {teamMembers.map((person, i) => (
              <div key={i} className="text-center">
                <TeamAvatar name={person.name} img={person.img} />
                <h3 className="font-display text-[#12365a] text-base font-bold mb-1">{person.name}</h3>
                <p className="font-body text-[#D4A853] text-base font-semibold">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Resources */}
      <AnimatedSection className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Resources</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">Learn More About SCF</h2>
            <p className="font-body text-gray-600 text-lg max-w-xl mx-auto">Download our brochure or view our full slide deck to learn more about our mission, impact, and programs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1AO2WWZEDNncJ2E_bEqP13q8UQG8gawtj"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#12365a] hover:bg-[#0e2a47] text-white font-body font-bold text-base tracking-wide rounded transition-all shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              DOWNLOAD OUR BROCHURE
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1w3sKccEVsHLgZ1fXSOJ0AmnbhR5i9Z5R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#12365a] text-[#12365a] hover:bg-[#12365a] hover:text-white font-body font-bold text-base tracking-wide rounded transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              VIEW OUR SLIDE DECK
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#12365a]">
        <div className="container text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-8">Learn how you can partner with us to transform lives around the world.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-base tracking-wide rounded transition-all">
              GET IN TOUCH <ArrowRight size={16} />
            </Link>
            <Link href="/donate" className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-body font-bold text-base tracking-wide rounded transition-all hover:bg-white/10">
              DONATE NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
