/*
 * SCF Donate Page — Documentary Realism Design
 * Donation options and Angels of Light program
 */
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Heart, ArrowRight, Check } from "lucide-react";

export default function Donate() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/donate-hero_777307b6.jpg" alt="Community members preparing food together" className="w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/70 via-[#0a1428]/45 to-[#0a1428]/15" />
        </div>
        <div className="relative container pt-28 pb-16">
          <div>
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Make a Difference</p>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Your Generosity
              <span className="block text-[#D4A853]">Changes Everything</span>
            </h1>
            <p className="font-body text-white/80 text-lg max-w-xl">
              100% of your donation goes directly to life-saving programs. All operational costs are covered separately.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Costs */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Your Impact</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">What One Act of Generosity Can Do</h2>
            <p className="font-body text-[#3e4c59] text-lg max-w-2xl mx-auto">
              A well can bring clean water to an entire village. A surgery can restore sight. A school can change the future of a community. A meal can save a child's life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
            {[
              { cost: "$50", label: "Cataract Surgery", desc: "Restoring sight to a child or parent", img: "/manus-storage/donate-cataract-crop_7101dc09.jpg" },
              { cost: "$8/mo", label: "Child Nutrition", desc: "Saving a child from severe malnutrition", img: "/manus-storage/donate-nutrition-crop_b1f27dc0.jpg" },
              { cost: "$60", label: "Clubfoot Surgery", desc: "Helping a child walk for the first time", img: "/manus-storage/donate-clubfoot-crop_2c4f7335.png" },
              { cost: "$100", label: "Cleft Palate Surgery", desc: "Giving a child the ability to eat, speak, and smile", img: "/manus-storage/donate-cleft-crop_f1090178.png" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <p className="font-stat text-[#D4A853] text-3xl font-bold mb-1">{item.cost}</p>
                  <h3 className="font-display text-[#12365a] text-lg font-bold mb-1">{item.label}</h3>
                  <p className="font-body text-[#3e4c59] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-base tracking-wide rounded transition-all hover:shadow-lg hover:shadow-[#D4A853]/20">
              <Heart size={18} /> DONATE NOW
            </Link>
            <p className="font-body text-[#3e4c59]/60 text-sm mt-4">Contact us to arrange your donation</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Angels of Light */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div >
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">The Angels of Light Initiative</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">Together We Can Go Further</h2>
              <p className="font-body text-white/80 text-lg leading-relaxed mb-8">
                Angels of Light is a small group of caring individuals who work together to multiply the reach of Sabin Children's Foundation. By sharing the responsibility of giving, these partners help identify, fund, and scale the most impactful and efficient humanitarian projects around the world.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Choose the participation level per project that fits your life — 1%, 5%, 10%, or a set annual gift",
                  "Join a small, trusted circle sharing both the responsibility and the joy of meaningful giving",
                  "100% of your gift reaches programs",
                  "Receive real stories, real numbers, and the invitation to visit projects in person",
                  "Annual gathering to review impact and plan future initiatives",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-[#D4A853] mt-1 shrink-0" size={18} />
                    <p className="font-body text-white/70 text-base">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/angels-of-light" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all">
                BECOME AN ANGEL OF LIGHT <ArrowRight size={16} />
              </Link>
            </div>
            <div >
              <img src="/manus-storage/children-waving_f0d014ab.png" alt="Children waving" className="rounded-lg shadow-2xl w-full" />
              <div className="mt-6 bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="font-display text-[#D4A853] text-lg italic mb-2">"Let your light so shine before men, that they may see your good works"</p>
                <p className="font-body text-white/50 text-sm">— Matthew 5:16</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 100% Model */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Promise</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-6">100% Donation Model</h2>
            <p className="font-body text-[#3e4c59] text-lg leading-relaxed mb-6">
              All operational costs are covered separately by private donors. That means every dollar you give goes directly to life-saving programs — healthcare, clean water, nutrition, education, and surgeries for children who need it most.
            </p>
            <p className="font-body text-[#3e4c59] text-lg leading-relaxed">
              You receive clear reporting and measurable results, showing the real impact your support creates.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/african-children-group_9be27a03.png" alt="Group of children" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1428]/70" />
        </div>
        <div className="relative container text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">
            Together, We Can Make All of This Possible
          </h2>
          <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-8">
            Join the Sabin Children's Foundation in creating a ripple effect of caring and sharing.
          </p>
          <Link href="/contact" className="px-10 py-4 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-base tracking-wide rounded transition-all hover:shadow-lg">
            CONTACT US TO DONATE
          </Link>
        </div>
      </section>
    </div>
  );
}
