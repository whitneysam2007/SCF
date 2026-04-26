/*
 * SCF Homepage — Documentary Realism Design
 * Charity:water-inspired billboard scroll narrative
 * Content sourced from SCF Deck (verbatim)
 */
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Eye, Heart, Droplets, GraduationCap, Stethoscope, Baby,
  ArrowRight, ChevronDown
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

function CountUp({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let frame: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-stat text-[#12365a] text-5xl md:text-6xl font-bold mb-2">
        {count}{suffix}
      </p>
      <p className="font-body text-[#3e4c59] text-base">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-children_06e26ef7.png"
            alt="Children smiling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/80 via-[#0a1428]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/60 via-transparent to-[#0a1428]/30" />
        </div>

        <div className="relative container pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-body text-[#D4A853] text-sm md:text-base tracking-[0.2em] uppercase mb-4 font-semibold"
            >
              Since 1993
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Transforming Lives
              <span className="block text-[#D4A853]">Around the World</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-body text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              The Sabin Children's Foundation is a nonprofit organization connecting generous people to life-changing projects that provide healthcare, clean water, nutrition, and education to children who need it most.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/stories"
                className="px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all hover:shadow-lg hover:shadow-[#D4A853]/20"
              >
                SEE THE IMPACT
              </Link>
              <Link
                href="/donate"
                className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-body font-bold text-sm tracking-wide rounded transition-all hover:bg-white/10"
              >
                BECOME A PARTNER
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="text-white/50" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== QUOTE ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-white text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-6">
              "If we hope to change the world, we have to begin with the children."
            </p>
            <cite className="font-body text-[#D4A853] text-base md:text-lg not-italic font-semibold tracking-wide">
              — Gary B. Sabin, Founder and Chairman
            </cite>
          </blockquote>
        </div>
      </AnimatedSection>

      {/* ===== THE PROBLEM ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-[#FDF8F0]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
              The Challenge
            </p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              The World's Most Solvable Problems Remain Unsolved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { icon: Eye, title: "Preventable Blindness", text: "Millions suffer from preventable blindness", img: "/manus-storage/eye-closeup_d46680f6.png", objPos: "" },
              { icon: Baby, title: "Malnutrition", text: "Children face severe malnutrition without access to care", img: "/manus-storage/malnutrition-photo_24a512e9.png", objPos: "" },
              { icon: Droplets, title: "Lack of Clean Water", text: "Clean water and sanitation remain inaccessible in many regions", img: "/manus-storage/water-pump-face-crop2_bb906eaf.png", objPos: "object-top" },
              { icon: Stethoscope, title: "Treatable Diseases", text: "Treatable diseases still claim thousands of lives each year", img: "/manus-storage/treatable-diseases-photo_28f423e9.png", objPos: "" },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg aspect-[16/10]">
                <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.objPos}`} />
                <div className="absolute inset-0 scrim-dark" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <item.icon className="text-[#D4A853] mb-3" size={28} />
                  <h3 className="font-display text-white text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="font-body text-white/80 text-sm md:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== OUR APPROACH ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Approach</p>
              <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-6">Venture Philanthropy</h2>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed mb-8">
                Sabin Children's Foundation works like a venture philanthropy fund, identifying the most impactful and efficient humanitarian projects and channeling donor resources to support them.
              </p>
              <div className="space-y-6">
                {[
                  { step: "01", text: "Identify critical needs around the world" },
                  { step: "02", text: "Partner with trusted local organizations and physicians" },
                  { step: "03", text: "Fund proven humanitarian programs" },
                  { step: "04", text: "Track measurable results" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="font-stat text-[#D4A853] text-2xl font-bold leading-none mt-0.5">{item.step}</span>
                    <p className="font-body text-[#3e4c59] text-base leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/manus-storage/venture-philanthropy_baed5f58.png" alt="SCF community program" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-[#12365a] text-white p-6 rounded-lg shadow-xl max-w-[240px]">
                <p className="font-stat text-[#D4A853] text-3xl font-bold mb-1">100%</p>
                <p className="font-body text-white/80 text-sm">Donation model — every dollar goes directly to programs</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== OUR MODEL ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Our Model</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
              We support <span className="text-[#D4A853]">self-sustaining projects</span>
            </h2>
            <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
              that provide healthcare, clean water, nutrition, and education for those who need it most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "100% Donation Model", desc: "Every dollar you give goes directly to life-saving programs" },
              { label: "Global Partnerships", desc: "Trusted organizations delivering care in 18 countries" },
              { label: "Proven Projects", desc: "We fund programs with demonstrated, measurable impact" },
              { label: "Transparent Reporting", desc: "Clear results showing the real impact of your support" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <h3 className="font-display text-[#D4A853] text-lg font-bold mb-3">{item.label}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== IMPACT STATS ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-[#FDF8F0]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Global Impact</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Creating Change, One Child at a Time</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <CountUp value={30} suffix="+" label="Years of Impact" />
            <CountUp value={18} suffix="" label="Countries Reached" />
            <CountUp value={9} suffix="+" label="Partner Organizations" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: "/manus-storage/africa-community_e5d09f33.png", label: "Uganda" },
              { src: "/manus-storage/girls-smiling_a37fc95e.png", label: "India" },
              { src: "/manus-storage/peru-family_e1da7a0a.png", label: "Guatemala" },
              { src: "/manus-storage/feeding-program_2769e285.png", label: "Philippines" },
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/70 to-transparent" />
                <span className="absolute bottom-3 left-4 font-body text-white text-sm font-semibold tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== PROGRAM PILLARS ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">What We Do</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Our Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Stethoscope, title: "Essential Healthcare Access", desc: "Clinics, mobile health vans, and hospitals providing care to underserved communities.", img: "/manus-storage/pillar-healthcare_f9271335.png" },
              { icon: Heart, title: "Safe Care for Vulnerable Children", desc: "Children's homes, orphanages, and support programs giving children safety and hope.", img: "/manus-storage/pillar-safe-care_924b56c5.png" },
              { icon: Baby, title: "Maternal & Child Nutrition", desc: "Programs helping severely malnourished children recover and thrive.", img: "/manus-storage/mother-baby_f6648b22.jpg" },
              { icon: Droplets, title: "Clean Water, Sanitation & Hygiene", desc: "Fresh water wells and sanitation systems bringing safe water to communities.", img: "/manus-storage/pillar-clean-water_b4023a4b.png" },
              { icon: Eye, title: "Life-Changing Surgeries & Specialty Care", desc: "Cleft palate repairs, eye surgeries, clubfoot corrections, and prosthetics.", img: "/manus-storage/surgery-room_5bf1238e.png" },
              { icon: GraduationCap, title: "Education & Opportunity", desc: "Schools, textbooks, and vocational programs opening doors for children.", img: "/manus-storage/pillar-education_7b8b8d1c.png" },
            ].map((pillar, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-white border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <pillar.icon className="text-[#D4A853]" size={22} />
                    <h3 className="font-display text-[#12365a] text-lg font-bold">{pillar.title}</h3>
                  </div>
                  <p className="font-body text-[#3e4c59] text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== STORIES PREVIEW ===== */}
      <AnimatedSection className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/volunteer-africa_0323e985.png" alt="Volunteer with children" className="w-full h-full object-cover" />
          <div className="absolute inset-0 scrim-full" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Stories of Impact</p>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Care Without Barriers</h2>
            <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed mb-6">
              Sabin Children's Foundation partners with organizations willing to treat every individual in need. Across cultures, religions, and communities around the world, care is given without discrimination and without exception.
            </p>
            <p className="font-display text-[#D4A853] text-xl md:text-2xl italic mb-10">Every life has equal value.</p>
            <Link href="/stories" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all hover:shadow-lg">
              READ MORE STORIES
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== IMPACT COSTS ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-[#FDF8F0]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Your Impact</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">What One Act of Generosity Can Do</h2>
            <p className="font-body text-[#3e4c59] text-lg max-w-2xl mx-auto">
              A well can bring clean water to an entire village. A surgery can restore sight. A school can change the future of a community. A meal can save a child's life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { cost: "$26", label: "Cataract Surgery", desc: "Restoring sight to a child or parent" },
              { cost: "$8/mo", label: "Child Nutrition", desc: "Saving a child from severe malnutrition" },
              { cost: "$30", label: "Clubfoot Surgery", desc: "Helping a child walk for the first time" },
              { cost: "$100", label: "Cleft Palate Surgery", desc: "Giving a child the ability to eat, speak, and smile" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <p className="font-stat text-[#D4A853] text-3xl md:text-4xl font-bold mb-2">{item.cost}</p>
                <h3 className="font-display text-[#12365a] text-lg font-bold mb-2">{item.label}</h3>
                <p className="font-body text-[#3e4c59] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== ANGELS OF LIGHT ===== */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">The Angels of Light Initiative</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">Together We Can Go Further</h2>
              <p className="font-body text-white/80 text-lg leading-relaxed mb-6">
                Angels of Light is a small group of committed partners who work together to multiply the reach of Sabin Children's Foundation. By sharing the responsibility of giving, these partners help identify, fund, and scale the most impactful and efficient humanitarian projects around the world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Flexible", desc: "Choose the participation level that fits your life — 1%, 5%, 10%, or a set annual gift." },
                  { title: "Community", desc: "Join a small, trusted circle sharing both the responsibility and the joy of meaningful giving." },
                  { title: "Transparent", desc: "100% of your gift reaches programs. Receive real stories, real numbers, and the invitation to visit." },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-5">
                    <h3 className="font-display text-[#D4A853] text-base font-bold mb-2">{item.title}</h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/angels-of-light" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all hover:shadow-lg">
                BECOME AN ANGEL OF LIGHT
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img src="/manus-storage/children-waving_f0d014ab.png" alt="Children waving" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -top-4 -right-4 bg-[#D4A853] text-[#12365a] px-5 py-3 rounded-lg shadow-lg">
                <p className="font-display text-sm font-bold italic">"Let your light so shine"</p>
                <p className="font-body text-xs mt-1">— Matthew 5:16</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ===== FINAL CTA ===== */}
      <AnimatedSection className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/african-children-group_9be27a03.png" alt="Group of children" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1428]/70" />
        </div>
        <div className="relative container text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Together, We Can Make All of This Possible
          </h2>
          <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the Sabin Children's Foundation in creating a ripple effect of caring and sharing that transforms lives around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="px-10 py-4 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-base tracking-wide rounded transition-all hover:shadow-lg hover:shadow-[#D4A853]/20">
              DONATE NOW
            </Link>
            <Link href="/contact" className="px-10 py-4 border-2 border-white/30 hover:border-white/60 text-white font-body font-bold text-base tracking-wide rounded transition-all hover:bg-white/10">
              PARTNER WITH US
            </Link>
            <Link href="/contact" className="px-10 py-4 border-2 border-white/30 hover:border-white/60 text-white font-body font-bold text-base tracking-wide rounded transition-all hover:bg-white/10">
              CONTACT US
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
