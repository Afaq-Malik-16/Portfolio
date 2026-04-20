import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const chaseLogoUrl = new URL("../../ChaseLogo.png", import.meta.url).href;
const navigatorPreviewSvg = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" fill="none">',
  '<defs>',
  '<linearGradient id="bg" x1="0" y1="0" x2="1200" y2="675" gradientUnits="userSpaceOnUse">',
  '<stop stop-color="#0F172A" />',
  '<stop offset="1" stop-color="#1E293B" />',
  '</linearGradient>',
  '<linearGradient id="accent" x1="180" y1="140" x2="1020" y2="560" gradientUnits="userSpaceOnUse">',
  '<stop stop-color="#38BDF8" />',
  '<stop offset="1" stop-color="#22C55E" />',
  '</linearGradient>',
  '</defs>',
  '<rect width="1200" height="675" rx="48" fill="url(#bg)" />',
  '<circle cx="970" cy="150" r="100" fill="#38BDF8" fill-opacity="0.12" />',
  '<circle cx="210" cy="520" r="130" fill="#22C55E" fill-opacity="0.12" />',
  '<rect x="120" y="120" width="960" height="435" rx="36" fill="#0B1220" stroke="url(#accent)" stroke-width="2" />',
  '<rect x="168" y="172" width="210" height="18" rx="9" fill="#38BDF8" fill-opacity="0.9" />',
  '<rect x="168" y="214" width="420" height="14" rx="7" fill="#CBD5E1" fill-opacity="0.35" />',
  '<rect x="168" y="246" width="360" height="14" rx="7" fill="#CBD5E1" fill-opacity="0.25" />',
  '<rect x="168" y="316" width="864" height="140" rx="28" fill="#111827" stroke="#334155" stroke-width="1.5" />',
  '<text x="168" y="404" fill="#F8FAFC" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="700">Navigator</text>',
  '<text x="168" y="454" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-size="28">Assign projects, track traffic, and manage users</text>',
  '<rect x="816" y="498" width="216" height="52" rx="26" fill="url(#accent)" />',
  '<text x="924" y="532" text-anchor="middle" fill="#0F172A" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700">Live Demo</text>',
  '</svg>',
].join('');
const navigatorPreviewUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(navigatorPreviewSvg)}`;

const projects = [
  {
    title: "Climatrack",
    description: "Weather planning app built for the 2025 NASA Space Apps Challenge. Helps users check rain, heat, wind, and cold risk using NASA POWER data.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    tags: ["React", "NASA API", "Vercel"],
    github: "https://github.com/Afaq-Malik-16/NASA-Space-Apps-Challenge",
    demo: "https://climatrack-nsac.vercel.app/",
  },
  {
    title: "Planning Process Control",
    description: "A workflow-focused system for managing merchant operations at Chase Value. Includes Master, Admin, and User panels for organized production.",
    image: chaseLogoUrl,
    credentials: [
      { label: "Admin panel", email: "admin@gmail.com", password: "admin123" },
      { label: "Master panel", email: "master@gmail.com", password: "master123" },
      { label: "User panel", email: "user@gmail.com", password: "user123" },
    ],
    tags: ["React", "Workflow", "Management"],
    github: "https://github.com/Afaq-Malik-16/PPC-Planning-Production-Control",
    demo: "https://ppc-planning-production-control.vercel.app/",
  },
  {
    title: "Navigator",
    description: "A project operations dashboard for assigning work, tracking traffic, and managing users through role-based access.",
    image: navigatorPreviewUrl,
    credentials: [
      { label: "Admin access", email: "admin", password: "admin123" },
      { label: "User access", email: "user", password: "user123" },
    ],
    tags: ["React", "Project Ops", "Analytics"],
    github: "https://github.com/Afaq-Malik-16/Navigator",
    demo: "https://navigator-tawny.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl"
            >
              A selection of my favorite works. Each project is built with a focus on performance and user experience.
            </motion.p>
          </div>
          <Button variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden group border-none bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                {project.image && (
                  <div className="relative aspect-video overflow-hidden bg-white flex items-center justify-center p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="eager"
                      className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 z-20 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center gap-4">
                      <Button size="icon" variant="secondary" className="rounded-full" nativeButton={false} render={<a href={project.github} target="_blank" rel="noreferrer" />}>
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full" nativeButton={false} render={<a href={project.demo} target="_blank" rel="noreferrer" />}>
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                  <details className="group">
                    <summary className="mt-1 inline-flex cursor-pointer list-none items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted [&::-webkit-details-marker]:hidden">
                      View details
                    </summary>
                    <p className="mt-3 text-muted-foreground text-sm leading-6">
                      {project.description}
                    </p>
                    {project.credentials && (
                      <div className="mt-4 rounded-2xl border border-border bg-muted/40 p-4 text-sm">
                        <p className="mb-3 font-semibold text-foreground">Login credentials</p>
                        <div className="space-y-3 text-muted-foreground">
                          {project.credentials.map((credential) => (
                            <div key={credential.label} className="rounded-xl bg-background/80 p-3">
                              <p className="font-medium text-foreground">{credential.label}</p>
                              <p>Email: {credential.email}</p>
                              <p>Password: {credential.password}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </details>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
