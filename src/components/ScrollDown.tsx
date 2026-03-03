import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useLightMode } from "../context/light.context";

export default function ScrollDown() {
  const {isLightMode} = useLightMode()
  return (
    <motion.div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl cursor-pointer ${isLightMode ? "text-gray-800" : "text-white"}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaChevronDown />
    </motion.div>
  );
}
