import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 61;
const PAD_LENGTH = 3;

function getFrameUrl(index: number) {
  const paddedIndex = index.toString().padStart(PAD_LENGTH, '0');
  return `/assets/shoe-frames/ezgif-frame-${paddedIndex}.jpg`;
}

export function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      // load fallback or handle error silently
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      }
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(0);
    };
    
    const drawFrame = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      
      // Use Math.min to ensure the entire shoe is contained without cropping
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio) * 0.9; // Scale slightly down for breathing room
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;  
      
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      drawFrame(frameIndex);
    });
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      unsubscribe();
    };
  }, [images, scrollYProgress]);

  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.25], [50, -50]);
  
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.55], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.85], [50, -50]);

  return (
    <section ref={containerRef} className="h-[400vh] bg-black relative w-full border-t border-white/5">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-black">
        
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          
          {/* Feature 1 */}
          <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute left-8 md:left-24 lg:left-32 max-w-[280px] md:max-w-md"
          >
            <div className="w-12 h-1 bg-primary mb-6" />
            <h3 className="text-3xl md:text-6xl font-display font-bold text-white mb-4 leading-[0.9] tracking-tight">
              AERODYNAMIC<br/>SILHOUETTE
            </h3>
            <p className="text-white/60 font-sans text-base md:text-xl leading-relaxed">
              Cut through resistance. The ultra-sleek profile minimizes drag, turning your forward motion into a relentless force.
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute right-8 md:right-24 lg:right-32 max-w-[280px] md:max-w-md text-right flex flex-col items-end"
          >
            <div className="w-12 h-1 bg-primary mb-6" />
            <h3 className="text-3xl md:text-6xl font-display font-bold text-white mb-4 leading-[0.9] tracking-tight">
              CONDUCTIVE<br/>SOLE
            </h3>
            <p className="text-white/60 font-sans text-base md:text-xl leading-relaxed">
              Woven carbon filaments in the base absorb impact energy, channeling it directly into your next stride.
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute left-8 md:left-24 lg:left-32 max-w-[280px] md:max-w-md"
          >
            <div className="w-12 h-1 bg-primary mb-6" />
            <h3 className="text-3xl md:text-6xl font-display font-bold text-white mb-4 leading-[0.9] tracking-tight">
              LIGHTNING<br/>RESPONSE
            </h3>
            <p className="text-white/60 font-sans text-base md:text-xl leading-relaxed">
              Zero latency. The chassis adapts to micro-shifts in weight instantly, locking your foot in a grid of power.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
