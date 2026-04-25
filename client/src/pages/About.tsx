/*
 * SCF About Page — Documentary Realism Design
 * Content sourced from SCF Deck (verbatim)
 */
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/boys-school_67316d58.png" alt="Children at school" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/85 via-[#0a1428]/60 to-[#0a1428]/30" />
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

      {/* Mission */}
      <AnimatedSection className="py-20 md:py-28 bg-[#FDF8F0]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div >
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Mission</p>
              <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-6">Transforming Lives Around the World Since 1993</h2>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed mb-6">
                The Sabin Children's Foundation is a nonprofit organization transforming lives around the world. We fund life-changing humanitarian projects that provide healthcare, nutrition, clean water, and education to children around the world.
              </p>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed">
                We connect generous people to the right projects to create lasting impact. Our venture philanthropy model identifies the most impactful and efficient humanitarian projects and channels donor resources to support them.
              </p>
            </div>
            <div >
              <img src="/manus-storage/girls-smiling_a37fc95e.png" alt="Girls smiling" className="rounded-lg shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Model */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Model</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">Key Differentiators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { title: "100% Donation Model", desc: "All operational costs are covered separately by private donors. Every dollar you give goes directly to programs." },
              { title: "Global Partnerships", desc: "We partner with trusted local organizations and physicians delivering care in 18 countries." },
              { title: "Proven Projects", desc: "We fund programs with demonstrated, measurable impact that create lasting change." },
              { title: "Transparent Reporting", desc: "You receive clear reporting and measurable results, showing the real impact your support creates." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#12365a] flex items-center justify-center mx-auto mb-5">
                  <span className="font-stat text-[#D4A853] text-xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-[#12365a] text-lg font-bold mb-3">{item.title}</h3>
                <p className="font-body text-[#3e4c59] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              <cite className="font-body text-[#D4A853] text-lg not-italic font-semibold">— Gary B. Sabin, Founder and Chairman</cite>
            </blockquote>
            <p className="font-body text-white/70 text-lg leading-relaxed text-center">
              Since 1993, Gary B. Sabin has led the foundation with a clear vision: to identify the world's most solvable problems and direct resources where they can create the greatest impact. What began as a personal commitment to helping children in need has grown into a global network of partnerships reaching 18 countries across Central America, South America, Africa, and Asia.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Leadership */}
      <AnimatedSection className="py-20 md:py-28 bg-[#FDF8F0]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Leadership</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Gary B. Sabin", role: "Founder and Chairman", desc: "Gary B. Sabin founded the Sabin Children's Foundation in 1993 with a vision to transform the lives of children around the world through efficient, impactful humanitarian work." },
              { name: "S. Eric Ottesen", role: "President", desc: "Eric Ottesen serves as President of the Sabin Children's Foundation, overseeing partnerships and programs that deliver life-changing care to children in 18 countries." },
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-[#12365a] flex items-center justify-center mb-5">
                  <span className="font-display text-[#D4A853] text-xl font-bold">{person.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-display text-[#12365a] text-xl font-bold mb-1">{person.name}</h3>
                <p className="font-body text-[#D4A853] text-sm font-semibold mb-4">{person.role}</p>
                <p className="font-body text-[#3e4c59] text-sm leading-relaxed">{person.desc}</p>
              </div>
            ))}
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
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all">
              GET IN TOUCH <ArrowRight size={16} />
            </Link>
            <Link href="/donate" className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-body font-bold text-sm tracking-wide rounded transition-all hover:bg-white/10">
              DONATE NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
