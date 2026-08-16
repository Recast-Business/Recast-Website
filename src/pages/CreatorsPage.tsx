import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypeformApplication from "@/components/TypeformApplication";
import WobblyLines from "@/components/WobblyLines";
import LoopingVideo from "@/components/LoopingVideo";

const perks = [
  {
    title: "Premium Brand Deals",
    description: "Get matched with top-tier brands for high-value sponsorships across gaming, entertainment, and lifestyle.",
  },
  {
    title: "Creative Freedom",
    description: "We protect your voice. Authentic partnerships that fit your brand and feel right for your audience.",
  },
  {
    title: "Full Support",
    description: "We're with you at every stage of your journey, handling the business side so you can focus on creating.",
  },
  {
    title: "Grow Your Reach",
    description: "Leverage our network to expand into new platforms, markets, and revenue streams.",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply in minutes",
    description: "Fill out a short form. We review every application personally, no bots, no filters.",
  },
  {
    number: "02",
    title: "We find your fit",
    description: "We match you with brands that suit your content, your audience, and your values.",
  },
  {
    number: "03",
    title: "Activate campaigns",
    description: "We handle everything from briefs to content approvals, getting your brand campaigns live across your channels quickly.",
  },
  {
    number: "04",
    title: "Get paid",
    description: "Transparent payments, no delays. Simple as that.",
  },
];

const stats = [
  { value: "TBC", label: "Active Creators" },
  { value: "TBC", label: "Avg. Monthly Earnings" },
  { value: "TBC", label: "Brand Partners" },
  { value: "48h", label: "Response Time" },
];

const faqs = [
  {
    q: "Do I have to be exclusive to Recast?",
    a: "We don't require exclusivity. We just ask that campaigns we source are managed through us.",
  },
  {
    q: "How long before I get my first deal?",
    a: "It depends on fit and current brand briefs, but most creators on our roster land their first deal within a few weeks of being onboarded.",
  },
  {
    q: "What platforms do you support?",
    a: "TikTok, Instagram, X, YouTube, Twitch, and Kick. If you're active on multiple platforms, that works in your favour.",
  },
  {
    q: "What size audience do I need?",
    a: "We work with creators of all sizes. Engagement and niche relevance matter more than raw follower count.",
  },
  {
    q: "What regions do you operate in?",
    a: "We have a global network with connections across every major region, not just tier one markets. Wherever your audience is, we can reach them. All deals comply with local advertising regulations.",
  },
  {
    q: "What type of content do you work with?",
    a: "We work with creators across every niche, from gaming and entertainment to lifestyle, sports, fashion, and beyond. No matter what your content looks like, if you've got an engaged audience, there's a place for you at Recast.",
  },
];

const creatorQuestions = [
  { id: "creator-contact", label: "Let's start with the basics.", type: "group" as const, placeholder: "", required: true, fields: [
    { id: "name", label: "Your name", type: "text" as const, placeholder: "Your full name", required: true },
    { id: "email", label: "Email", type: "email" as const, placeholder: "you@email.com", required: true },
    { id: "phone", label: "Phone number", type: "text" as const, placeholder: "Your phone number", required: false },
  ]},
  { id: "platforms", label: "What platforms do you use?", type: "multi-select" as const, placeholder: "", options: ["TikTok", "Instagram", "X", "YouTube", "Twitch", "Kick"], required: true },
  { id: "about", label: "Tell us about yourself and your content", type: "textarea" as const, placeholder: "What kind of content do you create? (optional)", required: false },
];

const CreatorsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Helmet>
        <title>For Creators - Recast | Monetise Your Influence</title>
        <meta name="description" content="Join Recast to land premium brand deals in gaming and entertainment. Creative freedom, full support, and high-value sponsorships." />
        <link rel="canonical" href="https://recast.gg/creators" />
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
            . For Creators
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
                Monetise Your
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
                Influence.
              </motion.span>
            </motion.span>
          </h1>
          <motion.p
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Join Recast's roster and unlock premium brand deals with the biggest names in gaming and entertainment.
          </motion.p>
          <motion.div
            className="h-[2px] mt-8 bg-blue-accent max-w-[120px]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* Stats strip - hidden until real data is confirmed
      <section className="border-y border-border py-12 md:py-20 px-5 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-[1400px] mx-auto">
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
      */}

      {/* Perks */}
      <section className="py-16 md:py-32 px-5 md:px-12 border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            . Creator Perks
          </motion.p>
          <motion.h2
            className="text-3xl md:text-6xl font-display font-extrabold tracking-[-0.03em] uppercase mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Creators <span className="text-blue-accent">Choose Recast</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                className="border border-border p-8 md:p-10 hover:border-blue-accent/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase mb-3">{p.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{p.description}</p>
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
            className="text-3xl md:text-6xl font-display font-extrabold tracking-[-0.03em] uppercase mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple to join.<br /><span className="text-blue-accent">Built to earn.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
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
        title="Join The Roster"
        subtitle="Apply to become a Recast creator. We'll review your profile and get back to you within 48 hours."
        questions={creatorQuestions}
        defaultType="creator"
      />

      <Footer />
    </main>
  );
};

export default CreatorsPage;
