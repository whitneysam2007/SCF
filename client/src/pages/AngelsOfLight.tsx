/*
 * SCF Angels of Light Page — Documentary Realism Design
 * Dedicated page for the Angels of Light initiative
 * Content sourced verbatim from the SCF deck (pages 52-54)
 * Photos: unused Drive photos + contextually appropriate reuses
 */
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Send, CheckCircle, Heart, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function AngelsOfLight() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch about the Angels of Light initiative.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/building-school_ff708dac.png"
            alt="Community building together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/90 via-[#0a1428]/70 to-[#0a1428]/40" />
        </div>
        <div className="relative container pt-28 pb-16">
          <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
            The Angels of Light Initiative
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            A Community of Angels
            <span className="block text-[#D4A853]">Expanding Life-Saving Impact</span>
          </h1>
          <p className="font-body text-white/80 text-lg max-w-2xl">
            A community of Angels working together to expand life-saving impact for those in need.
          </p>
          <a
            href="#become-angel"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all hover:shadow-lg hover:shadow-[#D4A853]/20"
          >
            <Sparkles size={16} /> BECOME AN ANGEL OF LIGHT
          </a>
        </div>
      </section>

      {/* What is Angels of Light */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
                About the Initiative
              </p>
              <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-6">
                Multiply the Reach of Sabin Children's Foundation
              </h2>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed mb-6">
                Angels of Light is a small group of Angels who work together to multiply the reach of Sabin Children's Foundation.
              </p>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed mb-6">
                By sharing the responsibility of giving, these partners help identify, fund, and scale the most impactful and efficient humanitarian projects around the world.
              </p>
              <p className="font-body text-[#3e4c59] text-lg leading-relaxed">
                Together, Angels of Light allow us to move faster, reach more children, and support more life-saving programs than any individual could alone.
              </p>
            </div>
            <div>
              <img
                src="/manus-storage/aol-boy-v3_d225d5df.png"
                alt="Child smiling"
                className="rounded-lg shadow-2xl w-full object-cover object-[center_20%]"
                style={{ height: '480px' }}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works — 3 Columns */}
      <AnimatedSection className="py-20 md:py-28 bg-[#12365a]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
              How It Works
            </p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">
              Three Steps to Changing Lives
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "You Give",
                desc: "Your contribution goes 100% directly to life-saving programs for children and families. All operational costs are covered separately by private donors.",
                img: "/manus-storage/you-give-mother-child_2557e047.jpg",
              },
              {
                title: "We Direct",
                desc: "We identify, vet, and partner with trusted local organizations and physicians delivering the most impactful and efficient humanitarian solutions.",
                img: "/manus-storage/food-prep_b1ea10c6.png",
              },
              {
                title: "Lives Change",
                desc: "You receive clear reporting and measurable results, showing the real impact your support creates around the world.",
                img: "/manus-storage/guatemala-family-garden_4ce7b931.jpg",
              },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#D4A853] text-[#12365a] font-stat font-bold text-sm flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-white text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="font-body text-white/70 text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Become an Angel — Invitation + Benefits */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold italic">
                An Invitation
              </p>
              <h2 className="font-display text-[#12365a] text-3xl md:text-4xl lg:text-5xl font-bold italic mb-4">
                Become an Angel of Light.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Flexible",
                  desc: "Choose the participation level that fits your life — 1%, 5%, 10%, or a set annual gift.",
                  icon: "flex",
                },
                {
                  title: "Transparent",
                  desc: "100% of your gift is applied to our supported programs.",
                  icon: "transparent",
                },
                {
                  title: "Community",
                  desc: "Join a small, trusted circle sharing both the responsibility and the joy of meaningful giving.",
                  icon: "community",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#12365a] rounded-lg p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#D4A853]/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-[#D4A853]" size={22} />
                  </div>
                  <h3 className="font-display text-white text-xl font-bold mb-3">{item.title}</h3>
                  <div className="w-8 h-0.5 bg-[#D4A853] mx-auto mb-4" />
                  <p className="font-body text-white/70 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Scripture Quote */}
      <section className="py-16 md:py-20 bg-[#12365a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-white/90 text-xl md:text-2xl italic leading-relaxed mb-4">
              "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."
            </p>
            <p className="font-body text-[#D4A853] text-base font-semibold">Matthew 5:16</p>
          </div>
        </div>
      </section>

      {/* Impact Stories from the Deck */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
              Real Impact
            </p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">
              What Angels of Light Make Possible
            </h2>
            <p className="font-body text-[#3e4c59] text-lg max-w-2xl mx-auto">
              Every contribution creates a ripple effect — reaching children and families in the places that need it most.
            </p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Story 3 — Domestic Abuse Survivor */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/manus-storage/cairo-heba_2d53c88a.webp"
                  alt="Acid attack survivor in Egypt receiving care"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="font-display text-[#12365a] text-2xl font-bold mb-4">Domestic Abuse Survivor in Egypt</h3>
                <p className="font-body text-[#3e4c59] text-base leading-relaxed mb-4">
                  After bravely ending her engagement, her former fiancé attacked her with acid, leaving her face severely burned and her eyesight at risk. Through the Angels of Light Project, $15,000 funded the skin grafts and eye surgery she urgently needed—giving her the chance to heal, regain her sight, and begin rebuilding her life.
                </p>
                <div className="text-center inline-block">
                  <p className="font-stat text-[#D4A853] text-2xl font-bold">$15,000</p>
                  <p className="font-body text-[#3e4c59] text-sm">Life-Changing Surgery</p>
                </div>
              </div>
            </div>

            {/* Story 4 — Chinese Orphans */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display text-[#12365a] text-2xl font-bold mb-4">Chinese Orphans</h3>
                <p className="font-body text-[#3e4c59] text-base leading-relaxed mb-4">
                  In a small orphanage in China, children whose parents were in prison faced the bitter winter cold without proper coats. When we learned of their situation, warm winter coats were provided for every child. What had been a season of hardship became one of comfort and care—children finally able to play, learn, and rest knowing they were warm.
                </p>
                <div className="text-center inline-block">
                  <p className="font-stat text-[#D4A853] text-2xl font-bold">$5,000</p>
                  <p className="font-body text-[#3e4c59] text-sm">Warmth for Every Child</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/manus-storage/chinese-orphans_00fe62d9.webp"
                  alt="Chinese orphans with SCF volunteer"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Story 5 — Learning Center for Disabled Children */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/manus-storage/disabled-learning-center-v2_b4aee080.png"
                  alt="Child at disabled children's learning center"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display text-[#12365a] text-2xl font-bold mb-4">A Learning Center for Disabled Children</h3>
                <p className="font-body text-[#3e4c59] text-base leading-relaxed mb-4">
                  In rural Chennai, India, many orphaned children with disabilities have little access to safe housing, specialized education, or supportive care. Through Sabin Children's Foundation's support, a new disabled children's learning center and dormitory was constructed at the Pathway Sabin Center for Children.
                </p>
                <p className="font-body text-[#3e4c59] text-base leading-relaxed">
                  Today, 220 orphaned and handicapped children have a safe place to live, learn, and receive the care and support they need to grow and thrive. The center provides education, housing, and a supportive community where every child is given the opportunity to reach their full potential.
                </p>
              </div>
            </div>

            {/* Story 6 — Christmas in Thailand */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-display text-[#12365a] text-2xl font-bold mb-4">Christmas in Thailand</h3>
                <p className="font-body text-[#3e4c59] text-base leading-relaxed mb-4">
                  In a small village in Thailand, many children had never experienced Christmas—no gifts, no toys, no celebration of their own. When we visited, we learned that something as simple as a bicycle could change everything. Happily, we were able to gift each child a brand-new bike and the supplies needed to ride safely—creating a Christmas filled with joy and laughter.
                </p>
                <div className="text-center inline-block">
                  <p className="font-stat text-[#D4A853] text-2xl font-bold">$3,000</p>

                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/manus-storage/christmas-thailand-v2_85706d92.png"
                  alt="Children with Christmas bicycles in Thailand"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Venture Philanthropy Testimonial */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2 flex flex-col gap-4">
                <img
                  src="/manus-storage/rising-star-1_f1f91089.jpg"
                  alt="Becky with Rising Star Outreach students in India"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <img
                  src="/manus-storage/rising-star-2_a5fb59df.jpg"
                  alt="Becky hugging two Rising Star students"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
              <div className="lg:col-span-3">
                <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
                  Venture Philanthropy
                </p>
                <h3 className="font-display text-[#12365a] text-2xl font-bold mb-4">Rising Star Outreach</h3>
                <p className="font-body text-[#3e4c59] text-base leading-relaxed mb-6">
                  This story captures the essence of our venture philanthropy model. Our early investment in the land for Rising Star Outreach helped launch a school that has since educated hundreds of children and continues to flourish.
                </p>
                <blockquote className="border-l-4 border-[#D4A853] pl-6 mb-6">
                  <p className="font-body text-[#3e4c59] text-base italic leading-relaxed mb-4">
                    "Thank you, again, for the extraordinary leap of faith in donating $85,000 for the land on which we built a school for Rising Star Outreach. Since its opening in 2005, the school has educated hundreds of children, many of whom have gone on to attend college and pursue advanced degrees. In 2019, the school was recognized as the number one school in all of India for hands-on learning. This success was made possible in part through a partnership with Harvard."
                  </p>
                  <footer className="font-body text-[#12365a] text-sm font-semibold">— Becky, PRW</footer>
                </blockquote>
                <div className="inline-block">
                  <p className="font-stat text-[#D4A853] text-2xl font-bold">$85,000</p>
                  <p className="font-body text-[#3e4c59] text-sm">Investment That Keeps Growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Story 7 — Hope for Lusaka's Street Children */}
      <AnimatedSection className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/manus-storage/lusaka-3_d337782e.jpg"
                alt="Children carrying babies on their backs in Lusaka, Zambia"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#D4A853]/10 text-[#D4A853] font-body text-xs font-semibold tracking-wider uppercase rounded mb-4">Protection &amp; Education</span>
              <p className="font-body text-[#3e4c59]/50 text-sm mb-2">Zambia</p>
              <h3 className="font-display text-[#12365a] text-2xl font-bold mb-4">Hope for Lusaka's Street Children</h3>
              <p className="font-body text-[#3e4c59] text-base leading-relaxed mb-6">
                In Lusaka, Zambia, an estimated 100,000 children live on the streets, facing daily hunger, illness, and danger. Through Sabin Children's Foundation's support, drop-in centers and a medical clinic now serve thousands of orphaned and vulnerable children — providing shelter, meals, medical care, counseling, education, and skills training. Every day, the feeding center serves approximately 600 meals to children living on the streets of Lusaka.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form — "Contact Us to Become an Angel of Light" */}
      <AnimatedSection id="become-angel" className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-100 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h2 className="font-display text-[#12365a] text-2xl font-bold mb-3">Thank You</h2>
                <p className="font-body text-[#3e4c59] text-base mb-6">
                  We've received your interest in becoming an Angel of Light. A member of our team will be in touch with you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="px-6 py-2.5 bg-[#12365a] hover:bg-[#0d2847] text-white font-body font-medium text-sm rounded transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#D4A853]/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-[#D4A853]" size={24} />
                  </div>
                  <h2 className="font-display text-[#12365a] text-2xl md:text-3xl font-bold mb-2">
                    Contact Us to Become an Angel of Light
                  </h2>
                  <p className="font-body text-[#3e4c59] text-base">
                    Be one of the first Angels of Light. Fill out the form below and we'll reach out to share more.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="mb-6">
                  <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors resize-none bg-[#ffffff]"
                    placeholder="Tell us about your interest in becoming an Angel of Light..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all hover:shadow-lg hover:shadow-[#D4A853]/20"
                >
                  <Send size={16} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/children-waving_f0d014ab.png"
            alt="Children waving"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1428]/70" />
        </div>
        <div className="relative container text-center">
          <p className="font-display text-white/90 text-xl md:text-2xl italic leading-relaxed mb-4 max-w-2xl mx-auto">
            "Inasmuch as ye have done it unto the least of these my brethren, ye have done it unto me."
          </p>
          <p className="font-body text-[#D4A853] text-base font-semibold mb-8">Matthew 25:40</p>
          <a
            href="#become-angel"
            className="px-10 py-4 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-base tracking-wide rounded transition-all hover:shadow-lg inline-flex items-center gap-2"
          >
            <Sparkles size={18} /> BECOME AN ANGEL OF LIGHT
          </a>
        </div>
      </section>
    </div>
  );
}
