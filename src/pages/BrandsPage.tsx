import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypeformApplication from "@/components/TypeformApplication";
import WobblyLines from "@/components/WobblyLines";
import LoopingVideo from "@/components/LoopingVideo";

const stats = [
  { value: "697M+", label: "Combined Reach" },
  { value: "7.4B+", label: "Views Generated" },
  { value: "20+", label: "Brand Partners" },
];

const benefits = [
  {
    title: "Authentic Audiences",
    description: "Access a global network of creators with deeply engaged communities across gaming, entertainment, and lifestyle verticals.",
  },
  {
    title: "Performance-Driven",
    description: "Every campaign is built around measurable outcomes that matter to your business.",
  },
  {
    title: "Compliance First",
    description: "We handle regulatory requirements across jurisdictions so you can scale with confidence.",
  },
  {
    title: "End-To-End Management",
    description: "From creator selection to content approval and reporting, we manage the entire process.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brief us",
    description: "Tell us your goals, budget, and target audience. We'll take it from there.",
  },
  {
    number: "02",
    title: "We curate creators",
    description: "We hand-pick creators from our roster that match your brand, not just your budget.",
  },
  {
    number: "03",
    title: "Campaign goes live",
    description: "We manage content approvals, compliance, and scheduling across every channel.",
  },
];

const faqs = [
  {
    q: "Do you have a minimum campaign budget?",
    a: "We work with brands of all sizes and budgets. Whether you're testing the waters or scaling a global campaign, we'll find the right approach for you. Get in touch and we'll be upfront about what's achievable.",
  },
  {
    q: "How do you ensure compliance?",
    a: "All creators on our roster are briefed on advertising standards and regulations for their jurisdiction. We review content before it goes live and maintain compliance documentation.",
  },
  {
    q: "How are creators selected for my campaign?",
    a: "We match based on audience demographics, platform, content style, and past brand performance, not just follower count. Every shortlist is reviewed by our team before we present it to you.",
  },
  {
    q: "What regions do you operate in?",
    a: "We have a global network with creators and brand connections across every major region, not just tier one markets. Wherever your audience is, we can reach them.",
  },
  {
    q: "Can we run ongoing partnerships rather than one-off campaigns?",
    a: "We encourage long-term partnerships and focus on building a real relationship between Recast and your brand. The stronger that relationship, the better the results we deliver together.",
  },
];

const brandQuestions = [
  { id: "brand-contact", label: "Let's start with the basics.", type: "group" as const, placeholder: "", required: true, fields: [
    { id: "company", label: "Company name (if applicable)", type: "text" as const, placeholder: "Your company name", required: false },
    { id: "name", label: "Your name", type: "text" as const, placeholder: "Your full name", required: true },
    { id: "email", label: "Work email", type: "email" as const, placeholder: "you@company.com", required: true },
  ]},
  { id: "budget", label: "What's your estimated campaign budget?", type: "select" as const, placeholder: "", options: ["Under £10k", "£10k - £50k", "£50k - £150k", "£150k+", "I'm not sure / Prefer not to say"], required: true },
  { id: "timeline", label: "When are you looking to launch?", type: "select" as const, placeholder: "", options: ["Under a month", "1-3 months", "3+ months", "Specific date or timeframe"], required: true },
  { id: "goals", label: "Tell us about your campaign", type: "textarea" as const, placeholder: "What are you looking to achieve? Any specific goals or ideas? (optional)", required: false },
];

const BrandsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Helmet>
        <title>For Brands - Recast | Creator Partnerships for Gaming & Entertainment</title>
        <meta name="description" content="Partner with top creators through Recast. Authentic audiences, performance-driven campaigns, and end-to-end management." />
        <link rel="canonical" href="https://recast.gg/brands" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section id="main-content" className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center px-5 md:px-12 pt-20 md:pt-32 pb-12 md:pb-24 relative overflow-hidden">
        <LoopingVideo
          src="/hero-bg.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/hero-poster.jpg"
        />
        <div className="absolute inset-0 bg-background/70 z-0" aria-hidden="true" />
        <WobblyLines />
        <div className="relative z-10">
          <motion.p
            className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            . For Brands
          </motion.p>
          <h1 className="text-[clamp(30px,7vw,100px)] font-display font-extrabold tracking-[-0.03em] leading-[0.9] uppercase mb-6 md:mb-8">
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Connect With
              </motion.span>
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="block text-blue-accent"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                The Right Creators.
              </motion.span>
            </motion.span>
          </h1>
          <motion.p
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            We match brands with influential creators who deliver real, measurable results across gaming, entertainment, and lifestyle.
          </motion.p>
          <motion.div
            className="h-[2px] mt-8 bg-blue-accent max-w-[120px]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />
        </div>
      </section>

      <section className="border-y border-border py-12 md:py-24 px-5 md:px-12">
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-[1400px] mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-6xl font-display font-extrabold text-blue-accent tracking-tight">{stat.value}</p>
              <p className="text-[10px] md:text-sm text-muted-foreground tracking-[0.1em] uppercase mt-1 md:mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-32 px-5 md:px-12 border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            . Why Recast
          </motion.p>
          <motion.h2
            className="text-3xl md:text-6xl font-display font-extrabold tracking-[-0.03em] uppercase mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built For <span className="text-blue-accent">Performance</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="border border-border p-8 md:p-10 hover:border-blue-accent/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase mb-3">{b.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-32 px-5 md:px-12 border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            . How It Works
          </motion.p>
          <motion.h2
            className="text-3xl md:text-6xl font-display font-extrabold tracking-[-0.03em] uppercase mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple process.<br /><span className="text-blue-accent">Serious results.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="border-t border-border pt-6 pb-8 pr-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-[11px] font-bold tracking-[0.15em] text-blue-accent uppercase mb-4">Step {step.number}</p>
                <h3 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight mb-3 hover:text-blue-accent transition-colors">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-5 md:px-12 border-b border-border">
        <div className="max-w-[900px] mx-auto">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            . FAQ
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-display font-extrabold tracking-[-0.03em] uppercase mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Common <span className="text-blue-accent">Questions</span>
          </motion.h2>

          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-base md:text-lg group-hover:text-blue-accent transition-colors">{faq.q}</span>
                  <span className="text-blue-accent text-xl mt-0.5 shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground font-light leading-relaxed pb-6 max-w-[720px]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <TypeformApplication
        title="Partner With Us"
        subtitle="Tell us about your brand and campaign goals. We'll match you with the perfect creators."
        questions={brandQuestions}
        defaultType="brand"
      />

      <Footer />
    </main>
  );
};

export default BrandsPage;
