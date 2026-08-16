import { motion } from "framer-motion";

const brands = [
  "Fanatics",
  "Stake",
  "Temu",
  "Rainbet",
  "Fashion Nova",
  "Kalshi",
  "Dimebit",
  "BetOnline",
  "Roobet",
  "Gamba",
  "Jack.com",
  "Telegram",
];

const Brands = () => {
  return (
    <section aria-label="Brand partners" className="py-12 md:py-20 border-y border-border overflow-hidden">
      <motion.p
        className="text-center text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8 md:mb-12 flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        . Our creators have worked with .
      </motion.p>
      <div className="overflow-hidden">
        <div className="marquee-track animate-scroll-right-slow-mobile md:animate-scroll-right-slow">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            // Spacing is scaled down on small screens. At the desktop values
            // (64px gap plus 32px padding each side) a 375px phone shows barely
            // one brand with the ace marooned in empty space, which reads
            // nothing like the desktop rhythm.
            <span key={i} className="flex items-center gap-6 sm:gap-10 md:gap-20 px-4 sm:px-6 md:px-10">
              <motion.span
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span
                  className="text-xl md:text-[22px] font-display font-bold tracking-[-0.5px] text-foreground hover:text-blue-accent/60 transition-colors whitespace-nowrap cursor-default uppercase"
                >
                  {brand}
                </span>
              </motion.span>
              <span className="text-blue-accent/20">♠</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
