import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Animated Gradients */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      />
      <motion.div
        className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]"
        animate={{
          x: -mousePosition.x * 0.03,
          y: -mousePosition.y * 0.03,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      />
      <motion.div
        className="absolute -bottom-[10%] left-[20%] h-[45%] w-[45%] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: mousePosition.x * 0.02,
          y: -mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
