import { motion } from 'framer-motion';

export function Statement() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black px-6 py-32 md:py-48 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-16 md:gap-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl lg:text-[6rem] font-display font-bold leading-[1.05] text-white tracking-tight"
        >
          ENERGY CANNOT BE CREATED.
          <br />
          <span className="text-white/30">BUT IT CAN BE </span>
          <span className="text-primary italic">WORN.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl pl-0 md:pl-10 border-l-0 md:border-l border-primary/50"
        >
          <p className="text-lg md:text-3xl text-white/60 font-sans leading-relaxed">
            We didn't design a shoe. We engineered a conduit. 
            Every fiber, every groove, every structural pillar is built to harness momentum and return it with lethal precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
