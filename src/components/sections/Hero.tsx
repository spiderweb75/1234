import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video 
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 text-center w-full px-6 flex flex-col items-center pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="overflow-hidden"
        >
          <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-display font-bold tracking-tighter leading-none text-white drop-shadow-2xl">
            VOLTSTRIKE
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 overflow-hidden"
        >
          <p className="text-primary font-sans font-bold tracking-[0.5em] uppercase text-xs md:text-lg drop-shadow-lg">
            Unrestricted Energy
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-sans font-bold">Initiate</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
