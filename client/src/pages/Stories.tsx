/*
 * SCF Stories Page — Documentary Realism Design
 * Impact stories from the deck
 */
import { Link } from "wouter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Quote } from "lucide-react";

const STORIES = [
  {
    title: "Life-changing Cataract Surgery",
    location: "Philippines",
    category: "Eye Surgery",
    img: "/manus-storage/cataract-mother-cropped_37f34fe8.jpg",
    text: "This young mother saw her children for the first time thanks to a cataract surgery.",
    stat: "$26",
    statLabel: "Restores sight",
  },
  {
    title: "Nutrition Programs That Save Lives",
    location: "Guatemala",
    category: "Nutrition",
    img: "/manus-storage/nutrition-girl-face_2cad4fee.jpg",
    text: "For just $8 a month, a child gets the nutrition they need to survive and thrive. Our partner in Guatemala delivers emergency care to severely malnourished children and teaches their mothers how to sustain that health for good, because a healthy baby starts with an empowered mom.",
    stat: "$8/mo",
    statLabel: "Saves a child from malnutrition",
  },
  {
    title: "A New Smile, A New Life",
    location: "Peru",
    category: "Surgery",
    img: "/manus-storage/cleft-palate-clean_d0b5286c.png",
    text: "Cleft palate surgery gives a child the ability to eat, speak, and smile. In Peru, our partners perform cleft palate repairs, clubfoot corrections, and other life-changing surgeries for children who would otherwise never receive care.",
    stat: "$100",
    statLabel: "Cleft palate surgery",
  },
  {
    title: "Asa's Children: All Born Blind",
    location: "Pakistan",
    category: "Eye Surgery",
    img: "/manus-storage/asa-family-clean2_49decb9f.jpg",
    text: "When all three of Asa's children were born with cataract blindness, she lost all hope. Thanks to a simple surgery, they opened their eyes for the first time.",
    stat: "$50",
    statLabel: "Per child, restores sight",
  },
  {
    title: "Abandoned Orphans in India",
    location: "India",
    category: "protection & education",
    img: "/manus-storage/gary-orphans_51388a11.jpg",
    objectPosition: "top",
    aspectRatio: "3/4",
    text: "Huddled beside their mother's lifeless body in a roadside gutter, three young girls were found alone and frightened as people passed by. They were brought to Pathway in India, where they found safety, care, and a loving family. Today, the sisters are flourishing — growing up with hope for a brighter future.",
  },
  {
    title: "Clubfoot Surgery",
    location: "Philippines",
    category: "Surgery",
    img: "/manus-storage/clubfoot_sidebyside_6e6c240e.jpg",
    text: "After corrective clubfoot surgery, this young boy walked confidently for the first time. This is him proudly wearing his first pair of shoes.",
    stat: "$30",
    statLabel: "Corrects a child's foot",
  },
  {
    title: "Clean Water Changes Everything",
    location: "Uganda",
    category: "Clean Water",
    img: "/manus-storage/children-water_f6e57a45.png",
    text: "A single well can bring clean water to an entire village. In Uganda and across East Africa, SCF partners install fresh water wells and sanitation systems that transform communities, reducing disease and giving children the chance to attend school instead of walking miles for water.",
    stat: "$5,000–$12,000",
    statLabel: "Brings clean water to a community",
  },
  {
    title: "Leprosy Screening in India",
    location: "India",
    category: "Healthcare",
    img: "/manus-storage/leprosy-4_73d61a8b.jpg",
    text: "Sabin Children's Foundation sponsors a leprosy screening program for at-risk schoolchildren in Hyderabad and Chennai, India. In its first two years, the program screened over 300,000 children and cured thousands of cases.",
    stat: "$10",
    statLabel: "Per child screened",
  },
];

