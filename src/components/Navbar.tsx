import { motion } from "motion/react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-bottom py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AM<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Button variant="ghost" size="icon" nativeButton={false} render={<a href="https://github.com" target="_blank" rel="noreferrer" />}>
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" nativeButton={false} render={<a href="https://linkedin.com" target="_blank" rel="noreferrer" />}>
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="icon" nativeButton={false} render={<a href="https://github.com" target="_blank" rel="noreferrer" />}>
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" nativeButton={false} render={<a href="https://linkedin.com" target="_blank" rel="noreferrer" />}>
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
