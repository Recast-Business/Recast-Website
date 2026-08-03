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
        <div className="marquee-track animate-scroll-right">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="flex items-center gap-16 md:gap-20 px-8 md:px-10">
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
