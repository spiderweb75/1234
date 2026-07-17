import { motion } from 'framer-motion';

export function Outro() {
  return (
    <section className="min-h-[80dvh] w-full flex items-center justify-center bg-black relative overflow-hidden border-t border-white/5 py-32">
      {/* Dynamic ambient glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15)_0%,transparent_60%)] pointer-events-none" 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 px-6 max-w-6xl w-full"
      >
        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-bold text-white uppercase tracking-tighter leading-[0.9] mb-16">
          BORN IN THE DARK. <br />
          <span className="text-primary">CRAFTED FOR THE FLASH.</span>
        </h2>
        
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
          whileTap={{ scale: 0.98 }}
          className="px-12 py-6 bg-primary text-white font-sans font-bold tracking-[0.2em] uppercase text-sm md:text-base transition-colors duration-300 rounded-sm"
        >
          Acquire VoltStrike
        </motion.button>
      </motion.div>
    </section>
  );
}
