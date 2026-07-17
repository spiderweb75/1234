export function Footer() {
  return (
    <footer className="bg-black py-16 md:py-24 border-t border-white/5 text-center relative z-10">
      <div className="flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-700">
        <img 
          src="/assets/logo.png" 
          alt="VoltStrike" 
          className="h-10 md:h-12 w-auto mb-8 grayscale hover:grayscale-0 transition-all duration-700" 
        />
        <p className="text-white text-xs font-sans tracking-[0.4em] font-bold">
          &copy; {new Date().getFullYear()} VOLTSTRIKE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
