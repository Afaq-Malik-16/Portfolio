import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  Globe, 
  Cpu,
  Framer,
  Wind
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["Git & GitHub", "Docker", "Vercel", "Unit Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I use a modern and powerful set of tools to build high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Animation */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
          <Code2 size={48} />
          <Globe size={48} />
          <Smartphone size={48} />
          <Framer size={48} />
          <Wind size={48} />
        </div>
      </div>
    </section>
  );
}
