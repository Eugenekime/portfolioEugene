import { motion } from "framer-motion";

export default function AnimatedList({
  children,
  delay = 0.2,
  className = "",
}) {
  const arrayChild = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {arrayChild.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * delay, duration: 0.4 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
