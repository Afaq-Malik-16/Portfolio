import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const cvUrl = new URL("../../CV Afaq Malik (1).pdf", import.meta.url).href;

function handleCvClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.open(cvUrl, "_blank", "noopener,noreferrer");

  const downloadLink = document.createElement("a");
  downloadLink.href = cvUrl;
  downloadLink.download = "Afaq-Malik-CV.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            Afaq <span className="text-primary italic">Malik</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            I build clean, scalable web apps that look sharp, run fast, and make work easier for users and teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 group" nativeButton={false} render={<a href="#projects" />}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" nativeButton={false} render={<a href={cvUrl} onClick={handleCvClick} />}>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground opacity-50"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
