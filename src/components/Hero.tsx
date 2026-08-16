import { motion } from "framer-motion";
import AnimatedUnderline from "./AnimatedUnderline";
import WobblyLines from "./WobblyLines";
import LoopingVideo from "./LoopingVideo";

const Hero = () => {
  return (
    <section className="min-h-[85vh] md:min-h-screen flex flex-col justify-center px-5 md:px-12 pt-32 md:pt-48 pb-10 md:pb-20 relative overflow-x-hidden">
      {/* Video background */}
      <LoopingVideo
        src="/hero-bg.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/hero-poster.jpg"
      />
      <div className="absolute inset-0 bg-background/70 z-0" aria-hidden="true" />

      {/* Wobbly lines background - behind everything */}
      <WobblyLines />


      {/* Headline */}
      <div className="relative mb-6 md:mb-16 z-[2]">
        <h1 className="text-[clamp(36px,7vw,110px)] font-display font-extrabold tracking-[-0.03em] leading-[0.9] uppercase">
          {/* Mobile: stacked lines */}
          <motion.span
            className="block md:hidden overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block text-[clamp(42px,11.5vw,84px)]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              WE REPRESENT
            </motion.span>
          </motion.span>
          <motion.span
            className="block md:hidden overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block text-[clamp(42px,11.5vw,84px)]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              CREATORS WHO
            </motion.span>
          </motion.span>
          <motion.span
            className="block md:hidden overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block text-[clamp(42px,11.5vw,84px)]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedUnderline delay={0.6} color="blue">
                <span className="text-blue-accent">Move Culture.</span>
              </AnimatedUnderline>
            </motion.span>
          </motion.span>

          {/* Desktop: two lines */}
          <motion.span
            className="hidden md:block overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              WE REPRESENT
              <br />
              CREATORS WHO
            </motion.span>
          </motion.span>
          <motion.span
            className="hidden md:block overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedUnderline delay={0.6} color="blue">
                <span className="text-blue-accent">Move Culture.</span>
              </AnimatedUnderline>
            </motion.span>
          </motion.span>
        </h1>
      </div>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-[580px] relative z-[2] mb-6 md:mb-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <strong className="text-foreground font-medium">
          We connect creators with brands across every platform and every industry.
        </strong>{" "}
        High-value partnerships built on real audiences and real results.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center relative z-[2] mb-6 md:mb-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
      >
        <a
          href="#contact"
          className="bg-blue-accent text-white font-semibold text-sm md:text-[15px] px-6 md:px-8 py-3 md:py-3.5 rounded-none hover:bg-blue-glow transition-colors text-center"
        >
          Get started
        </a>
        <a
          href="#how"
          className="border border-border text-foreground font-medium text-sm md:text-[15px] px-6 md:px-8 py-3 md:py-3.5 rounded-none hover:border-blue-accent/40 hover:text-blue-accent transition-all text-center"
        >
          How it works
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;