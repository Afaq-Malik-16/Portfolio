import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: "NASA Certificate",
    issuer: "NASA Space Apps",
    date: "2025",
    image: new URL("../../nasa.PNG", import.meta.url).href,
  },
  {
    title: "SEO Certificate",
    issuer: "SEO Training",
    date: "2025",
    image: new URL("../../seo.PNG", import.meta.url).href,
  },
];

export default function Certifications() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!activeCertificate) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCertificate]);

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-xs uppercase tracking-[0.3em]">
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates and credentials</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.title}
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group text-left"
            >
              <Card className="overflow-hidden border-none bg-card/60 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                      <ZoomIn className="h-4 w-4" />
                      Click to view
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold">{certificate.title}</h3>
                    <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{certificate.date}</p>
                </div>
              </Card>
            </motion.button>
          ))}
        </div>
      </div>

      {activeCertificate && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.title}
          onClick={() => setActiveCertificate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl"
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-colors hover:bg-muted"
              aria-label="Close certificate preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.5fr_1fr]">
              <div className="bg-black/5">
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="h-full w-full max-h-[80vh] object-contain bg-black"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">
                    Certificate Preview
                  </Badge>
                  <div>
                    <h3 className="text-2xl font-bold">{activeCertificate.title}</h3>
                    <p className="mt-2 text-muted-foreground">{activeCertificate.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                  <span>{activeCertificate.date}</span>
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(null)}
                    className="rounded-full border border-border px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Close preview
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}