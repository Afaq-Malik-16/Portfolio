import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Full Stack <span className="text-primary">Developer</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I turn ideas into polished digital experiences that feel modern, work smoothly, and deliver real value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-background shadow-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Development Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 md:-right-10">
              <Card className="shadow-xl border-primary/20">
                <CardContent className="p-6">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-3xl font-bold text-primary">3+</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">Full</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Stack</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
