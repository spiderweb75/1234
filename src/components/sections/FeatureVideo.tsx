import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function FeatureVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={ref} className="py-32 md:py-64 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
        
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full flex items-center gap-6 mb-12">
            <span className="text-primary tracking-[0.3em] font-sans text-xs uppercase font-bold">Initiate Sequence</span>
            <div className="h-[1px] flex-grow bg-white/10" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-bold text-white mb-10 leading-[0.9] tracking-tighter">
            HARNESS<br />THE<br />STORM.
          </h2>
          <p className="text-lg md:text-2xl text-white/50 font-sans max-w-md leading-relaxed">
            The world is full of static. Break the silence. 
            Every strike of the pavement is an opportunity to generate velocity. 
            <strong className="text-white font-normal block mt-6 border-l-2 border-primary pl-6">Don't just run. Surge.</strong>
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-7 relative w-full h-[60vh] md:h-[80vh]"
          style={{ y }}
        >
          <div className="absolute inset-0 w-full h-full rounded-sm overflow-hidden group">
            <video 
              src="/assets/feature-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
