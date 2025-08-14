import { motion } from "framer-motion";

export default function Loader() {
  const bounce = {
    y: ["0%", "-50%"],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <div className="flex items-center justify-center gap-2 min-h-screen">
      <motion.span
        className="w-3 h-3 bg-[#02c37e]  rounded-full"
        animate={bounce}
      />
      <motion.span
        className="w-3 h-3 bg-[#02c37e]  rounded-full"
        animate={{
          ...bounce,
          transition: { ...bounce.transition, delay: 0.1 },
        }}
      />
      <motion.span
        className="w-3 h-3 bg-[#02c37e]  rounded-full"
        animate={{
          ...bounce,
          transition: { ...bounce.transition, delay: 0.2 },
        }}
      />
    </div>
  );
}
