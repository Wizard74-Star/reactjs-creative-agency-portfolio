import { motion } from "motion/react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
          We Engineer <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">Intelligent Experiences</span> That Transform Trust Into Growth
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">End-to-end digital solutions powered by adaptive AI agents, secure blockchain architecture, and seamless cross-platform applications—engineered to automate complexity, humanize engagement, and turn users into enduring brand advocates.</motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: false, margin: "-100px" }}
        className="relative">
        <img src={assets.hero_img} alt="hero img" className="w-full max-w-6xl" />
        <img src={assets.bgImage1} alt="Bg image" className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden" />
      </motion.div>
    </div>
  )
}

export default Hero