export default function Stories() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/stories-hero-banner_2a812272.jpg" alt="Mother and child in rural home" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/85 via-[#0a1428]/60 to-[#0a1428]/30" />
        </div>
        <div className="relative container pt-28 pb-16">
          <div>
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Stories of Impact</p>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Real Stories,
              <span className="block text-[#D4A853]">Real Lives Changed</span>
            </h1>
            <p className="font-body text-white/80 text-lg max-w-xl">
              Every dollar creates a ripple effect. These are the stories of lives transformed through the generosity of our partners.
            </p>
          </div>
        </div>
      </section>

      {/* Video Stories */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Short Films</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Stories in Their Own Words</h2>
            <p className="font-body text-[#3e4c59] text-lg mt-4 max-w-2xl mx-auto">Watch the people and projects behind the numbers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              { title: "Charity Vision", desc: "Restoring sight to thousands through affordable eye care.", videoId: "PZNsjotMgEE" },
              { title: "Rising Star", desc: "A child's journey from vulnerability to hope.", videoId: "9X_XSnYdBJM" },
              { title: "The Humble Village", desc: "How one community's life changed with clean water and support.", videoId: "U-Dxz4URuT0" },
              { title: "Pathway", desc: "Following the journey of children and families transformed by SCF programs.", videoId: "_CpT8ZJR7TI" },
            ].map((video, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
                {video.videoId ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-[#12365a] flex items-center justify-center">
                    <p className="font-body text-white/60 text-sm">Video coming soon</p>
                  </div>
                )}
                <div className="p-5 bg-white">
                  <h3 className="font-display text-[#12365a] text-lg font-bold mb-1">{video.title}</h3>
                  <p className="font-body text-[#3e4c59] text-sm">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote */}
      <AnimatedSection className="py-16 md:py-20 bg-[#12365a]">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <Quote className="text-[#D4A853]/30 mx-auto mb-4" size={48} />
            <p className="font-display text-white text-2xl md:text-3xl italic leading-relaxed mb-6">
              "Care without barriers. Every life has equal value."
            </p>
            <p className="font-body text-[#D4A853] text-base font-semibold">— Sabin Children's Foundation</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Stories */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="space-y-20">
            {STORIES.map((story, i) => (
              <article key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-lg shadow-xl">
                    <img src={story.img} alt={story.title} className="w-full object-cover" style={{ objectPosition: (story as any).objectPosition || 'center', aspectRatio: (story as any).aspectRatio || '16/10' }} />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#D4A853]/10 text-[#D4A853] font-body text-xs font-semibold tracking-wider uppercase rounded">{story.category}</span>
                    <span className="font-body text-[#3e4c59]/50 text-sm">{story.location}</span>
                  </div>
                  <h2 className="font-display text-[#12365a] text-2xl md:text-3xl font-bold mb-4">{story.title}</h2>
                  <p className="font-body text-[#3e4c59] text-base md:text-lg leading-relaxed mb-6">{story.text}</p>
                  {(story as any).stat && (
                    <div className="flex items-center gap-4 border-l-4 border-[#D4A853] pl-4">
                      <div>
                        <p className="font-stat text-[#D4A853] text-3xl font-bold leading-none">{(story as any).stat}</p>
                        <p className="font-body text-[#12365a] text-sm font-semibold mt-1">{(story as any).statLabel}</p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Impact Numbers */}
      <AnimatedSection className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold mb-4">What Your Generosity Makes Possible</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { cost: "$26", label: "Cataract Surgery" },
              { cost: "$8/mo", label: "Child Nutrition" },
              { cost: "$30", label: "Clubfoot Surgery" },
              { cost: "$100", label: "Cleft Palate Surgery" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-[#f5f7fb] rounded-lg">
                <p className="font-stat text-[#D4A853] text-3xl font-bold mb-2">{item.cost}</p>
                <p className="font-display text-[#12365a] text-sm font-bold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Photo Gallery */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Gallery</p>
            <h2 className="font-display text-[#12365a] text-3xl md:text-4xl font-bold">Faces of Hope</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              "/manus-storage/child-portrait-crop_a19c0ab0.png",
              "/manus-storage/girl-glasses_f44b1d2b.png",
              "/manus-storage/boy-glasses_8817b354.png",
              "/manus-storage/child-smile-crop_e17f6b11.png",
              "/manus-storage/woman-headscarf_c6340b22.png",
              "/manus-storage/faces-of-hope-kids_f48425ed.png",
              "/manus-storage/children-india_3608c2d6.png",
              "/manus-storage/children-sitting-crop_afcc347f.png",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg aspect-square">
                <img src={src} alt="SCF beneficiary" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/children-waving_f0d014ab.png" alt="Children waving" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1428]/70" />
        </div>
        <div className="relative container text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Next Story
          </h2>
          <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-8">Your generosity creates ripple effects that transform lives. Join us today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all">
              DONATE NOW <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-body font-bold text-sm tracking-wide rounded transition-all hover:bg-white/10">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
