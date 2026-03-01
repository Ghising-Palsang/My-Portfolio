import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollDown() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaChevronDown />
    </motion.div>
  );
}
