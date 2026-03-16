import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import profilePhoto from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Available for Innovation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground tracking-tight mb-6 leading-[1.1]">
            Wesly Jasper
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/80 font-medium mb-4">
            AI Developer <span className="text-muted-foreground">|</span> Computer Vision{" "}
            <span className="text-muted-foreground">|</span> Full-Stack
          </p>
          <p className="text-lg text-foreground max-w-lg mb-10 leading-relaxed">
            I build intelligent systems that extract meaning from images, documents, and historical
            data using AI and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-[0_0_20px_hsl(217_91%_60%/0.4)] transition-all active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-secondary text-secondary-foreground border border-border font-semibold rounded-xl hover:bg-muted transition-all flex items-center gap-2"
            >
              <ArrowDown size={18} /> Resume
            </a>
            <a
              href="https://github.com/wesly-jasper"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-secondary text-secondary-foreground border border-border font-semibold rounded-xl hover:bg-muted transition-all flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative justify-self-center md:justify-self-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-primary to-accent shadow-2xl">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-background">
              <img src={profilePhoto} alt="Wesly Jasper" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card border border-border p-4 rounded-2xl shadow-xl animate-float">
            <span className="text-2xl">🤖</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
