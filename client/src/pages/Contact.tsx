/*
 * SCF Contact Page — Documentary Realism Design
 * Contact form for reaching the foundation
 */
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! Your message has been sent.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/holy-innocents_26c52704.jpg" alt="Four children looking at the camera in Zambia" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/70 via-[#0a1428]/45 to-[#0a1428]/15" />
        </div>
        <div className="relative container pt-28 pb-16">
          <div>
            <p className="font-body text-[#D4A853] text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Get in Touch</p>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Let's Connect</h1>
            <p className="font-body text-white/80 text-lg max-w-xl">
              Whether you're interested in partnering, donating, or learning more about our work, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <AnimatedSection className="py-20 md:py-28 bg-[#f5f7fb]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-100 text-center">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h2 className="font-display text-[#12365a] text-2xl font-bold mb-3">Message Sent</h2>
                  <p className="font-body text-[#3e4c59] text-base mb-6">
                    Thank you for reaching out. A member of our team will be in touch with you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "", interest: "general" });
                    }}
                    className="px-6 py-2.5 bg-[#12365a] hover:bg-[#0d2847] text-white font-body font-medium text-sm rounded transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="font-display text-[#12365a] text-2xl font-bold mb-6">Send Us a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">I'm Interested In</label>
                      <select name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]">
                        <option value="general">General Inquiry</option>
                        <option value="donate">Making a Donation</option>
                        <option value="angels">Angels of Light Program</option>
                        <option value="partner">Partnership Opportunities</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors bg-[#ffffff]" placeholder="How can we help?" />
                  </div>
                  <div className="mb-6">
                    <label className="font-body text-[#3e4c59] text-sm font-semibold block mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-200 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A853]/50 focus:border-[#D4A853] transition-colors resize-none bg-[#ffffff]" placeholder="Tell us about your interest in Sabin Children's Foundation..." />
                  </div>
                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4A853] hover:bg-[#c49a45] text-[#12365a] font-body font-bold text-sm tracking-wide rounded transition-all hover:shadow-lg hover:shadow-[#D4A853]/20">
                    <Send size={16} /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-[#12365a] text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="text-[#D4A853] mt-1 shrink-0" size={18} />
                      <div>
                        <p className="font-body text-[#3e4c59] text-sm font-semibold">Email</p>
                        <a href="mailto:eric@sabinfoundation.org" className="font-body text-[#12365a] text-sm hover:text-[#D4A853] transition-colors">eric@sabinfoundation.org</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-[#D4A853] mt-1 shrink-0" size={18} />
                      <div>
                        <p className="font-body text-[#3e4c59] text-sm font-semibold">Phone</p>
                        <a href="tel:8583655112" className="font-body text-[#12365a] text-sm hover:text-[#D4A853] transition-colors">858-365-5112</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#D4A853] mt-1 shrink-0" size={18} />
                      <div>
                        <p className="font-body text-[#3e4c59] text-sm font-semibold">Address</p>
                        <a href="https://maps.google.com/?q=15+W+S+Temple+Suite+900+Salt+Lake+City+UT+84101" target="_blank" rel="noopener noreferrer" className="font-body text-[#12365a] text-sm hover:text-[#D4A853] transition-colors">15 W S Temple, Suite 900<br />Salt Lake City, UT 84101</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#12365a] rounded-lg p-6">
                  <h3 className="font-display text-white text-lg font-bold mb-3">Angels of Light</h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed mb-4">
                    Interested in joining our Angels of Light initiative? This small group of caring individuals works together to multiply the reach of SCF.
                  </p>
                  <a href="/angels-of-light" className="inline-block font-body text-[#D4A853] text-sm font-semibold hover:underline">Learn more about Angels of Light &rarr;</a>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-display text-[#12365a] text-lg font-bold mb-3">Partnership Inquiries</h3>
                  <p className="font-body text-[#3e4c59] text-sm leading-relaxed">
                    If you represent an organization and would like to explore a partnership with Sabin Children's Foundation, please reach out. We're always looking for trusted partners who share our commitment to transforming lives.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-display text-[#12365a] text-lg font-bold mb-3">Visit Our Projects</h3>
                  <p className="font-body text-[#3e4c59] text-sm leading-relaxed">
                    Angels of Light partners receive the invitation to visit projects in person. Contact us to learn more about upcoming trips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
