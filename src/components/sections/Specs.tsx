import { motion } from 'framer-motion';

const specs = [
  { label: "CHASSIS", value: "AERO-WEAVE TITANIUM" },
  { label: "MIDSOLE", value: "KINETIC FOAM V2" },
  { label: "DROP", value: "8MM OFFSET" },
  { label: "WEIGHT", value: "198G (SIZE 9)" },
  { label: "LACING", value: "TENSION-LOCK CABLES" },
  { label: "OUTSOLE", value: "CONDUCTIVE RUBBER" }
];

export function Specs() {
  return (
    <section className="py-32 md:py-48 bg-[#030303] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm font-sans font-bold tracking-[0.4em] text-primary mb-24 uppercase text-center flex items-center justify-center gap-6"
        >
          <span className="w-12 md:w-24 h-[1px] bg-primary/40" />
          Technical Architecture
          <span className="w-12 md:w-24 h-[1px] bg-primary/40" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 md:gap-y-32">
          {specs.map((spec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col text-center md:text-left relative group"
            >
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 hidden md:block" />
              <span className="text-white/30 text-xs md:text-sm tracking-[0.3em] font-sans mb-4 uppercase font-bold">{spec.label}</span>
              <span className="text-white text-3xl md:text-4xl font-display font-bold tracking-tight group-hover:text-primary transition-colors duration-500">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
