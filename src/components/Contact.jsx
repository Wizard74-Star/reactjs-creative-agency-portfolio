import { motion } from "motion/react";
import Title from "./Title";

const Contact = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        </motion.div>
    )
}

export default Contact

