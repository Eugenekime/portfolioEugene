import { motion } from "framer-motion";

export default function MotionText({
  children,
  className = "",
  transition = 0.07,
}) {
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: transition },
    },
  };
  const letter = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 20 },
  };
  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {typeof children === "string" ? (
        children.split("").map((char, i) => (
          <motion.span key={i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      ) : (
        <motion.span variants={letter}>{children}</motion.span>
      )}
    </motion.div>
  );
}
